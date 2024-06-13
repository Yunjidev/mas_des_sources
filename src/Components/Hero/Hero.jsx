/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { IoMail, IoPaperPlane, IoPerson, IoLocation, IoCall } from 'react-icons/io5';

import BG from '/src/assets/mas.jpg';
import OverlayImage from '/src/assets/logo2.png';

const Hero = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  const email = 'boutierbrigitte30@gmail.com';
  const email2 = 'brigittebrun2@orange.fr';

  return (
    <>
      <div
        className="relative bg-cover bg-center h-[700px] flex items-center"
        style={{
          backgroundImage: `url(${BG})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
        <div className="container mx-auto flex flex-col items-start justify-center h-full relative pl-12">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-start items-start flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl text-black font-bold leading-tight sm:text-5xl">
              MAS DES SOURCES
              <span className="text-black"> - </span> 
              <span className="text-orange-500 pl-2">Cévénol</span>
            </h1>
            <p className="text-gray-800 text-left font-semibold mt-8 mb-12 text-3xl">
              Location de gîtes et chambre d'hôte dans les Cévennes.
            </p>
            <div className="flex justify-center items-center">
              <button onClick={toggleContactModal} className="text-white flex no-underline items-center px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 border-gray-900 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 hover:text-orange-500">
                <IoPerson className="mr-2" /> Contact
              </button>
              <a href={`mailto:${email}`} className="flex items-center px-8 py-3 m-2 text-lg font-semibold rounded bg-orange-500 text-gray-900 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600 hover:text-gray-100">
                <IoPaperPlane className="mr-2" /> Mail
              </a>
            </div>
          </div>
        </div>
        <img
          src={OverlayImage}
          alt="Overlay"
          className="object-cover w-96 h-96 absolute right-96 top-1/2 transform -translate-y-1/2 hidden md:block"
        />
      </div>
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact pour réservation :</h2>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <IoPerson className="text-lg mr-2" />
                <p>BRUN Brigitte</p>
              </div>
              <div className="flex items-center mb-2">
                <IoLocation className="text-lg mr-2" />
                <p>Le thau 30450 CHAMBON</p>
              </div>
              <div className="flex items-center mb-2">
                <IoMail className="text-lg mr-2" />
                <p>{email}</p>
              </div>
              <div className="flex items-center mb-2">
                <IoMail className="text-lg mr-2" />
                <p>{email2}</p>
              </div>
              <div className="flex items-center mb-2">
                <IoCall className="text-lg mr-2" />
                <p>04.66.60.47.23</p>
              </div>
              <div className="flex items-center mb-2">
                <IoCall className="text-lg mr-2" />
                <p>06.83.04.46.82</p>
              </div>
            </div>
            <button onClick={toggleContactModal} className="block mx-auto bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-orange-600 mt-4">Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
