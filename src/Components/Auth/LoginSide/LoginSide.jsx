import React, { useState } from 'react';
import Image from 'next/image';
import loginImg from '../../../../public/assets/img/bg-login.jpg';
import LoginForm from '../Forms/LoginForm/LoginForm';
import RegisterForm from '../Forms/RegisterForm/RegisterForm';

const LoginSide = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toogleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-5/12 h-full overflow-hidden">
        <Image src={loginImg} alt="Welcome Picture" className="w-full h-full object-cover" />
      </div>

      <div className='w-full lg:w-7/12 overflow-scroll overflow-x-hidden py-12 relative'>
        <div className="w-5/6 sm:w-1/2 mx-auto text-center lg:px-2">
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {isLogin ? 'Welcome' : 'Register'} to GMS!!
            </h2>
            <p className="mt-3 text-gray-800">
              {isLogin ? 'Are you new?' : 'Do you have an account?'}{' '}
              <a href="#" className="text-blue-400" onClick={toogleLogin}>
                {isLogin ? 'Sign up' : 'Sign In'}
              </a>
            </p>
          </div>

          {isLogin ? <LoginForm /> : <RegisterForm />}

          <p className="text-sm my-12 text-center">
            Created by{' '}
            <a href="https://github.com/jorgelhd94" target="_blank" rel="noreferrer">
              JCode Studio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSide;
