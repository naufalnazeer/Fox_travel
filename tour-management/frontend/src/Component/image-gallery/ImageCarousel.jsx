import React, { useRef } from "react";
import "./ImageCarousel.css";
import galleryImages from "./galleryImage";

const ImageCarousel = () => {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(".carousel__slide");
    const amount = (slide ? slide.offsetWidth : 300) + 16;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="image-carousel">
      <button
        type="button"
        className="carousel__arrow carousel__arrow-left"
        onClick={() => scrollByAmount(-1)}
        aria-label="Previous image"
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>

      <div className="carousel__track" ref={trackRef}>
        {galleryImages.map((img, index) => (
          <div className="carousel__slide" key={index}>
            <img src={img} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow-right"
        onClick={() => scrollByAmount(1)}
        aria-label="Next image"
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
};

export default ImageCarousel;
