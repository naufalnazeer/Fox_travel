import React, { useEffect, useRef, useState } from "react";
import "./CardImageCarousel.css";

// Small auto-advancing image slider for list/grid cards (packages, hotels,
// fleet) that have multiple photos attached. Single image -> just renders it,
// no controls. Multiple images -> fades between them on a timer, pausable on
// hover, with dot navigation.
const CardImageCarousel = ({ images, alt, placeholderIcon = "ri-image-2-line" }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images?.length || 0;

  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    if (count < 2 || paused) return undefined;
    const timer = setInterval(() => {
      setIndex((indexRef.current + 1) % count);
    }, 3500);
    return () => clearInterval(timer);
  }, [count, paused]);

  useEffect(() => {
    if (index >= count) setIndex(0);
  }, [count, index]);

  if (count === 0) {
    return (
      <div className="card-carousel card-carousel--placeholder">
        <i className={placeholderIcon}></i>
      </div>
    );
  }

  return (
    <div
      className="card-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={alt}
          loading="lazy"
          className={`card-carousel__slide ${i === index ? "is-active" : ""}`}
        />
      ))}
      <div className="card-carousel__scrim" />

      {count > 1 && (
        <div className="card-carousel__dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`card-carousel__dot ${i === index ? "is-active" : ""}`}
              aria-label={`Show image ${i + 1}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIndex(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardImageCarousel;
