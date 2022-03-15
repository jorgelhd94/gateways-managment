import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ipv4 } from '../../../utils/customValidators';

import { successInputClass, errorInputClass } from '../../../utils/inputStyle';
import ErrorStyle from '../../UI/ErrorMessage/ErrorMessage';
import FieldInput from '../../UI/InputForm/InputForm';
import ButtonSubmit from '../../UI/Buttons/ButtonSubmit/ButtonSubmit';

const CreateForm = () => {
  const requierdMsg = 'This is a required field';

  Yup.addMethod(Yup.string, 'ipv4', ipv4);

  const schema = Yup.object({
    serial: Yup.string().required(requierdMsg),
    name: Yup.string().required(requierdMsg),
    ipv4: Yup.string().ipv4().required(requierdMsg)
  });

  const getError = (inputName) => {
    return <ErrorMessage name={inputName} />;
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  async function validateSerial(value) {
    let error;

    await sleep(1000).then(() => {
      if (value.length > 3) {
        error = 'This Serial already exists';
      }
    });
    return error;
  }

  return (
    <div>
      <div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Create a new Gateway
      </div>

      <Formik
        initialValues={{ serial: '', name: '', ipv4: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}>
        {({ errors }) => (
          <Form>
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div className="mr-4">
                <label htmlFor="serial" className="font-normal text-gray-600 dark:text-white">
                  Serial
                </label>
                <FieldInput error={getError('serial')}>
                  <Field
                    name="serial"
                    type="text"
                    placeholder="Serial number"
                    className={errors.serial ? errorInputClass : successInputClass}
                    validate={validateSerial}
                  />
                </FieldInput>
              </div>

              <div className="mr-4">
                <label htmlFor="name" className="font-normal text-gray-600 dark:text-white">
                  Name
                </label>
                <FieldInput error={getError('name')}>
                  <Field
                    name="name"
                    type="text"
                    className={errors.name ? errorInputClass : successInputClass}
                    placeholder="Name"
                  />
                </FieldInput>
              </div>

              <div className="mr-4">
                <label htmlFor="ipv4" className="font-normal text-gray-600 dark:text-white">
                  IP v4
                </label>
                <FieldInput error={getError('ipv4')}>
                  <Field
                    name="ipv4"
                    type="text"
                    className={errors.ipv4 ? errorInputClass : successInputClass}
                    placeholder="__.__.__.__"
                  />
                </FieldInput>
              </div>
            </div>

            <div className="my-6 flex justify-end w-full">
              <ButtonSubmit isLoading={false}>Submit</ButtonSubmit>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateForm;
