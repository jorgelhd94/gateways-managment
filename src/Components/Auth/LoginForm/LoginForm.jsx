import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
  return (
    <form>
      <div className='mt-12'>
        <div className='my-6'>
          <div className=''>
            <div className=''>
              <input
                type='email'
                name='email'
                className='w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400'
                placeholder='Your email address'
                value=''
              />
            </div>
          </div>
        </div>
        <div className='my-6'>
          <div className=''>
            <div className=''>
              <input
                type='password'
                name='password'
                className='w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400'
                placeholder='Your password'
                value=''
              />
            </div>
          </div>
        </div>
        <div className='my-6'>
          <button
            className='inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 w-full'
            type='submit'
          >
            Log In
          </button>
        </div>
        <div className='text-right'>
          <a href='#' className='text-blue-400'>
            Forgot your password?
          </a>
        </div>
        <div className='flex flex-col mt-4 justify-items-center'>
          <p className='text-gray-800 mb-4'>Or</p>
          <div className='flex justify-center'>
            <button className='flex items-center px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
              <FontAwesomeIcon icon={faGoogle} className='mr-4' />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
