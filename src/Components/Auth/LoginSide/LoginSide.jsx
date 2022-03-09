import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';

const LoginSide = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toogleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-5/12 h-full">
        <img src="src/assets/img/bg-login.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="w-5/6 sm:w-1/2 mx-auto text-center lg:px-8 xl:px-40 mt-16">
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800">
            {isLogin ? 'Welcome' : 'Sign Up'} to GMS!!
          </h2>
        </div>

        <p className="mt-3 text-gray-800">
          {isLogin ? 'Are you new? ' : 'Do you have an account? '}
          <a href="#" onClick={toogleLogin} className="text-blue-400">
            {isLogin ? 'Sign up' : 'Sign in'}
          </a>
        </p>

        <LoginForm />

        <p className="text-sm mt-12 text-center">
          Created by{' '}
          <a href="https://github.com/jorgelhd94" target="_blank">
            JCode Studio
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginSide;
