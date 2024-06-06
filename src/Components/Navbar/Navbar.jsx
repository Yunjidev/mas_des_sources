import Logo from "/src/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <a href="/">
            <img src={Logo} className="w-12 h-12" alt="Arbre de vie Logo" />
          </a>
        </div>
        <div className="flex-grow flex justify-center ">
          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-grey-600 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white dark:bg-grey-100 md:dark:bg-transparent" aria-current="page">Accueil</a>
            </li>
            <li>
              <a href="/hebergement" className="block py-2 px-3 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hébergements</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-white hover:text-orange-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-orange-500 dark:focus:text-white dark:hover:text-orange-500 md:dark:hover:bg-transparent">
                Réservations et Infos 
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Nos bons cadeaux</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Conditions Annulations</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Réservations et infos</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Liens utiles</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownLoisirs" className="flex items-center justify-between w-full py-2 px-3 text-white hover:text-orange-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-orange-500 dark:focus:text-white dark:hover:text-orange-500 md:dark:hover:bg-transparent">
                Loisirs
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownLoisirs" className="z-10 hidden font-normal bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownLoisirsButton">
                  <li>
                    <a href="/randonnée" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Randonnées</a>
                  </li>
                  <li>
                    <a href="/activités-aquatique" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Activités aquatiques</a>
                  </li>
                  <li>
                    <a href="/chateaux-musées" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Châteaux et Musées</a>
                  </li>
                  <li>
                    <a href="/parc-grotte" className="block px-4 py-2 hover:text-orange-500 dark:hover:text-orange-500">Parcs et Grottes</a>
                    </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Photos</a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
