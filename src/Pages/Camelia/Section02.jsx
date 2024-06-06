/* eslint-disable react/no-unescaped-entities */
// Section 2 : Commodités et Extérieurs
import IMG from '../../assets/ImgCard/tilleul.jpg';

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
            La rivière en bas du mas vous permettra de faire de bonne baignade ou pêcher à la truite ou tout simplement vous relaxer.          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Du mas, vous pourrez partir vous promener sur une route menant à plusieurs sentiers de randonnée à Chambon. Nous sommes toujours là pour vous indiquer des visites touristiques dans notre région afin que vous passiez de bonnes vacances et découvriez les Cévennes.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Les commodités sont situées à 2 km à Chamborigaud.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Un parking gratuit est disponible sur la propriété.
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
