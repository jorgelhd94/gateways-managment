import React from 'react';

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
          <div className='mt-4 text-center'>
            <p className='text-gray-800'>Or login with</p>
            <p className='mt-2 text-black text-2xl'>
              Google
            </p>
          </div>

        </div>
      </form>
  );
};

export default LoginForm;
