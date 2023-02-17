import React, { useState } from "react";
import { ReactComponent as ArrowRight } from "./assets/arrow-right-solid.svg";
import { ReactComponent as ArrowLeft } from "./assets/arrow-left-solid.svg";

const ImageSlider = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handlePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) return null;
  console.log(current);
  return (
    <section className="slider">
      <button className="left-arrow" onClick={handlePrev}>
        <ArrowLeft />
      </button>
      <button className="right-arrow" onClick={handleNext}>
        <ArrowRight />
      </button>

      {data.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <img src={slide.src} alt="Slider" className="slider-image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
