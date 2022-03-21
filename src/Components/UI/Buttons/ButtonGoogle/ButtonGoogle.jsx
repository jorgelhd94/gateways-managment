import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';

import { auth, signInWithPopup, provider } from '../../../../includes/firebase';

const ButtonGoogle = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);

    await signInWithPopup(auth, provider)
      .then(() => {
        toast.success('Welcome!!');
        router.push('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    setIsLoading(false);
  };
  return (
    <button
      className="disabled:cursor-not-allowed flex items-center px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
      onClick={login}
      // eslint-disable-next-line prettier/prettier
      disabled={isLoading}
    >
      <FontAwesomeIcon icon={faGoogle} className="mr-4" />
      Access with Google
    </button>
  );
};

export default ButtonGoogle;
