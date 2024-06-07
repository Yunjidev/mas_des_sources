/* eslint-disable react/no-unescaped-entities */
// Section 1 : Description
import IMG from '../../assets/Chene/14.jpg';

export default function Section01() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-4" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Le Mas des Sources</span>
            <br />
            Le Chêne ( Tilleul + Châtaignier)
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Le mas comprend un coin cuisine, salle à manger avec télévision écran plat, un salon avec un canapé clic-clac et une télévision écran plat, deux salles d'eau, deux WC, et deux chambres avec au total deux grands lits et deux lits superposés. Il est possible de louer une chambre indépendante supplémentaire, voir location le pin.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Équipement : deux réfrigérateurs, deux gazinières avec four, deux fours micro-ondes, deux télévisions écran plat, vaisselles, plats et ustensiles de cuisine, plancha pour les grillades, cafetières, couettes, oreillers, traversins, fer à repasser, ustensiles et produits ménagers.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Accès internet par wifi. Des jeux de société sont à votre disposition dans la location ainsi que des prospectus pour les activités touristiques de la région.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Une grande terrasse avec vue sur la vallée dans une cour intérieure a été aménagée pour vos moments de détente et de plaisir. Vous y trouverez une table, des chaises, des chaises longues, un parasol, une plancha pour les grillades et une pièce véranda avec un billard. Sur la propriété, un terrain de pétanque est à votre disposition gratuitement.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <img
          src={IMG}
          alt="Description"
          className="max-w-[1000px] w-full"
        />
      </div>
    </section>
  );
}
