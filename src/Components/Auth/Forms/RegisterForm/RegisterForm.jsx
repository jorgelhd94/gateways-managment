import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { functions, httpsCallable } from '../../../../includes/firebase';

import { toast } from 'react-toastify';

import {
  faUser,
  faEnvelope,
  faLock,
  faCheckDouble,
} from '@fortawesome/free-solid-svg-icons';

import ButtonAuth from '../../../UI/Buttons/ButtonAuth/ButtonAuth';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FieldInput from '../../../UI/IconInput/IconInput';

import { successInputClass, errorInputClass } from '../../../../utils/inputStyle';
import ButtonGoogle from '../../../UI/Buttons/ButtonGoogle/ButtonGoogle';

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

          const createUser = httpsCallable(functions, 'users-register');
          await createUser({ ...values })
            .then(() => {
              toast.success('User was register succesfully!');
              router.push('/login');
            })
            .catch((error) => {
              const message = error.message;
              toast.error(message);
            });

          setIsLoading(false);
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
              <ButtonAuth
                type="submit"
                isLoading={isLoading}>
                Register
              </ButtonAuth>
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex flex-col mt-4 justify-items-center">
        <p className="text-gray-800 mb-4">Or</p>
        <div className="flex justify-center">
          <ButtonGoogle />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
