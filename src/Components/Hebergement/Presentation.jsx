/* eslint-disable react/no-unescaped-entities */
// Section00.jsx
import IMG from "/src/assets/Gallery/gallery10.jpg";

export default function Section01() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-[85vw] mx-auto mb-[5%] mt-16" id="sectionZero">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="flex flex-col justify-center max-w-[1000px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 relative w-fit">
            <span className="text-orange-500">Nos hébergements</span>
            <br />
            MAS, Gîtes, Chambre d'hôte.
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Nous vous proposons plusieurs types d'hébergements disponibles tout au long de l'année.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Nous vous proposons aussi de profiter en supplément de 7 € par personne nos petits déjeuners avec confiture fait maison et également des paniers gourmands 23 € par personne cuisine maison entrée + plat + dessert sur commande.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
          Nous sommes toujours là pour vous guider sur les divers sites touristiques de notre région, nous proposons des suggestions de visites aux environs du mas et plus loin si vous le souhaitez et des prospectus sont à votre disposition dans notre mas . 

Nous tenons à ce que vous passiez d'excellents séjours dans notre mas donc nous sommes présent pour tous renseignements . 
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
