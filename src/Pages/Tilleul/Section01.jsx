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
            Location Le Tilleul
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Notre gîte "Le Tilleul" propose une cuisine-salle à manger, une chambre avec un grand lit de 160 x 200 cm, ainsi qu'une salle d'eau équipée d'une douche à l'italienne et de toilettes. L'espace total disponible s'étend sur 40 m2.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            La cuisine est entièrement équipée avec une gazinière, un four, un four micro-ondes, de la vaisselle, des plats, un réfrigérateur et une cafetière. Nous disposons également d'une télévision à écran plat avec câble et d'un accès internet gratuit via wifi. Les lits sont dotés de couettes, oreillers et traversins, et le gîte est équipé de chauffage central.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Si vous le souhaitez, vous avez la possibilité de louer une chambre indépendante en supplément, située à proximité du gîte. Cette chambre dispose d'un grand lit de 160 x 200 cm, d'une armoire de rangement, d'une douche à l'italienne, d'un lavabo et de toilettes.
          </p>
          {/* Ajout d'un troisième paragraphe pour la terrasse */}
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Pour vos séjours, nous vous proposons une terrasse privée offrant une vue exceptionnelle sur la vallée cévenole. Equipée de chaises longues, de tables, de chaises et d'un parasol, cette espace conviviale inclut également une plancha pour les grillades, permettant ainsi de passer de joyeuses moments en famille ou entre amis.
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
