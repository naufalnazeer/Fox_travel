import React, { useEffect, useState } from "react";
import { listMedia, uploadMedia, deleteMedia } from "./mediaApi";

// Manages the photos attached to one saved entity (package / hotel / vehicle / gallery item).
// Only usable once the entity has a real id — the parent form should save the
// entity first, then render this.
const ImageManager = ({ entityType, entityId }) => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const refresh = async () => {
    try {
      const data = await listMedia(entityType, entityId);
      setImages(data);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityType, entityId]);

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    setError("");
    try {
      let nextOrder = images.length;
      for (const file of files) {
        // eslint-disable-next-line no-await-in-loop
        await uploadMedia(entityType, entityId, file, nextOrder);
        nextOrder += 1;
      }
      await refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleRemove = async (image) => {
    if (!window.confirm("Remove this image?")) return;
    try {
      await deleteMedia(image);
      await refresh();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="admin__image-grid">
        {images.map((img) => (
          <div className="admin__image-tile" key={img.id}>
            <img src={img.public_url} alt="" />
            <button
              type="button"
              className="admin__image-remove"
              onClick={() => handleRemove(img)}
              aria-label="Remove image"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        ))}
        <label className="admin__image-upload-tile">
          {uploading ? <i className="ri-loader-4-line"></i> : <i className="ri-add-line"></i>}
          <input type="file" accept="image/*" multiple onChange={handleFiles} disabled={uploading} />
        </label>
      </div>
      {error && <p className="admin__inline-error">{error}</p>}
    </div>
  );
};

export default ImageManager;
