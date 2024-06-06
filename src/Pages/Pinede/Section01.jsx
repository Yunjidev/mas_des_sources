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
            La Pinède
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            La chambre d'hôte la pinède se situe dans la partie basse du mas, elle n'est pas très grande mais cosy, vous profiterez de la vue sur la vallée traversée par une rivière le 'Luech' pour des baignades tout l'été.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Elle se compose d'un grand lit en 140, une table et 2 chaises, une armoire de rangement, un petit meuble, une douche à l'italienne et un lavabo, un WC. Télévision écran plat.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4 mb-8">
            Les draps et le linge de toilette sont fournis.
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
