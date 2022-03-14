import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { signOut, auth } from '../../../includes/firebase';
import ButtonBurger from '../../UI/Buttons/ButtonBurger/ButtonBurger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function useOutsideClick(ref) {
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return [openDropdown, setOpenDropdown];
}

const Header = () => {
  const router = useRouter();
  const logout = async () => {
    await signOut(auth);
    router.push('/login');
  };


  const dropDownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useOutsideClick(dropDownRef);

  const toogleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <header className="w-full h-16 z-40 flex items-center justify-between">
      <ButtonBurger />

      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
          {/* Github */}
          <Link href="https://github.com/jorgelhd94/gateways-managment">
            <a
              target="_blank"
              className='flex px-2 py-1 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md'>
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6"></FontAwesomeIcon>
            </a>
          </Link>

          <span className="w-1 h-8 rounded-lg bg-gray-200"></span>

          {/* Profile */}
          <button
            className="flex items-center text-gray-500 dark:text-white text-md"
            ref={dropDownRef}
            onClick={toogleDropdown}>
            <Image
              alt="profil"
              src="/assets/img/user.svg"
              width={30}
              height={30}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
            <svg
              width="20"
              height="20"
              className="ml-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>

          <div id="options-menu" className="absolute">
            {openDropdown && (
              <div className="origin-top-right absolute top-4 right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  <a
                    href="#"
                    onClick={logout}
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                    role="menuitem">
                    <span className="flex flex-col">
                      <span>Logout</span>
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
