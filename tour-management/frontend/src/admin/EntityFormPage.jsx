import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import ImageManager from "./ImageManager";

const toFormValue = (field, value) => {
  if (field.type === "stringlist") {
    // Loaded/initial values are arrays (joined for display); once the user
    // types, state holds the raw textarea string instead — pass it through.
    return Array.isArray(value) ? value.join("\n") : value || "";
  }
  if (value === null || value === undefined) return field.type === "checkbox" ? false : "";
  return value;
};

const fromFormValue = (field, value) => {
  if (field.type === "stringlist") {
    // Untouched fields are still the array loaded from the DB (or the
    // default `[]`) — only a string (from actually editing the textarea)
    // needs splitting.
    if (Array.isArray(value)) return value;
    return (value || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }
  if (field.type === "number") return value === "" ? null : Number(value);
  if (field.type === "checkbox") return Boolean(value);
  return value;
};

// A required field counts as empty differently per type — a required number
// of 0 is a real value, but an empty string/array/null is not.
const isFieldEmpty = (field, value) => {
  if (field.type === "checkbox") return false;
  if (field.type === "number") return value === null || value === undefined;
  if (field.type === "stringlist") return !Array.isArray(value) || value.length === 0;
  return value === null || value === undefined || String(value).trim() === "";
};

const EntityFormPage = ({ config }) => {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();

  const [values, setValues] = useState(config.defaults);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    if (isNew) return;
    const load = async () => {
      const { data, error: fetchError } = await supabase
        .from(config.table)
        .select("*")
        .eq("id", id)
        .single();
      if (fetchError) {
        setError(fetchError.message);
      } else {
        setValues(data);
      }
      setLoading(false);
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (field, raw) => {
    setValues((prev) => ({ ...prev, [field.key]: raw }));
    setFieldErrors((prev) => {
      if (!prev[field.key]) return prev;
      const next = { ...prev };
      delete next[field.key];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {};
    config.fields.forEach((field) => {
      payload[field.key] = fromFormValue(field, values[field.key] ?? toFormValue(field, undefined));
    });

    const errors = {};
    config.fields.forEach((field) => {
      if (field.required && isFieldEmpty(field, payload[field.key])) {
        errors[field.key] = `${field.label} is required.`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError("Please fill in all required fields, highlighted below.");
      return;
    }
    setFieldErrors({});
    setSaving(true);

    try {
      let result;
      if (isNew) {
        result = await supabase.from(config.table).insert(payload).select().single();
      } else {
        payload.updated_at = new Date().toISOString();
        result = await supabase.from(config.table).update(payload).eq("id", id).select().single();
      }

      if (result.error) {
        setError(result.error.message);
        return;
      }

      if (isNew) {
        navigate(`${config.basePath}/${result.data.id}`, { replace: true });
      } else {
        navigate(config.basePath);
      }
    } catch (err) {
      // A thrown/rejected request (network hiccup, etc.) instead of a normal
      // {error} result must still clear `saving` — otherwise the button stays
      // stuck on "Saving…" forever even though nothing further happened.
      setError(err.message || "Something went wrong while saving. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <div className="admin__toolbar">
        <h1>
          {isNew ? `Add ${config.label}` : `Edit ${config.label}`}
        </h1>
        <button type="button" className="admin__btn admin__btn-outline" onClick={() => navigate(config.basePath)}>
          Back to list
        </button>
      </div>

      <form className="admin__form" onSubmit={handleSubmit}>
        {config.fields.map((field) => {
          const value = toFormValue(field, values[field.key]);
          const fieldError = fieldErrors[field.key];
          const invalidClass = fieldError ? "admin__input-invalid" : "";

          if (field.type === "checkbox") {
            return (
              <label key={field.key} className="admin__checkbox-row">
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) => handleChange(field, e.target.checked)}
                />
                {field.label}
                {field.required && <span className="admin__required-mark">*</span>}
              </label>
            );
          }

          if (field.type === "textarea" || field.type === "stringlist") {
            return (
              <label key={field.key}>
                <span>
                  {field.label}
                  {field.required && <span className="admin__required-mark"> *</span>}
                </span>
                <textarea
                  className={invalidClass}
                  value={value}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
                {fieldError && <p className="admin__field-error">{fieldError}</p>}
              </label>
            );
          }

          if (field.type === "select") {
            return (
              <label key={field.key}>
                {field.label}
                {field.required && <span className="admin__required-mark">*</span>}
                <select className={invalidClass} value={value} onChange={(e) => handleChange(field, e.target.value)}>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {fieldError && <p className="admin__field-error">{fieldError}</p>}
              </label>
            );
          }

          return (
            <label key={field.key}>
              {field.label}
              {field.required && <span className="admin__required-mark">*</span>}
              <input
                className={invalidClass}
                type={field.type}
                value={value}
                onChange={(e) => handleChange(field, e.target.value)}
              />
              {fieldError && <p className="admin__field-error">{fieldError}</p>}
            </label>
          );
        })}

        {error && <p className="admin__inline-error">{error}</p>}

        <div className="admin__form-actions">
          <button type="submit" className="admin__btn admin__btn-primary" disabled={saving}>
            {saving ? "Saving…" : isNew ? "Create" : "Save Changes"}
          </button>
        </div>
      </form>

      {!isNew && (
        <div className="admin__form" style={{ marginTop: "1.2rem" }}>
          <div className="admin__form-section-title">Photos</div>
          <ImageManager entityType={config.entityType} entityId={id} />
        </div>
      )}
      {isNew && (
        <p className="admin__page-subtitle" style={{ marginTop: "1rem" }}>
          Save this {config.label.toLowerCase()} first, then you'll be able to add photos.
        </p>
      )}
    </div>
  );
};

export default EntityFormPage;
