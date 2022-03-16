import React, { useState, useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ipv4 } from '../../../utils/customValidators';

import { successInputClass, errorInputClass } from '../../../utils/inputStyle';
import FieldInput from '../../UI/InputForm/InputForm';
import ButtonSubmit from '../../UI/Buttons/ButtonSubmit/ButtonSubmit';
import { toast } from 'react-toastify';

import { functions, httpsCallable } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

const CreateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setisValidating] = useState(false);
  const user = useContext(UserContext);

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

  async function validateSerial(value) {
    let error;

    setisValidating(true);

    const checkSerial = httpsCallable(functions, 'gateway-validateSerial');
    await checkSerial({ value })
      .then((result) => {
        if (result.data.exists) {
          error = 'This Serial already exists';
        }
      })
      .catch((error) => {
        error = 'The system cannot check the serial!!';
      });

    setisValidating(false);

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
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);

          const createGateway = httpsCallable(functions, 'gateway-create');
          await createGateway({ ...values, uid: user.uid })
            .then((result) => {
              toast.success('The gateway was created succesfully!!');
              // router.push('/');
            })
            .catch((error) => {
              const message = error.message;
              toast.error(message);
            });

          setIsLoading(false);
        }}>
        {({ errors }) => (
          <Form>
            <div className="flex flex-col lg:flex-row justify-start w-full">
              <div className="mr-0 lg:mr-6">
                <label htmlFor="serial" className="font-normal text-gray-600 dark:text-white">
                  Serial
                </label>
                <FieldInput error={getError('serial')} isValidating={isValidating}>
                  <Field
                    name="serial"
                    type="text"
                    placeholder="Serial number"
                    className={errors.serial ? errorInputClass : successInputClass}
                    validate={validateSerial}
                  />
                </FieldInput>
              </div>

              <div className="mr-0 lg:mr-6">
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

              <div className="mr-0 lg:mr-6">
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
              <ButtonSubmit isLoading={isLoading}>Submit</ButtonSubmit>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateForm;
