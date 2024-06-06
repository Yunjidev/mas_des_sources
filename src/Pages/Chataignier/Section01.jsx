/* eslint-disable react/no-unescaped-entities */
// Section 1 : Description
import IMG from '../../assets/ImgCard/tilleul.jpg';

export default function Section01() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-4" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Le Mas des Sources</span>
            <br />
            Location Le Châtaignier
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Notre location, située au sein d'un charmant mas, a été entièrement restaurée et aménagée pour votre confort. De la chambre, vous apprécierez une vue magnifique sur la vallée, bordée par la rivière le Luech.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            L'espace comprend un coin cuisine, un salon, une chambre avec un grand lit de 160 x 200 cm et deux lits superposés, ainsi qu'une salle d'eau avec WC. La cuisine est équipée d'une gazinière, d'un four, d'un four micro-ondes, de vaisselle et de plats, d'un réfrigérateur, d'une cafetière, d'une télévision à écran plat par câble, d'accès internet par wifi gratuit, de couettes, d'oreillers, de traversins et de chauffage central.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Si vous êtes intéressé, nous proposons également la possibilité de louer une chambre indépendante en supplément, située à environ 3 mètres de la location principale. Vous trouverez les détails en cliquant sur la section "Chambre d'hôte" de notre menu.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Accédez à une terrasse située dans une cour intérieure grâce à un escalier, offrant une vue sublime sur la vallée. Cet espace extérieur est parfait pour passer de bonnes moments en famille ou entre amis, équipé de chaises longues, de tables, de chaises, d'un parasol et d'une plancha pour les grillades.
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
