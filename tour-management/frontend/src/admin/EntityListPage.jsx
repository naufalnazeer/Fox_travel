import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { tripStatusLabel } from "../utils/tripStatus";

const EntityListPage = ({ config }) => {
  const [rows, setRows] = useState([]);
  const [thumbs, setThumbs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    const { data, error: fetchError } = await supabase
      .from(config.table)
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
      setLoading(false);
      return;
    }

    setRows(data);

    if (data.length) {
      const ids = data.map((r) => r.id);
      const { data: mediaRows } = await supabase
        .from("media")
        .select("entity_id, public_url, sort_order")
        .eq("entity_type", config.entityType)
        .in("entity_id", ids)
        .order("sort_order", { ascending: true });

      const firstThumb = {};
      (mediaRows || []).forEach((m) => {
        if (!firstThumb[m.entity_id]) firstThumb[m.entity_id] = m.public_url;
      });
      setThumbs(firstThumb);
    }

    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.table]);

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete "${config.titleOf(row)}"? This cannot be undone.`)) return;
    const { error: deleteError } = await supabase.from(config.table).delete().eq("id", row.id);
    if (deleteError) {
      alert(deleteError.message);
      return;
    }
    load();
  };

  const togglePublished = async (row) => {
    await supabase.from(config.table).update({ is_published: !row.is_published }).eq("id", row.id);
    load();
  };

  const canCancel = config.fields.some((f) => f.key === "is_cancelled");

  const toggleCancelled = async (row) => {
    await supabase.from(config.table).update({ is_cancelled: !row.is_cancelled }).eq("id", row.id);
    load();
  };

  return (
    <div>
      <div className="admin__toolbar">
        <div>
          <h1>{config.pluralLabel}</h1>
          <p className="admin__page-subtitle">{rows.length} total</p>
        </div>
        <Link to={`${config.basePath}/new`} className="admin__btn admin__btn-primary">
          <i className="ri-add-line"></i> Add {config.label}
        </Link>
      </div>

      {error && <p className="admin__inline-error">{error}</p>}
      {loading && <p>Loading…</p>}

      {!loading && rows.length === 0 && (
        <div className="admin__empty">No {config.pluralLabel.toLowerCase()} yet. Add the first one.</div>
      )}

      <div className="admin__list">
        {rows.map((row) => {
          const status = config.statusOf ? config.statusOf(row) : null;
          return (
            <div
              className={`admin__card ${status && status !== "active" ? "admin__card--inactive" : ""}`}
              key={row.id}
            >
              {thumbs[row.id] ? (
                <img className="admin__card-thumb" src={thumbs[row.id]} alt="" />
              ) : (
                <div className="admin__card-thumb" />
              )}
              <div className="admin__card-body">
                <div className="admin__card-title">
                  {config.titleOf(row)}
                  <span
                    className={`admin__badge ${
                      row.is_published ? "admin__badge-published" : "admin__badge-draft"
                    }`}
                  >
                    {row.is_published ? "Published" : "Draft"}
                  </span>
                  {status && (
                    <span className={`admin__badge admin__badge-${status}`}>{tripStatusLabel[status]}</span>
                  )}
                </div>
                <div className="admin__card-meta">{config.metaOf(row)}</div>
              </div>
              <div className="admin__card-actions">
                <button
                  type="button"
                  className="admin__btn admin__btn-outline admin__btn-sm"
                  onClick={() => togglePublished(row)}
                >
                  {row.is_published ? "Unpublish" : "Publish"}
                </button>
                {canCancel && (
                  <button
                    type="button"
                    className="admin__btn admin__btn-outline admin__btn-sm"
                    onClick={() => toggleCancelled(row)}
                  >
                    {row.is_cancelled ? "Reactivate" : "Cancel Trip"}
                  </button>
                )}
                <Link to={`${config.basePath}/${row.id}`} className="admin__btn admin__btn-outline admin__btn-sm">
                  Edit
                </Link>
                <button
                  type="button"
                  className="admin__btn admin__btn-danger admin__btn-sm"
                  onClick={() => handleDelete(row)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntityListPage;
