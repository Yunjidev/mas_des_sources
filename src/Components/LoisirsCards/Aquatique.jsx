/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VerticalImage from '../../assets/Loisirs/Aquatique/aqua1.jpg';
import SquareImage1 from '../../assets/Loisirs/Aquatique/aqua4.jpg';
import SquareImage2 from '../../assets/Loisirs/Aquatique/aqua3.jpg';

const Aquatique = () => {
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
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-orange-500">Exploration Aquatique dans les Cévennes</h2>
          <p>Les Cévennes, avec ses rivières, lacs et gorges, offre une multitude d'opportunités pour les amateurs d'activités aquatiques. Que vous soyez intéressé par le canoë-kayak, le canyoning, la spéléologie, ou simplement la détente autour d'un lac, vous trouverez des activités qui correspondent à vos envies.</p>
          <p>Le Cap Canoe, situé à Saint Ambroix, propose des parcours variés allant de 4 km à 30 km, idéaux pour les débutants comme pour les confirmés. Avec la possibilité de louer des équipements et de bénéficier d'une navette bus pour le retour, cette activité est accessible à tous.</p>
          <p>La base nautique Grande Nature, située à Villefort, offre une gamme d'activités nautiques telles que le canoë, le VTT, le tir à l'arc, ainsi que des activités plus exaltantes comme le canyoning, la spéléologie et l'escalade. Entre amis ou en famille, vous serez accueilli dans un cadre naturel privilégié, entre lac et montagne, pour vivre des moments inoubliables.</p>
          <p>Les activités proposées par Grande Nature permettent de découvrir la Lozère à travers des expériences de plein air alliant plaisir et découverte. Que vous souhaitiez explorer le canyon du Chassezac, parcourir la via ferrata à Castanet, ou simplement naviguer sur le lac de Villefort, chaque activité offre une occasion unique de s'immerger dans la nature et de vivre des aventures mémorables.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-500">CAP CANOE</h2>
        <p>Parcours de : 4 km - 8 km - 14 km - 30 km (1 ou 2 jours) Navette bus retour)</p>
        <p>Curieuse destinée quand on naît petite rivière lozérienne, de s'unir au seigneur de nos fleuves. C'est sans doute ce qui doit à la Cèze ce mélange sauvageon et princier qui en fait la richesse touristique de la vallée qui porte son nom, des Cévennes jusqu'au Rhône. Cette mystérieuse cévenole, le saviez-vous, se flatte de cacher entre ses galets, de l'or... Que le plus précieux des métaux l'ait choisie comme écrin ne peut être meilleur garant de beauté et de secret. Son surnom de "rivière perdue" ne peut qu'inciter à jouer sur elle aux explorateurs. Un conseil avant de rendre les rames les grains d'or qui y sont collés vous appartiennent et les paillettes que vous ramènerez prouveront que vous avez été un jour "les aventuriers de la rivière perdue".</p>
        <ul className="list-disc pl-5">
          <li>Contact(s) : Alain JOURDAN</li>
          <li>Téléphone : 04.66.24.25.16</li>
          <li>Fax : 04.66.24.23.96</li>
          <li>
            <a href="https://www.capcanoe.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 visited:text-blue-700">Site Internet personnel : CAP CANOE</a>
          </li>
          <li>Adresse : 30500 Saint Ambroix</li>
          <li>Périodes d'ouverture : Mai à Le lac de Villefort est ses activités.</li>
        </ul>
        <h2 className="text-2xl font-bold text-orange-500">Le lac de Villefort est ses activitées.</h2>
        <ul className="list-disc pl-5">
          <li>Canyoning - Spéléologie - Escalade - Via Ferrata</li>
          <li>Canoë - VTT - Tir à l'arc</li>
          <li>Base Nautique</li>
        </ul>
        <p>Découvrez la Lozère à une demi heure à travers des activités sportives de pleine nature alliant plaisir et découverte, encadrées par des professionnels du plein air.</p>
        <p>Entre amis ou en famille, pour une journée, un week end ou lors de vos vacances, venez vivre l'aventure à travers nos activités ludiques et originales adaptées à vos envies!</p>
        <p>Découvrez le canyon du Chassezac en enchainant les sauts, les toboggans, les rappels, qui en font son charme tout en faisant le plein de sensations...</p>
        <p>Situé à Villefort, aux abords du Parc National des Cévennes, l'équipe de GRANDEUR NATURE vous accueille dans un cadre naturel privilégié, entre lac et montagne, pour vous faire partager leur passion.</p>
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

export default Aquatique;

