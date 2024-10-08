import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function ImageSlider({ children: slides }) {
  const [currentSlide, setCurrent] = useState(0);
  const startX = useRef(0);

  const getPrev = () =>
    setCurrent((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );

  const getNext = () =>
    setCurrent((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );

  // Handle touch start
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX; // Get the starting position
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX; // Get the current touch position
    const threshold = 50; // Minimum distance to detect a swipe

    if (startX.current - touchX > threshold) {
      getNext(); // Swipe left
    } else if (touchX - startX.current > threshold) {
      getPrev(); // Swipe right
    }
  };

  return (
    <div
      className="overflow-hidden w-full relative rounded"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={getPrev}
          className="transition transform hover:scale-125 duration-300"
        >
          <IoIosArrowBack
            className="text-gray-400 mix-blend-difference"
            size={30}
          />
        </button>
        <button
          onClick={getNext}
          className="transition transform hover:scale-125 duration-300"
        >
          <IoIosArrowForward
            className="text-gray-400 mix-blend-difference"
            size={30}
          />
        </button>
      </div>
      <div className="absolute bottom-8 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, indicator) => (
            <div
              key={indicator}
              className={`transition-all w-2 h-2 bg-neutral-400 rounded-full ${
                currentSlide === indicator ? "p-1" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  children: PropTypes.node.isRequired,
};
