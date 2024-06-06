/* eslint-disable react/no-unescaped-entities */
// Section 3 : Prix et Formules
import IMG from '../../assets/ImgCard/tilleul.jpg';

export default function Section03() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-16" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Tarifs et Formules</span>
            <br />
            Séjours et Nuités
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            HAUTE SAISON (du 1er juin au 15 septembre) - Location à la semaine du samedi au samedi:
            <br />
            - 980 € la semaine pour 6 personnes
            <br />
            - 1200 € la semaine pour 8 personnes
            <br />
            - À la nuitée pour 8 personnes: 210 €
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            BASSE SAISON (du 16 septembre au 31 mai) - Tarif à la semaine:
            <br />
            - 760 € la semaine pour 6 personnes
            <br />
            - 960 € la semaine pour 8 personnes
            <br />
            - À la nuitée pour 6 personnes: 120 €
            <br />
            - À la nuitée pour 8 personnes: 180 €
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            RÉVEILLON JOUR DE L'AN (du 30 décembre au 1er janvier): 550 € pour 3 jours 2 nuits.
            <br />
            RÉVEILLON DE NOËL (du 23 décembre au 25 décembre): 550 € pour 3 jours 2 nuits.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Taxe de séjour par jour et par personne obligatoire, sauf pour les enfants de moins de 12 ans.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Draps et serviettes de toilette compris gratuitement, les lits sont faits avant votre arrivée.
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
