import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";
import { isSupabaseConfigured } from "../lib/supabaseClient";
import "./admin.css";

const AdminLogin = () => {
  const { session, isAdmin, signIn } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isSupabaseConfigured) {
    return (
      <div className="admin__auth-screen">
        <div className="admin__auth-card">
          <h2>Admin portal not configured yet</h2>
          <p>
            Add <code>REACT_APP_SUPABASE_URL</code> and{" "}
            <code>REACT_APP_SUPABASE_ANON_KEY</code> to a <code>.env.local</code> file
            (see <code>supabase/SETUP.md</code>) and restart the app.
          </p>
        </div>
      </div>
    );
  }

  if (session && isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const { error: signInError } = await signIn(email, password);
    setSubmitting(false);
    if (signInError) {
      setError(signInError.message);
    }
  };

  return (
    <div className="admin__auth-screen">
      <form className="admin__auth-card" onSubmit={handleSubmit}>
        <h2>TravelSolutions Admin</h2>
        {session && !isAdmin && (
          <p className="admin__auth-error">
            This account isn't on the admin list. Contact another admin for access.
          </p>
        )}
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="admin__auth-error">{error}</p>}
        <button type="submit" className="admin__btn admin__btn-primary" disabled={submitting}>
          {submitting ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
