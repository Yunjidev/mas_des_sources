/* eslint-disable react/no-unescaped-entities */
// Section 2 : Commodités et Extérieurs
import IMG from '../../assets/Chataignier/5.jpg';

export default function Section02() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-16" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:order-2">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Commodités et Infrastructure</span>
            <br />
            Localisation
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Pour vos moments de détente, chaises longues, table et fauteuil, billard, terrain de pétanque gratuitement.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Vous avez un accès par escalier qui vous mène à une terrasse dans une cour intérieure avec une vue imprenable sur la vallée afin que vous passiez de bons moments en famille ou amis.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Un coin aménagé en plein air sera à votre disposition, chaises longues, table, chaises, parasol. Nous mettons à votre disposition une plancha pour les grillades, afin de partager vos repas dans la nature.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Pièce commune avec billard, livres et terrain de pétanque gratuit sur place. Wifi gratuite.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Rivière en bas de la location et cela sur plusieurs kilomètres avec de l'eau et de la profondeur tout l'été.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Toutes les commodités sont au village de Chamborigaud, à 5 minutes en voiture. Vous y trouverez épicerie, boulangerie, pâtisserie, boucher, restaurant, bar tabac, fleuriste, médecin.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
            Nous vous informons que, suite à de nombreux soucis, nous n'acceptons plus les animaux. Merci de votre compréhension. 
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4 md:flex-col md:items-center md:order-1">
        <img
          src={IMG}
          alt="Description"
          className="max-w-[1000px] w-full"
        />
      </div>
    </section>
  );
}
