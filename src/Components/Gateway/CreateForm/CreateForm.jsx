import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { successInputClass, errorInputClass } from '../../../utils/inputStyle';
import FieldInput from '../../UI/InputForm/InputForm';
import ButtonSubmit from '../../UI/Buttons/ButtonSubmit/ButtonSubmit';

const CreateForm = () => {
  const requierdMsg = 'This is a required field';

  const schema = Yup.object({
    serial: Yup.string().required(requierdMsg),
    name: Yup.string().required(requierdMsg),
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
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log('Submit');
        }}>
        {({ errors }) => (
          <Form>
            <FieldInput error={getError('serial')}>
              <Field
                name="serial"
                type="text"
                className={errors.serial ? errorInputClass : successInputClass}
                placeholder="Serial number"
              />
            </FieldInput>


            <FieldInput error={getError('name')}>
              <Field
                name="name"
                type="text"
                className={errors.name ? errorInputClass : successInputClass}
                placeholder="Name"
              />
            </FieldInput>

            <FieldInput error={getError('ipv4')}>
              <Field
                name="ipv4"
                type="text"
                className={errors.ipv4 ? errorInputClass : successInputClass}
                placeholder="IP v4"
              />
            </FieldInput>

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
