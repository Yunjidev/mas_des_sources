/* eslint-disable react/no-unescaped-entities */
// Section 2 : Commodités et Extérieurs
import IMG from '../../assets/Chambre/1.jpg';

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
            Parking sur place gratuit.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Des terrasses sont à votre disposition, aménagées de chaises longues, de tables, de chaises et de parasols. Une plancha est disponible pour vos grillades.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Pour vos moments de détente, nous proposons un billard, un terrain de pétanque et une rivière à proximité pour passer de bons moments en famille ou entre amis.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            La rivière en bas de la location s'étend sur plusieurs kilomètres avec de l'eau et de la profondeur tout l'été.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Nous sommes toujours là pour vous guider sur les divers sites touristiques de notre région. Nous proposons des suggestions de visites aux environs du mas et des prospectus sont à votre disposition. Nous tenons à ce que vous passiez d'excellents séjours.
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
