/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import VerticalImage from '../../assets/Loisirs/Chateaux/chateau1.png';
import SquareImage1 from '../../assets/Loisirs/Chateaux/chateau2.png';
import SquareImage2 from '../../assets/Loisirs/Chateaux/chateau3.jpg';
import { Link } from 'react-router-dom';

const LoisirsCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openPopup = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 flex flex-col gap-7 mb-10 mt-28">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center">
          <Link to="/randonnée" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Randonnée</Link>
          <Link to="/activités-aquatique" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Activités Aquatiques</Link>
          <Link to="/parc-grotte" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Parcs et Grottes</Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <img src={VerticalImage} alt="Vertical" className="w-full h-auto rounded-md cursor-pointer" onClick={() => openPopup(VerticalImage)} />
          <div className="flex gap-4">
            <img src={SquareImage1} alt="Square1" className="w-1/2 h-auto rounded-md cursor-pointer" onClick={() => openPopup(SquareImage1)} />
            <img src={SquareImage2} alt="Square2" className="w-1/2 h-auto rounded-md cursor-pointer" onClick={() => openPopup(SquareImage2)} />
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-500">Les Châteaux et Musées des Cévennes</h2>
          <p>Les Cévennes regorgent d'un riche patrimoine historique et culturel, avec une multitude de châteaux et de musées à explorer. Que vous soyez passionné d'histoire, d'architecture ou d'art, vous trouverez certainement des sites fascinants à visiter dans la région.</p>
          <p>Les châteaux des Cévennes offrent un aperçu captivant de l'histoire médiévale de la région, avec leurs tours imposantes, leurs fortifications bien préservées et leurs vues spectaculaires sur la campagne environnante. Parmi les châteaux les plus remarquables, on trouve le Château d'Aujac à Aujac et le Château de Portes à Portes.</p>
          <p>En plus des châteaux, les musées des Cévennes présentent une variété d'expositions et de collections qui mettent en valeur l'histoire, la culture et les traditions locales. Des musées comme le Musée du mineur mine témoin à Alès, la Maison du mineur à La Grand Combe et le Musée du préhistorama à Rousson offrent des expériences éducatives et enrichissantes pour les visiteurs de tous âges.</p>
          <p>Que vous souhaitiez découvrir l'histoire minière de la région, explorer l'art préhistorique ou admirer des objets d'art uniques, les châteaux et musées des Cévennes vous promettent une expérience inoubliable.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-orange-500 mt-4">Les Châteaux :</h3>
        <ul className="list-disc pl-5">
          <li>Château d'Aujac à Aujac</li>
          <li>Château de Portes à Portes</li>

        </ul>
        <p className="mt-4">C'est un "petit" patrimoine, constitué d'entrées de galeries, tunnels, viaducs, conduites de voies ferrées, lampisteries, cheminée. Chaque; vestige a son histoire, sa fonction, sa particularité... On retrouve ce patrimoine sur les communes des vallées de la Cèze et de l'Auzonnet, Le Grand' Combe et Alès. Ainsi les communes minières de la communauté s'intègrent dans un territoire très vaste qu'est l'ancien bassin minier du Gard.</p>
        
        <h3 className="text-2xl font-bold text-orange-500 mt-4">Les Musées :</h3>
        <ul className="list-disc pl-5">
          <li>Musée du mineur mine témoin à Alès</li>
          <li>Maison du mineur à La Grand Combe</li>
          <li>Musée du préhistorama à Rousson</li>
          <li>Musée du bonbon à Uzès</li>
          <li>Musée de la moto et du vélo</li>
          <li>Musée du scribe à Saint Christol les Alès</li>
          <li>Musée de la musique à Anduze</li>
        </ul>
        
        <p className="mt-4">La bambouseraie à Anduze</p>
        <p>Vous trouverez par ce lien les musées de notre région :</p>
        <a href="http://www.tourisme-gard.com/" className="text-blue-500">www.tourisme-gard.com</a>
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

export default LoisirsCard;
