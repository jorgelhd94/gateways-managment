import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ipv4 } from '../../../utils/customValidators';

import { successInputClass, errorInputClass } from '../../../utils/inputStyle';
import FieldInput from '../../UI/InputForm/InputForm';
import ButtonSubmit from '../../UI/Buttons/ButtonSubmit/ButtonSubmit';
import { toast } from 'react-toastify';
import FormSkeleton from '../../UI/Skeleton/FormSkeleton/FormSkeleton';

import { functions, httpsCallable } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

const EditForm = () => {
  const router = useRouter();
  const { gid } = router.query;
  const [initialValues, setInitialValues] = useState({
    serial: '',
    name: '',
    ipv4: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const [user] = useContext(UserContext);

  const requierdMsg = 'This is a required field';

  useEffect(async () => {
    setIsFetchingData(true);
    const getGateway = httpsCallable(functions, 'gateway-getDoc');
    await getGateway({ docId: gid })
      .then((result) => {
        if (result.data.doc) {
          setInitialValues(result.data.doc);
          setIsFetchingData(false);
        } else {
          router.push('/gateways');
        }
      })
      .catch((error) => {
        const message = error.message;
        toast.error(message);
      });
  }, []);

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

    if (value !== initialValues.serial) {
      const checkSerial = httpsCallable(functions, 'gateway-validateSerial');
      await checkSerial({ value })
        .then((result) => {
          if (result.data.exists) {
            error = 'This Serial already exists';
          }
        })
        .catch(() => {
          error = 'The system cannot check the serial!!';
        });
    }

    return error;
  }

  return (
    <div>
      <div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Edit Gateway
      </div>
      {isFetchingData ? (
        <FormSkeleton />
      ) : (
        <Formik
          initialValues={{
            serial: initialValues.serial,
            name: initialValues.name,
            ipv4: initialValues.ipv4
          }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            setIsLoading(true);

            const editGateway = httpsCallable(functions, 'gateway-edit');
            await editGateway({ ...values, uid: user.uid, docId: gid })
              .then((result) => {
                toast.success('The gateway was updated succesfully!!');
                router.push('/gateways/' + result.data.docId);
              })
              .catch((error) => {
                const message = error.message;
                toast.error(message);
              });

            setIsLoading(false);
            // eslint-disable-next-line prettier/prettier
          }}
        >
          {({ errors, isValidating }) => (
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
                <ButtonSubmit isLoading={isLoading} isValidating={isValidating}>
                  Submit
                </ButtonSubmit>
              </div>
            </Form>
          )}
        </Formik>
      )}{' '}
    </div>
  );
};

export default EditForm;
