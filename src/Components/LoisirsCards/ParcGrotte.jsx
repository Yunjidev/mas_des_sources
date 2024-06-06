/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import VerticalImage from '../../assets/Loisirs/ParcGrotte/grotte1.jpg';
import SquareImage1 from '../../assets/Loisirs/ParcGrotte/grotte2.jpg';
import SquareImage2 from '../../assets/Loisirs/ParcGrotte/grotte3.jpg';
import { Link } from 'react-router-dom';

const ParcGrotte = () => {
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
    <div className="max-w-7xl mx-auto bg-white shadow-lg p-6 flex flex-col gap-7 mb-10 mt-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center">
          <Link to="/randonnée" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Randonnée</Link>
          <Link to="/chateaux-musées" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Châteaux et Musées</Link>
          <Link to="/activités-aquatique" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Activités Aquatiques</Link>
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
        <div className="w-full md:w-2/3 flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-orange-500">Exploration Spéléologique et Découverte Naturelle dans les Cévennes</h2>
          <p>La région des Cévennes offre une richesse naturelle exceptionnelle, avec ses parcs naturels, ses grottes mystérieuses et ses paysages époustouflants. Explorez les profondeurs de la terre et découvrez les merveilles cachées dans les grottes secrètes de la région. Plongez dans un monde souterrain fascinant, où stalactites et stalagmites créent un spectacle naturel unique.</p>
          <p>Les parcs naturels des Cévennes sont des joyaux de biodiversité, abritant une flore et une faune variées. Randonnez à travers des forêts luxuriantes, longez des rivières cristallines et découvrez des vallées verdoyantes à perte de vue. Imprégnez-vous de la beauté sauvage de ces paysages préservés, où chaque coin révèle une nouvelle merveille de la nature.</p>
          <p>Les panoramas spectaculaires des Cévennes vous couperont le souffle. Des sommets majestueux aux vallées verdoyantes, chaque vue offre une vision de la beauté naturelle à son état pur. Explorez des sentiers sinueux qui serpentent à travers des paysages à couper le souffle et découvrez des panoramas à couper le souffle à chaque tournant.</p>
          <p>Que vous soyez un amateur de plein air ou un aventurier en herbe, les Cévennes vous offrent une expérience unique de découverte et d'émerveillement. Explorez les mystères de la terre dans les grottes secrètes de la région et laissez-vous séduire par la splendeur naturelle des parcs préservés des Cévennes.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-500">Nouveau parc "Le Châtaignier"</h2>
        <p>Entre Villefort et Les Vans ( à 15 mn)</p>
        <p>En pleine forêt domaniale du col du Mas de l'Ayre sur plus de 5 hectares, à 1000 m d'altitude, découvrez le nouveau parcours aventure avec de nouvelles sensations dans un suberbe décor. 100 modules vous attentent sur 4 parcours et près de 1 km de tyrolienne.</p>
        <p>Découvrez également le sentier thématique sur le châtaignier ( itinéraire piéton balisé ), ses circuits VTT, et la balade à dos d'ânes à proximité.</p>
        <p>Parcours "KIDS" adaptés aux enfants, à partir de 2 ans.</p>
        <p>OUVERT toute l'année</p>
        <p>Réservation conseillée : 0668271312</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-500">LES GROTTES</h2>
        <ul className="list-disc pl-5">
          <li>Grotte de la Cocalière - Courry - 04 66 24 34 74</li>
          <li>Grotte la salamandre - Vers Barjac</li>
          <li>Grotte Chauvet - Ardèche</li>
          <li>Grottes de Trabuc - Mialet - 04 66 85 03 28</li>
        </ul>
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

export default ParcGrotte;
