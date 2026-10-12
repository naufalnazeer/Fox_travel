import { supabase, MEDIA_BUCKET } from "../lib/supabaseClient";

export const listMedia = async (entityType, entityId) => {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .eq("entity_type", entityType)
    .eq("entity_id", entityId)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data;
};

export const uploadMedia = async (entityType, entityId, file, sortOrder = 0) => {
  const ext = file.name.split(".").pop();
  const path = `${entityType}/${entityId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error: uploadError } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file);
  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path);

  const { data, error } = await supabase
    .from("media")
    .insert({
      entity_type: entityType,
      entity_id: entityId,
      storage_path: path,
      public_url: urlData.publicUrl,
      sort_order: sortOrder,
    })
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteMedia = async (mediaRow) => {
  await supabase.storage.from(MEDIA_BUCKET).remove([mediaRow.storage_path]);
  const { error } = await supabase.from("media").delete().eq("id", mediaRow.id);
  if (error) throw error;
};
