/* eslint-disable react/no-unescaped-entities */
// Section 3 : Prix et Formules
import IMG from '../../assets/ImgCard/tilleul.jpg';

export default function Section03() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-16" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Le Mas des Sources</span>
            <br />
            Location le Châtaignier + Chambre
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Cette location a été restaurée et aménagée dans notre mas. De la chambre, vous profiterez d'une vue imprenable sur la vallée traversée par la rivière le Luech. Elle se compose d'un coin cuisine, d'une salle à manger, d'une grande chambre avec un grand lit 160 x 200 et 2 lits superposés en 90 cm, une salle de douche, lavabo et WC, d'une superficie de 39 m2. 
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
            Dans le gîte :
            <br />
            Cuisine équipée de gazinière avec four, four micro-ondes, vaisselle et plats, réfrigérateur, cafetière, télévision écran plat par câble, accès internet par wifi gratuit, couettes, oreillers, traversins, chauffage central.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
          L'autre chambre se situe à l'extérieur de cette location à 5 mètres. Elle se compose d'un grand lit en 140, une table et 2 chaises, une armoire de rangement, un petit meuble, une douche à l'italienne et un lavabo, un WC. Télévision écran plat, Wifi gratuite.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            A disposition matériel pour bébé lit pliant, vous n'avez plus qu'à prendre son matelas et couverture.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
              L'hiver nos locations sont chauffées avant votre arrivée.          </p>
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
