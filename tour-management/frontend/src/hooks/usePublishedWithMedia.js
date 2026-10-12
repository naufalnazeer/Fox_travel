import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

// Fetches published rows from `table` plus their photos from the shared
// `media` table, attached as row.images (an array of public URLs, in
// sort_order). Filters is_published explicitly rather than relying on RLS
// alone — RLS lets admins read drafts too (so the dashboard can list them),
// which would otherwise leak drafts onto the public pages for anyone
// browsing them while signed in as an admin.
const usePublishedWithMedia = (table, entityType) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    let active = true;

    (async () => {
      setLoading(true);
      const { data: items, error: itemsError } = await supabase
        .from(table)
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (itemsError) {
        if (active) {
          setError(itemsError);
          setLoading(false);
        }
        return;
      }

      const ids = (items || []).map((item) => item.id);
      const imagesByEntity = {};

      if (ids.length) {
        const { data: media } = await supabase
          .from("media")
          .select("entity_id, public_url, sort_order")
          .eq("entity_type", entityType)
          .in("entity_id", ids)
          .order("sort_order", { ascending: true });

        (media || []).forEach((m) => {
          if (!imagesByEntity[m.entity_id]) imagesByEntity[m.entity_id] = [];
          imagesByEntity[m.entity_id].push(m.public_url);
        });
      }

      if (active) {
        setRows((items || []).map((item) => ({ ...item, images: imagesByEntity[item.id] || [] })));
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [table, entityType]);

  return { rows, loading, error, isConfigured: isSupabaseConfigured };
};

export default usePublishedWithMedia;
