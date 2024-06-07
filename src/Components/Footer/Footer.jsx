import { Link } from 'react-router-dom';
import { IoLogoFacebook } from 'react-icons/io5';
import { FaTripadvisor } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { IoIosGift } from "react-icons/io";
import Logo from '/src/assets/logo.png';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 bottom-0 left-0 w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-12 me-3" alt="Mas arbre de vie Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                <span className="text-white">Mas des Sources</span> - <span className="text-orange-500">Cévénol</span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-500 uppercase dark:text-white">Réservations</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/liens-utiles" className="hover:underline">Liens</Link>
                </li>
                <li>
                  <a href="https://www.booking.com/hotel/fr/au-mas-cevenol.fr.html" className="hover:underline">Booking</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-500 uppercase dark:text-white">Suivez-nous</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com/p/Le-Mas-des-sources-c%C3%A9venol-100054241491909/?_rdr" className="hover:underline">Facebook</a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.fr/Hotel_Review-g13287885-d11871181-Reviews-Mas_Des_Sources_Cevenol-Chambon_Gard_Occitanie.html" className="hover:underline">Tripadvisor</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-500 uppercase dark:text-white">Légal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/legal" className="hover:underline">Mentions Légales</Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:underline">Politique de confidentialité</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {getCurrentYear()} <a href="https://portfolio-v1-nu-nine.vercel.app/" className="hover:underline">BLF Developpement™</a>. Tous droits réservés.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/p/Le-Mas-des-sources-c%C3%A9venol-100054241491909/?_rdr" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <IoLogoFacebook className="w-4 h-4" />
              <span className="sr-only">Page Facebook</span>
            </a>
            <a href="https://www.wonderbox.fr/au-mas-cevenol-chambon/l/LL1701" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <IoIosGift className="w-4 h-4" />
              <span className="sr-only">Wonderbox</span>
            </a>
            <a href="https://www.booking.com/hotel/fr/au-mas-cevenol.fr.html" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <TbBrandBooking className="w-4 h-4" />
              <span className="sr-only">Booking</span>
            </a>
            <a href="https://www.tripadvisor.fr/Hotel_Review-g13287885-d11871181-Reviews-Mas_Des_Sources_Cevenol-Chambon_Gard_Occitanie.html" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaTripadvisor className="w-4 h-4" />
              <span className="sr-only">Tripadvisor</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
