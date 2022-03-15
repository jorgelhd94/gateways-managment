import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { successInputClass, errorInputClass } from '../../../utils/inputStyle';

import ButtonAuth from '../../UI/Buttons/ButtonAuth/ButtonAuth';


const CreateForm = () => {
  const requierdMsg = 'This is a required field';

  const schema = Yup.object({
    serial: Yup.string().required(requierdMsg),
    name: Yup.string().required(requierdMsg).min(6).max(32),
    ipv4: Yup.string().required(requierdMsg)
  });

  const getError = (inputName) => {
    return <ErrorMessage name={inputName} />;
  };

  return (
    <div>
      <div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Create a new Gateway
      </div>

      <Formik
        initialValues={{ serial: '', name: '', ipv4: '' }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);
          setIsLoading(false);
        }}>
        {({ errors }) => (
          <Form>
              <Field
                name="serial"
                type="text"
                className={errors.serial ? errorInputClass : successInputClass}
                placeholder="Serial number"
              />

              <Field
                name="name"
                type="text"
                className={errors.name ? errorInputClass : successInputClass}
                placeholder="Name"
              />

              <Field
                name="ipv4"
                type="text"
                className={errors.ipv4 ? errorInputClass : successInputClass}
                placeholder="IP v4"
              />

            <div className="my-6">
              <ButtonAuth type="submit" isLoading={true}>
                Sign In
              </ButtonAuth>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateForm;
