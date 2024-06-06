import { FaUsers, FaWifi, FaBed } from 'react-icons/fa';
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { PiTelevisionFill } from "react-icons/pi";
import { MdBathroom } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";

const ChataignierRoomDetails = () => {
  const hebergement = {
    title: 'Gîte le Châtaignier + Chambre',
    people: '1 à 4 personnes',
    Hs: 'HS : 690€ (1 à 4 personnes) - 160€/nuitée (4p)',
    Bs: 'BS : 460€ (1 à 4 personnes) - 125€/nuitée (4p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: true,
    bedrooms: '2 chambres - 2 lits et 2 lits superposés',
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-full">
      <div className="mt-2 flex flex-wrap justify-center space-x-4 font-bold">
        <div className="flex items-center space-x-2 my-2">
          <FaUsers size={22} />
          <span>{hebergement.people}</span>
        </div>
        <div className="border-l border-gray-300 h-5 hidden sm:block"></div>
        <div className="flex items-center space-x-2 my-2">
          <BsGraphUpArrow size={22} color='green' />
          <span>{hebergement.Hs}</span>
        </div>
        <div className="border-l border-gray-300 h-5 hidden sm:block"></div>
        <div className="flex items-center space-x-2 my-2">
          <BsGraphDownArrow size={22} color='red' />
          <span>{hebergement.Bs}</span>
        </div>
        <div className="border-l border-gray-300 h-5 hidden sm:block"></div>
        <div className="flex items-center space-x-2 my-2">
          <FaKitchenSet size={22} />
          <span>{hebergement.wifi ? 'Oui' : 'Non'}</span>
        </div>
        <div className="border-l border-gray-300 h-5 hidden sm:block"></div>
        <div className="flex items-center space-x-2 my-2">
          <FaBed size={22} />
          <span>{hebergement.bedrooms}</span>
        </div>
        <div className="border-l border-gray-300 h-5 hidden sm:block"></div>
        <div className="flex items-center space-x-2 my-2">
          <PiTelevisionFill size={22} />
          <FaWifi size={22} />
          <MdBathroom size={22} />
        </div>
      </div>
    </div>
  );
};

export default ChataignierRoomDetails;
