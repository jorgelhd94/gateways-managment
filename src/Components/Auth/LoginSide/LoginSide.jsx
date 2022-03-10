import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

const LoginSide = () => {
  return (
    <div className='absolute w-screen h-screen flex'>
      <div className='hidden lg:block w-5/12 h-full'>
        <img
          src='src/assets/img/bg-login.jpg'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-5/6 sm:w-1/2 mx-auto text-center lg:px-8 xl:px-40 mt-16'>
        <div className='mt-10'>
          <h2 className='text-3xl font-bold text-gray-800'>Welcome to GMS!!</h2>
          <p className='mt-3 text-gray-800'>
            Are you new?{' '}
            <a href='#' className='text-blue-400'>
              Sign up
            </a>
          </p>
        </div>
        <LoginForm />

        <p className='text-sm mt-12 text-center'>
          Created by{' '}
          <a href='https://github.com/jorgelhd94' target='_blank'>
            JCode Studio
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginSide;
