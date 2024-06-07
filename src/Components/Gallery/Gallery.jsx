import { useState } from 'react';

// Import des images
import image1 from '../../assets/Gallery/gallery1.jpg';
import image2 from '../../assets/Gallery/gallery2.jpg';
import image3 from '../../assets/Gallery/gallery3.jpg';
import image4 from '../../assets/Gallery/gallery4.jpg';
import image5 from '../../assets/Gallery/gallery5.jpg';
import image6 from '../../assets/Gallery/gallery6.jpg';
import image7 from '../../assets/Gallery/gallery7.jpg';
import image8 from '../../assets/Gallery/gallery8.jpg';
import image9 from '../../assets/Gallery/gallery9.jpg';
import image10 from '../../assets/Gallery/gallery10.jpg';
import image11 from '../../assets/Gallery/gallery11.jpg';
import image13 from '../../assets/Gallery/gallery13.jpg';
import image14 from '../../assets/Gallery/gallery14.jpg';
import image15 from '../../assets/Gallery/gallery15.jpg';
import image16 from '../../assets/Gallery/gallery16.jpg';
import image17 from '../../assets/Gallery/gallery17.jpg';
import image18 from '../../assets/Gallery/gallery18.jpg';
import image19 from '../../assets/Gallery/gallery19.jpg';

const Gallery = () => {
  const images = [
    image1, image2, image3,
    image4, image5, image6,
    image7, image8, image9,
    image10, image11, image13, 
    image14, image15, image16, 
    image17, image18, image19
  ];

  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="container mx-auto px-5 py-2 lg:px-22 lg:pt-12 mt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 flex-wrap">
          {images.slice(3, 9).map((image, index) => (
            <div key={index} className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 flex-wrap">
          {images.slice(9, 15).map((image, index) => (
            <div key={index} className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 flex-wrap">
          {images.slice(15, 18).map((image, index) => (
            <div key={index} className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={image}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
      </div>
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="mx-auto max-h-full max-w-full">
            <img
              alt="gallery"
              className="block rounded-lg object-cover object-center cursor-pointer"
              src={modalImage}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute top-0 right-0 m-4">
              <button onClick={closeModal} className="text-white text-xl">&#10005;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
