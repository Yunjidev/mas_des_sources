import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "/src/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setIsDropdownOpen2(false);
    }
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    if (!isDropdownOpen2) {
      setIsDropdownOpen(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
        setIsDropdownOpen2(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close dropdowns and menu when navigating to a new page
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-gray-800 border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={Logo} className="w-12 h-12" alt="Arbre de vie Logo" />
          </Link>
        </div>
        <div className={`flex-grow flex justify-center ${isOpen ? "block" : "hidden"} md:block md:w-auto`} id="navbar-multi-level">
          <ul className="justify-center flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">
            <li>
              <Link to="/" className="block py-2 px-3 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Accueil</Link>
            </li>
            <li>
              <Link to="/hebergement" className="block py-2 px-3 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hébergements</Link>
            </li>
            <li className="relative dropdown-container">
              <button onClick={toggleDropdown} id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-white hover:text-orange-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-orange-500 dark:focus:text-white dark:hover:text-orange-500 md:dark:hover:bg-transparent">
                Réservations et Infos 
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div className={`${isDropdownOpen ? "block" : "hidden"} absolute z-10 font-normal bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="/réservation-coffret-cadeaux-conditions-annulations" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Infos, Réservations & Annulations</Link>
                  </li>
                  <li>
                    <Link to="/liens-utiles" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Liens utiles</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative dropdown-container">
              <button onClick={toggleDropdown2} id="dropdownNavbarLink2" className="flex items-center justify-between w-full py-2 px-3 text-white hover:text-orange-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-orange-500 dark:focus:text-white dark:hover:text-orange-500 md:dark:hover:bg-transparent">
                Loisirs
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div className={`${isDropdownOpen2 ? "block" : "hidden"} absolute z-10 font-normal bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownLoisirsButton">
                  <li>
                    <Link to="/randonnée" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Randonnées</Link>
                  </li>
                  <li>
                    <Link to="/activités-aquatique" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Activités aquatiques</Link>
                  </li>
                  <li>
                    <Link to="/chateaux-musées" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Châteaux et Musées</Link>
                  </li>
                  <li>
                    <Link to="/parc-grotte" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Parcs et Grottes</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Photos</Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
