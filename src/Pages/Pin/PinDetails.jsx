import { FaUsers, FaWifi, FaBed } from 'react-icons/fa';
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { PiTelevisionFill } from "react-icons/pi";
import { MdBathroom } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";

const PinDetails = () => {
  const hebergement = {
    title: 'Mas Le Pin',
    people: '1 à 8 personnes',
    Hs: 'HS : 1200€ (1700€/8 personnes) - 250€/nuitée (8p)',
    Bs: 'BS : 1200€ (8 personnes) - 180€/nuitée (230€/8p)',
    amenities: 'Wi-Fi, Pool, Air Conditioning',
    wifi: true,
    bedrooms: '3 chambres - 3 lits et 2 lits superposés',
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

export default PinDetails;
