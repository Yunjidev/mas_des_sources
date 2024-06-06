/* eslint-disable react/no-unescaped-entities */
// Section 2 : Commodités et Extérieurs
import IMG from '../../assets/ImgCard/tilleul.jpg';

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
            Parking privé, salon de jardin, plancha, billard et jeux, terrain de pétanque, wifi gratuite, télévision dans chaque location privé. Plancha mise à disposition pour les grillades. Le mas des sources vous fera découvrir une vue exceptionnelle de sa terrasse dominant la vallée traversé par une rivière ' Le Luech ' pour vos baignades ou pêche à la truite qui se situe à quelques minutes à pied ou en voiture,  nombreux coins de baignade sur plusieurs kilomètres au alentours.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Pour les commodités, vous trouverez à Chamborigaud 2 km, boulangerie pâtisserie, boucherie, cave à vin, tabac, bar restaurant, pizzéria, médecin, mairie, poste.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Pour information le mas des sources cévenol est situé à Chambon à 2 km de Chamborigaud entre les deux villages au lieu dit le thau, dans le Gard 30450 dans les Cévennes attention chers hôtes de ne pas confondre avec le mas des sources à Saint Sébastien d'Aigrefeuille.
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
