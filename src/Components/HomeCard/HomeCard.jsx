/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Imgcard1 from '../../assets/card.jpg'; // Remplacez par les chemins de vos images de carte
import Imgcard2 from '../../assets/loisirs.jpg';
import Imgcard3 from '../../assets/Gallery/gallery4.jpg';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        image={Imgcard1} 
        title="Nos hébergements" 
        text="Découvrez nos différents hébergements" 
        link="/hebergement" 
      />
      <Card 
        image={Imgcard2} 
        title="Les Loisirs" 
        text="Explorez notre région et découvrez les loisirs." 
        link="/randonnée" 
      />
      <Card 
        image={Imgcard3} 
        title="Réservations et Annulations" 
        text="Conditions Générales et Informations" 
        link="/réservation-coffret-cadeaux-conditions-annulations" 
      />
    </div>
  );
};

const Card = ({ image, title, text, link }) => {
  return (
    <Link 
      to={link} 
      className="group hover:shadow-lg rounded-lg overflow-hidden relative w-full sm:w-80 md:w-96 mx-auto" 
      style={{ height: '700px' }}
    >
      <div className="w-full h-full relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-white text-center">{title}</h3>
          <p className="text-gray-200 text-center font-bold">{text}</p>
          <p className="text-sm text-white mt-2 text-center font-bold">+ d'infos</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
