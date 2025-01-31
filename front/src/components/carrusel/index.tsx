/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ArrowLeftToLine, ArrowRightToLine, Dice1 } from 'lucide-react';
import { Slides } from '@/utils/slides';
import { useState } from "react";

export function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto">

      <img
        src={Slides[currentIndex].image}
        alt="Carrusel"
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-center bg-cover duration-500 rounded-2xl"
      />

      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/20 rounded-full p-2 cursor-pointer hidden sm:block"
        onClick={prevSlide}
      >
        <ArrowLeftToLine size={28} />
      </div>

     
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/20 rounded-full p-2 cursor-pointer hidden sm:block"
        onClick={nextSlide}
      >
        <ArrowRightToLine size={28} />
      </div>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-400"
            }`}
          >
            <Dice1 size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}
