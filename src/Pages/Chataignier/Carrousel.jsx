/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import Img1 from '../../assets/Chataignier/1.jpg';
import Img2 from '../../assets/Chataignier/2.jpg';
import Img3 from '../../assets/Chataignier/3.jpg';
import Img4 from '../../assets/Chataignier/4.jpg';
import Img5 from '../../assets/Chataignier/5.jpg';
import Img6 from '../../assets/Chataignier/6.jpg';
import Img7 from '../../assets/Chataignier/7.jpg';
import Img8 from '../../assets/Chataignier/8.jpg';
import Img9 from '../../assets/Chataignier/9.jpg';
import Img10 from '../../assets/Chataignier/10.jpg';
import Img11 from '../../assets/Chataignier/11.jpg';

const Carousel = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11];
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = reject;
        });
      });
      try {
        const loaded = await Promise.all(promises);
        setLoadedImages(loaded);
      } catch (error) {
        console.error('Erreur lors du chargement des images', error);
      }
    };

    loadImages();
  }, [images]);

  const openPopup = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [loadedImages.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      setActiveIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right
      setActiveIndex((prevIndex) => (prevIndex - 1 + loadedImages.length) % loadedImages.length);
    }
  };

  if (loadedImages.length === 0) {
    return <div>Chargement des images...</div>;
  }

  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel wrapper */}
        <div className="relative h-96 overflow-hidden rounded-lg md:h-[600px]">
          {loadedImages.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <img
                src={image}
                className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                alt={`Slide ${index + 1}`}
                onClick={() => openPopup(image)}
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {loadedImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-white'}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + loadedImages.length) % loadedImages.length)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % loadedImages.length)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closePopup}>
          <div className="relative mx-4 max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Popup" className="w-full h-auto object-contain" />
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
