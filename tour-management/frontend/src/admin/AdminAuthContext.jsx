import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

const AdminAuthContext = createContext(null);

const checkIsAdmin = async (userId) => {
  if (!userId) return false;
  const { data, error } = await supabase.from("admins").select("user_id").eq("user_id", userId).maybeSingle();
  if (error) return false;
  return Boolean(data);
};

export const AdminAuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    let active = true;

    const syncSession = async (newSession) => {
      setSession(newSession);
      const admin = await checkIsAdmin(newSession?.user?.id);
      if (active) setIsAdmin(admin);
    };

    supabase.auth.getSession().then(async ({ data }) => {
      await syncSession(data.session);
      if (active) setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      syncSession(newSession);
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signOut = () => supabase.auth.signOut();

  const value = {
    session,
    user: session?.user ?? null,
    isAdmin,
    loading,
    signIn,
    signOut,
  };

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => useContext(AdminAuthContext);
