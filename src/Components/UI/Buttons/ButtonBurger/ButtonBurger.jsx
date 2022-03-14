import React, { useContext } from 'react';

import { OpenSideBarContext } from '../../../../contexts';

const ButtonBurger = () => {
  const toogleOpen = useContext(OpenSideBarContext);

  return (
    <div className="block lg:hidden ml-6">
      <button onClick={toogleOpen} className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
        <svg
          width="20"
          height="20"
          className="text-gray-400"
          fill="currentColor"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ButtonBurger;
