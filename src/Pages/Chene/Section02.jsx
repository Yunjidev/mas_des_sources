/* eslint-disable react/no-unescaped-entities */
// Section 2 : Commodités et Extérieurs
import IMG from '../../assets/Chene/4.jpg';

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
            Parking privé, terrain arboré entourant plusieurs hectares, vue sur la vallée, et une rivière en bas de la maison s'étendant sur plusieurs kilomètres.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            En hiver, la location est chauffée avant votre arrivée avec un chauffage central. Les fenêtres et portes en châtaignier sont en double vitrage. Nous n'acceptons plus les animaux et ne sommes pas habilités à accepter les chèques vacances.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Toutes les commodités se trouvent au village de Chamborigaud, à 5 minutes en voiture. Vous y trouverez des restaurants, une boulangerie, une pâtisserie, un bar-tabac, une station essence, un fleuriste, une supérette, et un médecin.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Nous vous proposons également, en supplément de 7 € par personne, des petits déjeuners avec confiture faite maison, ainsi que des paniers gourmands à 23 € par personne comprenant entrée, plat, et dessert faits maison sur commande.
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
