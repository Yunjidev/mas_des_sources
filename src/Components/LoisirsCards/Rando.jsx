/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import VerticalImage from '../../assets/Loisirs/Rando/rando1.jpg';
import SquareImage1 from '../../assets/Loisirs/Rando/rando2.jpg';
import SquareImage2 from '../../assets/Loisirs/Rando/rando3.jpg';
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
          <Link to="/activités-aquatique" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Activités Aquatiques</Link>
          <Link to="/chateaux-musées" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Châteaux et Musées</Link>
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
        <div className="w-full md:w-2/3 flex flex-col gap-12">
          <h2 className="text-2xl font-bold text-orange-500">LES RANDONNEES</h2>
          <p>Nous vous avons fait un descriptif ci-dessus afin que vous fassiez un petit programme pour vos vacances mais nous sommes présents à votre disposition pour tous renseignements. Nous vous souhaitons de passer un agréable séjour dans les Cévennes.</p>
          <p>De nombreuses randonnées vous feront découvrir les alentours de nos petits villages et profiter de la nature dans le calme et la sérénité.</p>
          <ul className="list-disc pl-5">
            <li>Randonnée de 5 km (Le Chambon - Tarabias)</li>
            <li>Randonnée de 6 km (Le Chambon - Dieusses)</li>
            <li>Randonnée de 4 km (Le Chambon - Prentigarde - Cornas - Charreneuve)</li>
            <li>Randonnée de 10 km (Le Chambon - Tarabias - Barrage de Sénéchas)</li>
            <li>Randonnée de 19 km (Le Chambon - Col de l'Ance)</li>
            <li>Randonnée de 11 km (Le Chambon - Bouziges - Mercoire)</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-orange-500 mt-4">RANDONNEE</h3>
        <p>"Au flanc du Mont-Lozère, c’est à monter qu’on pense" disait Chabrol, célèbre écrivain et conteur. Alors quittez la gare et parcourez les ruelles du village médiéval de Génolhac.</p>
        <p>A travers le massif granitique, au milieu des châtaigniers et des chênes blancs, atteignez le Col de Montclar puis le Col de La Coste. Les points de vue sont nombreux et permettent d’admirer les vallées de la Cèze, de l’Homol et du Luech.</p>
        <p>Génolhac est une étape sur la Voie Régordane, ancien axe de circulation reliant le pays de Nîmes à l’Auvergne. Les Romains l’aménagèrent ensuite pour des utilisations tant économiques que militaires. Pendant le Moyen Age, pèlerins et croisés parcourent le chemin jusqu’à Saint-Gilles et Aigues-Mortes, point d’embarquement pour les lieux saints.</p>
        <h4 className="text-lg font-bold text-orange-500 mt-4">A VOIR EN CHEMIN :</h4>
        <ul className="list-disc pl-5">
          <li>Les vieilles ruelles et maisons moyenâgeuses de Génolhac</li>
          <li>Les vestiges de la voie Régordane</li>
          <li>Le point de vue au Col de Montclar</li>
        </ul>
        <div className="mt-4">
          <p>Comité Départemental de la Randonnée Pédestre du Gard</p>
          <p>Tél : + 33 (0)4 66 74 08 15</p>
          <p><a href="http://perso.orange.fr/cdrp30.rando" className="text-blue-500">perso.orange.fr/cdrp30.rando</a></p>
        </div>
        <div className="mt-4">
          <p>Office du tourisme de Génolhac</p>
          <p>Tél : + 33 (0)4 66 61 18 32</p>
          <p><a href="http://www.cevennes-montlozere.com" className="text-blue-500">www.cevennes-montlozere.com</a></p>
        </div>
        <div className="mt-4">
          <p>Informations sur le département du Gard : Comité Départemental du Tourisme</p>
          <p>Tél : + 33 (0)4 66 36 96 30</p>
          <p><a href="http://www.tourismegard.com" className="text-blue-500">www.tourismegard.com</a></p>
        </div>
        <p className="mt-4">Le chemin de Régordane est le tronçon cévenol de l'ancienne route de Paris au bas Languedoc par Clermont-Ferrand, Brioude, Le Puy et Alès. Il est d'abord connu sous le nom de "Chemin de Saint-Gilles", chemin de pèlerinage du Puy en Velay à l'abbaye de Saint-Gilles. Mais on dit aussi que son origine est naturellement géologique puis proto-historique. Elle aurait vu passer les Romains, les marins gênois, des rois et les hommes de Guillaume d'Orange en route pour délivrer Nîmes des Sarrazins en s'enfermant dans des tonneaux de vin… On le parcourt aujourd'hui de vestige en vestige, le long des ornières séculaires, avec les publications de ses découvreurs ou animateurs.</p>
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
