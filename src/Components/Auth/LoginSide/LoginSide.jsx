import React from 'react';

const LoginSide = () => {
  return (
    <div className='absolute w-screen h-screen flex'>
      <div className='hidden lg:block w-5/12 h-full'>
        <img
          src='https://images.unsplash.com/photo-1500672860114-9e913f298978?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1049&amp;q=80'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full lg:w-7/12 overflow-scroll py-24 relative'>

      <form className="w-5/6 sm:w-1/2 mx-auto text-center">
        <img
          src="https://gustui.s3.amazonaws.com/gustlogo.png"
          className="h-8 block mx-auto"
        />
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
          <p className="mt-3 text-gray-800">
            New to Gust? <a href="#" className="text-blue-400">Sign up</a>
          </p>
        </div>
        <div className="mt-12">
          <div className="my-6">
            <div className="">
              <div className="">
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Your email address"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="my-6">
            <div className="">
              <div className="">
                <input
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Your password"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="my-6">
            <button
              className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 w-full"
              type="submit"
            >
              Log In
            </button>
          </div>
          <div className="text-right">
            <a href="#" className="text-blue-400">Forgot your password?</a>
          </div>
          <div className="mt-4">
            <p className="text-left text-gray-800">Or login with</p>
            <div className="mt-2 grid grid-cols-3 gap-6 text-black text-2xl">
              Icons
            </div>
          </div>
          <div className="mt-6 border-t border-b border-gray-300">
            <div className="my-6">
              <div className="w-full flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-blue-400"
                  checked=""
                /><label className="ml-2 text-sm" for="rememberMe"
                  >Remember this device</label
                >
              </div>
            </div>
          </div>
          <p className="text-sm mt-6 text-center">
            Created by <a href="">JCode Studio</a>
          </p>
        </div>
      </form>

      </div>
    </div>
  );
};

export default LoginSide;
