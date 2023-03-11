import { useState, useEffect } from "react";
import Image1 from "../assets/andrew-winkler-Ez3IdcUELzs-unsplash.jpg";
import Image2 from "../assets/janko-ferlic-mIs_QHS1ht8-unsplash.jpg";
import Image3 from "../assets/jasper-garratt-nXfJlT2sfng-unsplash.jpg";
import Image4 from "../assets/mostafa-meraji-Hu3NNge_kj4-unsplash.jpg";
import Image5 from "../assets/sergey-sokolov-emfa5Jn-6U0-unsplash.jpg";
import Image6 from "../assets/image-11.jpg";
import Image7 from "../assets/image-35.jpg";
import Image8 from "../assets/abhyuday-majhi-1gz-AUUqGv8-unsplash.jpg";
import Image9 from "../assets/land8.jpg";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-80 rounded-lg border-4 border-black">
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-2000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;