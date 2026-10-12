import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";
import "./admin.css";

// Supabase's invite/recovery email links land here with the session tokens in
// the URL (handled automatically by supabase-js's detectSessionInUrl). Once a
// session shows up, we ask the invited user to choose their own password.
const AcceptInvite = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // verifying | ready | success
  const [linkError, setLinkError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const hashErrorDescription = hashParams.get("error_description");
    if (hashErrorDescription) {
      setLinkError(hashErrorDescription.replace(/\+/g, " "));
      setStatus("ready");
      return;
    }

    let active = true;

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active && session) setStatus("ready");
    });

    supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) setStatus("ready");
    });

    // Give the client a moment to parse the URL before giving up.
    const timeout = setTimeout(() => {
      if (active) {
        setLinkError((prev) => prev || "This invitation link is invalid or has expired.");
        setStatus((prev) => (prev === "verifying" ? "ready" : prev));
      }
    }, 4000);

    return () => {
      active = false;
      clearTimeout(timeout);
      listener.subscription.unsubscribe();
    };
  }, []);

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

  if (status === "success") {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (password.length < 8) {
      setFormError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setSubmitting(false);

    if (error) {
      setFormError(error.message);
      return;
    }

    setStatus("success");
    navigate("/admin", { replace: true });
  };

  return (
    <div className="admin__auth-screen">
      {status === "verifying" && (
        <div className="admin__auth-card">
          <h2>Verifying your invitation…</h2>
        </div>
      )}

      {status === "ready" && linkError && (
        <div className="admin__auth-card">
          <h2>Invitation link problem</h2>
          <p className="admin__auth-error">{linkError}</p>
          <p>Ask another admin to send you a new invitation, then open it in a fresh tab.</p>
        </div>
      )}

      {status === "ready" && !linkError && (
        <form className="admin__auth-card" onSubmit={handleSubmit}>
          <h2>Welcome to TravelSolutions Admin</h2>
          <p>Choose a password to finish setting up your account.</p>
          <label>
            New password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              autoFocus
              required
            />
          </label>
          <label>
            Confirm password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </label>
          {formError && <p className="admin__auth-error">{formError}</p>}
          <button type="submit" className="admin__btn admin__btn-primary" disabled={submitting}>
            {submitting ? "Saving…" : "Set password & continue"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AcceptInvite;
