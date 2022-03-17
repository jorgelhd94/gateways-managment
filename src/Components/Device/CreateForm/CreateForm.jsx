import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const requierdMsg = 'This is a required field';

  Yup.addMethod(Yup.string, 'ipv4', ipv4);

  const schema = Yup.object({
    uid: Yup.string().required(requierdMsg),
    vendor: Yup.string().required(requierdMsg)
  });

  const getError = (inputName) => {
    return <ErrorMessage name={inputName} />;
  };

  async function validateUID(value) {
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
        Create a new Device
      </div>

      <Formik
        initialValues={{ uid: '', vendor: '', gateway: 'red', online: false }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);

          const createGateway = httpsCallable(functions, 'gateway-create');
          await createGateway({ ...values, uid: user.uid })
            .then((result) => {
              toast.success('The device was created succesfully!!');
              router.push('/gateways/' + result.data.docId);
            })
            .catch((error) => {
              const message = error.message;
              toast.error(message);
            });

          setIsLoading(false);
        }}>
        {({ values, errors, setFieldValue }) => (
          <Form>
            <div className="flex flex-wrap flex-col lg:flex-row justify-start w-full">
              <div className="mr-0 lg:mr-6">
                <label htmlFor="uid" className="font-normal text-gray-600 dark:text-white">
                  UID
                </label>
                <FieldInput error={getError('uid')} isValidating={isValidating}>
                  <Field
                    name="uid"
                    type="text"
                    placeholder="UID number"
                    className={errors.uid ? errorInputClass : successInputClass}
                    validate={validateUID}
                  />
                </FieldInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label htmlFor="vendor" className="font-normal text-gray-600 dark:text-white">
                  Vendor
                </label>
                <FieldInput error={getError('vendor')}>
                  <Field
                    name="vendor"
                    type="text"
                    className={errors.vendor ? errorInputClass : successInputClass}
                    placeholder="Vendor"
                  />
                </FieldInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label htmlFor="gateway" className="font-normal text-gray-600 dark:text-white">
                  Gateway
                </label>
                <FieldInput error={getError('gateway')}>
                  <Field
                    as="select"
                    name="gateway"
                    className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                    <option value="red">Reskjdfhsdkfd</option>
                    <option value="green">Greesdfjhkhn</option>
                  </Field>
                </FieldInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label htmlFor="online" className="font-normal text-gray-600 dark:text-white">
                  Offline/Online
                </label>

                <div className="mt-2">
                  <div
                    className="relative inline-block w-10 align-middle select-none mr-2"
                    onClick={() => setFieldValue('online', !values.online)}>
                    <Field
                      type="checkbox"
                      name="online"
                      className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="online"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <span className="text-gray-400 font-medium">
                    {values.online ? 'Online' : 'Offline'}
                  </span>
                </div>
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
