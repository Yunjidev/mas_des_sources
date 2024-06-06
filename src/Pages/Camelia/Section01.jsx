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
            La Chambre d'hôte Camélia
            <span className="block h-1 bg-orange-500 transform scale-x-0 origin-bottom-right transition-transform duration-150 ease-out hover:scale-x-100 origin-bottom-left absolute bottom-0 left-0"></span>
          </h3>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            La chambre d'hôte Camélia se situe à l'entrée du mas.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
          Elle est accessible par une montée d'escalier avec sa terrasse ombragée et aménagée de chaises longues, table et chaises de jardin. 
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
          La chambre mesure 25 m2, elle se compose d'un grand lit 160 X 200, une table et 2 chaises, une console, une penderie, une cabine de douche avec jets massants, un lavabo, et un WC. Télévision écran plat.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
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
