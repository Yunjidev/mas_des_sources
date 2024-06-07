/* eslint-disable react/no-unescaped-entities */
// Section 3 : Prix et Formules
import IMG from '../../assets/Chambre/2.jpg';

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
            Haute saison location du samedi au samedi à partir du 1er juin au 15 septembre:
            <br />
            - De 1 à 6 personnes: 1200 € la semaine
            <br />
            - De 1 à 8 personnes: 1700 € la semaine
            <br />
            - À la nuitée: 250 € pour 8 personnes
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Basse saison du 16 septembre au 31 mai:
            <br />
            - De 1 à 6 personnes: 180 € la nuitée
            <br />
            - De 7 à 8 personnes: 230 € la nuitée
            <br />
            - Location à la semaine: 1200 € pour 8 personnes max.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Réveillon jour de l'an (3 jours, 2 nuits): 700 € pour 8 personnes max.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Draps et serviettes de toilette inclus gratuitement, les lits sont faits avant votre arrivée.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Par rapport au Covid-19, un forfait ménage obligatoire de 50 € est requis pour les locations à la semaine.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
            Taxe de séjour par jour et par personne, reversée à l'agglomération d'Alès, obligatoire. Les enfants de moins de 12 ans ne la paient pas.
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
