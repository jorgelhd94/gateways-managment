import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { functions, httpsCallable } from '../../../../includes/firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faLock,
  faCheckDouble,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FieldInput from '../../../UI/IconInput/IconInput';

import { successInputClass, errorInputClass } from '../../../../utils/inputStyle';

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const requierdMsg = 'This is a required field';

  const schema = Yup.object({
    name: Yup.string().required(requierdMsg).min(3).max(50),
    email: Yup.string().required(requierdMsg).email(),
    password: Yup.string().required(requierdMsg).min(6).max(32),
    confirmPassword: Yup.string()
      .required(requierdMsg)
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const getError = (inputName) => {
    return <ErrorMessage name={inputName} />;
  };

  return (
    <div className="mt-12">
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          setSubmitting(false);

          const createUser = httpsCallable(functions, 'users-create');
          await createUser({ text: 'Hello' })
            .then((result) => {
              console.log(result);
            })
            .catch((e) => console.log(e));

          setIsLoading(false);
          // router.push('/');
        }}>
        {({ errors }) => (
          <Form>
            <FieldInput icon={faUser} error={getError('name')}>
              <Field
                name="name"
                type="text"
                className={errors.name ? errorInputClass : successInputClass}
                placeholder="Your name"
              />
            </FieldInput>

            <FieldInput icon={faEnvelope} error={getError('email')}>
              <Field
                name="email"
                type="email"
                className={errors.email ? errorInputClass : successInputClass}
                placeholder="Your email"
              />
            </FieldInput>

            <FieldInput icon={faLock} error={getError('password')}>
              <Field
                name="password"
                type="password"
                className={errors.password ? errorInputClass : successInputClass}
                placeholder="Your password"
              />
            </FieldInput>

            <FieldInput icon={faCheckDouble} error={getError('confirmPassword')}>
              <Field
                name="confirmPassword"
                type="password"
                className={errors.confirmPassword ? errorInputClass : successInputClass}
                placeholder="Confirm password"
              />
            </FieldInput>

            <div className="my-6">
              <button
                className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 w-full"
                type="submit"
                disabled={isLoading}>
                {isLoading && <FontAwesomeIcon icon={faCircleNotch} className="mr-2 fa-spin" />}
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>

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
  );
};

export default RegisterForm;
