import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import events from "../assets/successfulEvents.js";

const HilightsOfSuccessfulEvent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previous, setPrevious] = useState(false);

  const nextSlide = () => {
    setPrevious(false);
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setPrevious(true);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };


  return (
    <div className="max-w mx-auto my-10 lg:px-10">
      {/* Heading and Description */}
      <div className="text-center mb-4 space-y-2 md:mb-10">
        <h1 className="text-2xl md:text-5xl font-semibold text-[#0D2561]">
          Highlights of Our Successful Events
        </h1>
        <p className="text-xs md:text-xl font-light">
          Showcasing milestone events that advanced our mission and engaged
          communities.
        </p>
      </div>

      {/* Events cards */}
      <div className=" border border-gray-400 rounded-lg m-1">
        <div className="w-full h-100 md:h-200 overflow-y-hidden rounded-lg">
          <img
            src={`${events[currentSlide].image}`}
            alt="image"
            className="w-full h-full object-cover rounded-lg object-top"
          />
        </div>

        <div className="mt-15 mb-20">
          <div className="flex items-center justify-between px-20">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-15 md:h-15 shadow-md shadow-gray-600 bg-white rounded-full hover:shadow-xl transition-shadow duration-200 flex items-center justify-center group cursor-pointer"
            >
              <FaChevronLeft className="w-3 h-3 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
            </button>

            {/* Title */}
            {/* a custom (animate-fade-in and animate-fade-out) class is added to the h2 element for transition */}
            <h2
              key={currentSlide} // This ensures React re-renders the element when the slide changes
              className={`text-xl md:text-4xl font-semibold  
                ${currentSlide === 0 || previous == true ? "animate-fade-out" : "animate-fade-in" }`}
            >
              {events[currentSlide].title}
            </h2>

            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-15 md:h-15 shadow-md shadow-gray-600 bg-white rounded-full hover:shadow-xl transition-shadow duration-200 flex items-center justify-center group cursor-pointer"
            >
              <FaChevronRight className="w-3 h-3 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
            </button>
          </div>

          {/* Description */}
          {/* a custom (animate-fade-in and animate-fade-out) class is added to the p element for transition */}
          <div
          className="text-center p-4 mx-auto space-y-2 max-w-240">
            <p
            key={currentSlide}
            className={`text-sm md:text-2xl font-normal my-5 px-4
              ${currentSlide === 0 || previous == true ? "animate-fade-out" : "animate-fade-in"}`}>
              {events[currentSlide].description}
            </p>
          </div>

          {/* Statistics */}
          {/* a custom (animate-fade-in-stat and animate-fade-out-stat) class is added to the div element for transition */}
          <div 
          key={currentSlide}
          className={`flex justify-center gap-12 mb-9
            ${currentSlide === 0 || previous == true ? "animate-fade-out-stat" : "animate-fade-in-stat"}`}>
            {events[currentSlide].stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                // style={{ transform: `translateX(-${currentSlide * 100}% 100)` }}
              >
                <div className="text-lg md:text-3xl font-bold text-[#0D2561] mb-1">
                  {stat.number}
                </div>
                <div className="text-lg md:text-3xl font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* View Details Button */}
          <div className="flex justify-center mb-20 md:mb-40">
            <button className="px-4 py-2 text-xs md:text-4xl md:px-8 md:py-5 border-3  font-semibold border-[#261C71] text-[#261C71] rounded-full hover:bg-[#261C71] hover:text-white transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HilightsOfSuccessfulEvent;

// This component uses custom font
