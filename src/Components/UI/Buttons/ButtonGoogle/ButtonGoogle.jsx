import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';

import { auth, signInWithPopup, provider } from '../../../../includes/firebase';

const ButtonGoogle = (props) => {
  const isLogin = props.method === 'login' ? true : false;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;

        toast.success('User was register succesfully!');
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
      disabled={isLoading}>
      <FontAwesomeIcon icon={faGoogle} className="mr-4" />
      {isLogin ? 'Sign in with Google' : 'Sign Up with Google'}
    </button>
  );
};

ButtonGoogle.propTypes = {
  method: PropTypes.oneOf(['login', 'register'])
};

export default ButtonGoogle;
