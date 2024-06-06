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
            Nous vous proposons une pièce commune équipée de billard, de livres et d'un terrain de pétanque gratuit sur place, ainsi que d'accès wifi gratuit. La rivière 'Le Luech', située en bas de la location, offre plusieurs kilomètres de baignade avec de l'eau claire et suffisamment profonde tout au long de l'été. Nos locations sont chauffées avant votre arrivée, même en hiver.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            À votre disposition, un matériel pour bébé, comprenant un lit pliant, vous suffira de fournir le matelas et la couverture. Toutes les commodités nécessaires, telles qu'épicerie, boulangerie, pâtisserie, boucher, restaurant, bar-tabac, fleuriste et médecin, se trouvent à Chamborigaud, accessible en seulement 5 minutes en voiture.
          </p>
          <p className="tracking-wide text-sm md:text-base lg:text-lg pb-4">
            Nous sommes impatients de vous guider à travers les multiples sites touristiques de notre région et de vous proposer des suggestions de visites autour du mas. Des prospectus sont à votre disposition pour faciliter vos découvertes. Notre objectif est de vous assurer un séjour exceptionnel, et nous sommes toujours disponibles pour répondre à vos questions et vous écouter.
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
