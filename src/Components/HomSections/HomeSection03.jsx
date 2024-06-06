/* eslint-disable react/no-unescaped-entities */
// Section00.jsx
import IMG from "/src/assets/mas4.jpg";

export default function Section01() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-16" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Villages et Patrimoine</span>
            <br />
            Cévennes
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
          Au gré de vos balades vous visiterez nos villages dont le patrimoine est à la fois riche et varié églises, temples châteaux, grottes, musées, mines, bambouseraie,le Mont Lozère, les bois de Paolive, le petit train à vapeur, Pont du Gard, cascade du sautadet, lac de Villefort,Casino les Fumades,  sites préhistoriques, quartiers médiévaux, limitrophe avec L'Ardèche et la Lozère, si vous préférez  découvrir les villes Alès, Nîmes, Montpellier, Avignon, Orange qui se situent entre une demi heure et 1 h 30 environs, puis la mer qui se trouve à 1h 30, Camargue Sainte Marie de la Mer, Grau du Roi, la Grande motte et bien d'autres endroits . Visitez notre page loisir de notre région.          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
          Nous faisons tout notre possible afin que vous passiez un excellent séjour , notre accueil est souriant, chaleureux , familial nous sommes simple et discret afin de passer un moment paisible à votre convenance.          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
          A bientôt pour un séjour de détente dans les Cévennes.
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
