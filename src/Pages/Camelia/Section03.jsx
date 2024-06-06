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
            TARIF DE LA NUIT POUR 2 PERSONNES HAUTE SAISON
            <br />
            du 16 juin au 14 septembre et du 23 décembre au 1er janvier
            <br />
            - 90 € La nuitée
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            TARIF DE LA NUIT POUR 2 PERSONNES HORS SAISON
            <br />
            - 80€ La nuitée
            <br />
            - 420 € La semaine toute l'année
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
            Les petits déjeuners sont sur commande 8 € par personne.
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
