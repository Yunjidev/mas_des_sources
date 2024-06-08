/* eslint-disable react/no-unescaped-entities */
import { FaLink } from 'react-icons/fa';

const UsefulLinks = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-20">
      <div className="max-w-7xl mx-auto mt-22 mb-12">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-6">LIENS UTILES</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-orange-500 mb-4">Maisons d'hôtes</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="https://www.maison-hote.fr/" className="text-blue-500 hover:underline">Maison Hôte</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.chambres-hotes.org/" className="text-blue-500 hover:underline">Chambres Hôtes</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.chambres-hotes-vacances.com" className="text-blue-500 hover:underline">Chambres Hôtes Vacances</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-500 mb-4">Locations Saisonnières</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.louer-gite.com/" className="text-blue-500 hover:underline">Louer Gite</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.location-saisonniere.info" className="text-blue-500 hover:underline">Location Saisonnière</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.reservation-location-vacances.com" className="text-blue-500 hover:underline">Reservation Location Vacances</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.promo-location.com" className="text-blue-500 hover:underline">Promo Location</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-500 mb-4">Tourisme</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.tourisme-vacances.com/f" className="text-blue-500 hover:underline">Tourisme Vacances</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.guide-tourisme.org" className="text-blue-500 hover:underline">Guide Tourisme</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.charme-traditions.com/fr" className="text-blue-500 hover:underline">Charme & Traditions</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.annuaire-du-tourisme.net" className="text-blue-500 hover:underline">Annuaire du Tourisme</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-500 mb-4">Divers</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.libparade.com/" className="text-blue-500 hover:underline">Lib Parade</a>
              </li>
              <li>
                <FaLink className="inline mr-2"/> 
                <a href="http://www.logilib.fr" className="text-blue-500 hover:underline">Logilib</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
