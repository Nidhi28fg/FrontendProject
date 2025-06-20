import React, { useState } from 'react';
import img1 from '../assets/Rectangle602.png';
import img2 from '../assets/Rectangle602.png';
import img3 from '../assets/Rectangle602.png';

const images = [
  { id: 1, url: img1, alt: 'Image 1' },
  { id: 2, url: img2, alt: 'Image 2' },
  { id: 3, url: img3, alt: 'Image 3' }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full mt-10 ">
    
        <img
          src={images[current].url}
          alt={images[current].alt}
          className="w-full lg:h-[100vh] object-contain transition-all duration-500"
        />
     
      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-gray-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
