import { createClient } from "@supabase/supabase-js";

const url = process.env.REACT_APP_SUPABASE_URL;
const anonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

// During local setup (before real credentials are added to .env.local), this
// stays null instead of throwing, so the public site still renders — admin
// features and dynamic content just show a clear "not configured" state.
export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null;

export const MEDIA_BUCKET = "media";
