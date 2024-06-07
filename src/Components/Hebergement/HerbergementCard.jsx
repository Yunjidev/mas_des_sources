/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Imgcard1 from '../../assets/mas.jpg';
import Imgcard2 from '../../assets/ImgCard/tilleul.jpg';
import Imgcard3 from '../../assets/ImgCard/chataignier.jpg';
import Imgcard4 from '../../assets/ImgCard/chene.jpg';
import Imgcard5 from '../../assets/ImgCard/pin.jpg';
import Imgcard6 from '../../assets/ImgCard/chataignier2.jpg';
import Imgcard7 from '../../assets/ImgCard/chambre.jpg';
import Imgcard8 from '../../assets/ImgCard/camelia.jpg';
import { FaUsers, FaWifi, FaBed } from 'react-icons/fa'; // Importation des icônes nécessaires
import { FaKitchenSet } from "react-icons/fa6";
import { PiTelevisionFill } from "react-icons/pi";
import { MdBathroom } from "react-icons/md";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";

const hebergementData = [
  {
    image: Imgcard2,
    title: 'Le Tilleul',
    description: 'Gîte avec chambre et tous les équipements nécessaires, terrasse devant votre gîte avec une vue imprenable sur la vallée cévenole.',
    people: '1 à 2 personnes',
    Hs: 'HS : 490€ - 90€/nuitée',
    Bs: 'BS : 390€ - 80€/nuitée',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: true,
    bedrooms: '1 chambre - 1 lit',
    link: '/hebergement/tilleul',
  },
  {
    image: Imgcard3,
    title: 'Le Châtaignier',
    description: 'Restauré et aménagé dans notre mas, de la chambre vous profiterez d’une vue imprenable sur la vallée traversée par la rivière le Luech.',
    people: '2 à 4 personnes',
    Hs: 'HS : 490€ (540€/3-4 personnes) - 80€/nuitée (120€/3-4p)',
    Bs: 'BS : 390€ (420/3-4 personnes) - 80€/nuitée (120€/3-4p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: true,
    bedrooms: '1 chambre - 1 lit et 2 lits superposés',
    link: '/hebergement/chataignier',
  },
  {
    image: Imgcard4,
    title: 'Mas Le Chêne',
    description: 'Location du mas Le Chêne comprenant le gîte le Tilleul et le Châtaignier. Terrasse devant votre gîte avec une vue imprenable.',
    people: '1 à 8 personnes',
    Hs: 'HS : 980€ (1200€/8 personnes) - 210€/nuitée (8p)',
    Bs: 'BS : 760€ (960€/8 personnes) - 120€/nuitée (180€/8p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: true,
    bedrooms: '2 chambres - 2 lits et 2 lits superposés',
    link: '/hebergement/chene',
  },
  {
    image: Imgcard5,
    title: 'Mas Le Pin',
    description: "Location du mas Le Pin comprenant le gîte le Tilleul et le Châtaignier + la chambre d'hôte. Profitez de toutes les commodités du mas.",
    people: '1 à 8 personnes',
    Hs: 'HS : 1200€ (1700€/8 personnes) - 250€/nuitée (8p)',
    Bs: 'BS : 1200€ (8 personnes) - 180€/nuitée (230€/8p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: true,
    bedrooms: '3 chambres - 3 lits et 2 lits superposés',
    link: '/hebergement/pin',
  },
  {
    image: Imgcard6,
    title: 'Gîte le Châtaignier + Chambre',
    description: 'Location du gîte le Châtaignier + chambre. Profitez de toutes les commodités du mas.',
    people: '1 à 4 personnes',
    Hs: 'HS : 690€ (1 à 4 personnes) - 160€/nuitée (4p)',
    Bs: 'BS : 460€ (1 à 4 personnes) - 125€/nuitée (4p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: true,
    bedrooms: '2 chambres - 2 lits et 2 lits superposés',
    link: '/hebergement/chataignier+chambre',
  },
  {
    image: Imgcard7,
    title: 'La Pinède',
    description: "Location de la chambre d'hôte la Pinède, située dans la partie basse du mas, vous profiterez de la vue sur la vallée traversée par une rivière.",
    people: '2 personnes',
    Hs: 'HS : 420€ (1 à 2 personnes) - 80€/nuitée (2p)',
    Bs: 'BS : 350€ (1 à 2 personnes) - 70€/nuitée (2p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: false,
    bedrooms: '1 chambre - 1 lit',
    link: '/hebergement/pinede',
  },
  {
    image: Imgcard8,
    title: 'Camélia',
    description: "Location de la chambre d'hôte Camélia, située à l'entrée du mas, vue sur la vallée, rivière en bas du mas.",
    people: '2 personnes',
    Hs: 'HS : 420€ (1 à 2 personnes) - 90€/nuitée (2p)',
    Bs: 'BS : 420€ (1 à 2 personnes) - 80€/nuitée (2p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: false,
    bedrooms: '1 chambre - 1 lit',
    link: '/hebergement/camelia',
  },
];

const HebergementCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCardHovered(false);
  };

  const handleCardMouseEnter = () => setIsCardHovered(true);
  const handleCardMouseLeave = () => setIsCardHovered(false);

  const { image, title, description, people, Hs, Bs, wifi, bedrooms, link } = data;

  return (
    <Link
      to={link}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 overflow-hidden rounded-lg shadow-md mb-12 ml-4 mr-4 relative flex flex-col items-stretch sm:mr-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isCardHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      >
        <img src={image} alt={title} className="w-full object-cover" />
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 text-center">
          <h2 className="text-xl font-bold text-orange-500">{title}</h2>
          <p className="text-gray-700 mb-3">{description}</p>
          <ul className="flex flex-col items-center space-y-2 pb-4">
            <li className="flex items-center font-bold">
              <FaUsers size={22} />
              <span className="ml-2">{people}</span>
            </li>
            <li className="flex items-center font-bold">
              <BsGraphUpArrow size={32} color="green" />
              <span className="ml-2">{Hs}</span>
            </li>
            <li className="flex items-center font-bold">
              <BsGraphDownArrow size={32} color="red" />
              <span className="ml-2">{Bs}</span>
            </li>
            <li className="flex items-center font-bold">
              <FaKitchenSet size={22} />
              <span className="ml-2">{wifi ? 'Oui' : 'Non'}</span>
            </li>
            <li className="flex items-center font-bold">
              <FaBed size={22} />
              <span className="ml-2">{bedrooms}</span>
            </li>
            <li className="flex items-center space-x-4 font-bold">
              <PiTelevisionFill size={32} />
              <FaWifi size={32} />
              <MdBathroom size={32} />
            </li>
          </ul>
        </div>
        <div
  className={`hover:bg-orange-500 hover:bg-opacity-70 transition-all duration-300 ${isCardHovered?'scale-105' : ''}`}
  style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
>
<hr className="w-full border border-gray-800 mb-2 hidden sm:block" />
  <div className="flex flex-col justify-end items-center p-4">
    <span className="text-black font-medium">Voir + d'infos</span>
  </div>
</div>
      </div>
    </Link>
  );
};

export default function HebergementCards() {
  return (
    <div className="flex flex-wrap justify-center">
      {hebergementData.map((data) => (
        <HebergementCard key={data.title} data={data} />
      ))}
    </div>
  );
}