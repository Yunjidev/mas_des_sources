/* eslint-disable react/no-unescaped-entities */
// Section00.jsx
import IMG from "/src/assets/mas.jpg";

export default function Section01() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-16" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Le Mas des Sources</span>
            <br />
            Cévenol
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            En Cévennes dans le Gard région Languedoc Roussillon, le mas des sources est une ancienne magnanerie, nous vous proposons nos locations de vacance et chambres d'hôtes entre deux petits villages Chambon et Chamborigaud , village du tourisme vert au sein du Parc National des Cévennes.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Le mas a été construit en 1880, il est en pierre de shiste et nous l'avons rénové en gardant l'authenticité, c'est un mas typiquement cévenol construit sur la roche, dans un environnement calme et reposant.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
            Nous sommes à 280 m d'altitude sur une propriété de plusieurs hectares d'arbres , arbustes et fleurs , cette végétation verdoyante et odorante qui entoure le mas vous fera découvrir les plaisirs de la nature avec ses chants d'oiseaux... Ici le silence règne c'est le lieu idéal pour se ressourcer .
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
