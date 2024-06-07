import Carrousel from './Carrousel'; // Importer le composant de carrousel que vous avez créé
import TilleulDetails from './TilleulDetails'; // Importer les détails spécifiques à l'hébergement "Le Tilleul"
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';

const TilleulPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8 text-center text-orange-500 ">Le Tilleul</h1>
      <Carrousel /> 
      <TilleulDetails />
      <Section01 />
      <Section02 />
      <Section03 />
    </div>
  );
};

export default TilleulPage;
