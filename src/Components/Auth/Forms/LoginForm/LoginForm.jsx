import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { auth, signInWithEmailAndPassword } from '../../../../includes/firebase';

import { toast } from 'react-toastify';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FieldInput from '../../../UI/IconInput/IconInput';

import { successInputClass, errorInputClass } from '../../../../utils/inputStyle';

import ButtonAuth from '../../../UI/Buttons/ButtonAuth/ButtonAuth';
import ButtonGoogle from '../../../UI/Buttons/ButtonGoogle/ButtonGoogle';

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const requierdMsg = 'This is a required field';

  const schema = Yup.object({
    email: Yup.string().required(requierdMsg).email(),
    password: Yup.string().required(requierdMsg).min(6).max(32)
  });

  const getError = (inputName) => {
    return <ErrorMessage name={inputName} />;
  };

  return (
    <div className="mt-12">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);

          await signInWithEmailAndPassword(auth, values.email, values.password)
            .then(() => {
              // Signed in
              toast.success('Welcome!!');
              router.push('/');
              // ...
            })
            .catch((error) => {
              const errorMessage = error.message;
              toast.error(errorMessage);
            });

          setIsLoading(false);
        }}>
        {({ errors }) => (
          <Form>
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

            <div className="my-6">
              <ButtonAuth type="submit" isLoading={isLoading}>
                Sign In
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

export default LoginForm;
