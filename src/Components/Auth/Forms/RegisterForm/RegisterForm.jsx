import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faEnvelope, faLock, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import * as yup from 'yup';

const RegisterForm = () => {
  const schema = yup.object({
    name: yup.string().required().min(3).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(32),
    repeat: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mt-12">
        
        <div className="my-6">
          <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <FontAwesomeIcon icon={faPerson} />
            </span>
            <input
              type="text"
              id="name-with-icon"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              name="name"
              placeholder="Your name"
            />
          </div>
        </div>
        
        <div className="my-6">
          <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="text"
              id="email-with-icon"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
        </div>

        <div className="my-6">
          <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="text"
              id="password-with-icon"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              name="password"
              placeholder="Your password"
            />
          </div>
        </div>

        <div className="my-6">
          <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <FontAwesomeIcon icon={faCheckDouble} />
            </span>
            <input
              type="text"
              id="confirm-with-icon"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              name="confirm"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <div className="my-6">
          <button
            className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 w-full"
            type="submit">
            Register
          </button>
        </div>

        <div className="flex flex-col mt-4 justify-items-center">
          <p className="text-gray-800 mb-4">Or</p>
          <div className="flex justify-center">
            <button className="flex items-center px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
              <FontAwesomeIcon icon={faGoogle} className="mr-4" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
