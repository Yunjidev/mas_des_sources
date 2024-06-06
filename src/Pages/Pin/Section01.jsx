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
            Location Le Pin
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Le Mas des Sources - Location Le Pin peut accueillir de 1 à 8 personnes et dispose de 3 chambres. La maison se compose d'une grande cuisine, d'un petit coin cuisine, d'un salon, de 2 salles d'eau avec douche à l'italienne et de 2 WC. Elle inclut également 2 chambres, plus une troisième chambre indépendante avec sa propre douche à l'italienne, lavabo et WC.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Equipements :
            <br />
            - 2 réfrigérateurs
            <br />
            - 2 gazinières avec four
            <br />
            - 2 micro-ondes
            <br />
            - 2 cafetières
            <br />
            - Bouilloire
            <br />
            - Ustensiles de cuisine et ménagers
            <br />
            - 3 télévisions à écran plat
            <br />
            - Wi-Fi gratuit
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            À disposition, du matériel pour bébé, incluant un lit pliant. Vous n'avez plus qu'à apporter son matelas et sa couverture. En hiver, nos locations sont chauffées avant votre arrivée.         </p>
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
