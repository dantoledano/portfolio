import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function ImageSlider({ children: slides }) {
  const [currentSlide, setCurrent] = useState(0);
  const getPrev = () =>
    setCurrent((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );

  const getNext = () =>
    setCurrent((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );
  return (
    <div className="overflow-hidden w-full relative rounded">
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
          <IoIosArrowBack size={30} />
        </button>
        <button
          onClick={getNext}
          className="transition transform hover:scale-125 duration-300"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
      <div className="absolute bottom-8 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, indicator) => (
            // eslint-disable-next-line react/jsx-key
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
  children: PropTypes.node.isRequired, // Expects 'children' to be a valid React node
};
