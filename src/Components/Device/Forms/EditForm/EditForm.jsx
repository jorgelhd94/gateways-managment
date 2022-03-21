import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  successInputClass,
  errorInputClass,
  selectSuccessClass,
  selectErrorClass
} from '../../../../utils/inputStyle';

import FieldInput from '../../../UI/InputForm/InputForm';
import ButtonSubmit from '../../../UI/Buttons/ButtonSubmit/ButtonSubmit';
import { toast } from 'react-toastify';
import FormSkeleton from '../../../UI/Skeleton/FormSkeleton/FormSkeleton';

import { functions, httpsCallable } from '../../../../includes/firebase';

const EditForm = (props) => {
  const router = useRouter();
  const { deviceId } = router.query;

  const [initialValues, setInitialValues] = useState({
    uid: '',
    vendor: '',
    gateway: '',
    online: false
  });

  /* Fetch data */
  const [isFetchingData, setIsFetchingData] = useState(false);
  useEffect(async () => {
    setIsFetchingData(true);
    const getDevice = httpsCallable(functions, 'device-getDoc');
    await getDevice({ docId: deviceId })
      .then((result) => {
        if (result.data.doc) {
          setInitialValues(result.data.doc);
          setIsFetchingData(false);
        } else {
          router.push('/devices');
        }
      })
      .catch((error) => {
        const message = error.message;
        toast.error(message);
      });
  }, []);
  /* End Fetch data*/

  /* Create select options */
  const [listOptions, setListOptions] = useState([
    <option key={0} disabled>
      No elements
    </option>
  ]);

  const createSelect = () => {
    if (props.listGateways.length > 0) {
      const list = props.listGateways.map((value) => {
        return (
          <option key={value.docId} value={value.docId}>
            {value.name} - {value.serial}
          </option>
        );
      });
      const empty = <option key="empty" value=""></option>;
      setListOptions([empty, ...list]);
    }
  };

  useEffect(() => createSelect(), []);
  /* End Create select options */

  /* Form definitions */
  const [isLoading, setIsLoading] = useState(false);

  const requierdMsg = 'This is a required field';

  const schema = Yup.object({
    uid: Yup.string().required(requierdMsg),
    vendor: Yup.string().required(requierdMsg),
    gateway: Yup.string().required(requierdMsg)
  });

  const getError = (inputName) => {
    return <ErrorMessage name={inputName} />;
  };

  async function validateUID(value) {
    let error;

    if (value !== initialValues.uid) {
      const checkUID = httpsCallable(functions, 'device-validateUID');
      await checkUID({ value })
        .then((result) => {
          if (result.data.exists) {
            error = 'The UID must be unique';
          }
        })
        .catch(() => {
          error = 'The system cannot check the uid!!';
        });
    }

    return error;
  }
  /* End Form definitions*/

  return (
    <>
      {isFetchingData ? (
        <FormSkeleton />
      ) : (
        <Formik
          initialValues={{
            uid: initialValues.uid,
            vendor: initialValues.vendor,
            gateway: initialValues.gateway,
            online: initialValues.online
          }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            setIsLoading(true);

            const editDevice = httpsCallable(functions, 'device-edit');
            await editDevice({ ...values, docId: deviceId })
              .then(() => {
                toast.success('The device was updated succesfully!!');
                router.push('/devices/' + deviceId);
              })
              .catch((error) => {
                const message = error.message;
                toast.error(message);
              });

            setIsLoading(false);
            // eslint-disable-next-line prettier/prettier
          }}
        >
          {({ values, errors, setFieldValue, isValidating }) => (
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
                      // eslint-disable-next-line prettier/prettier
                      className={errors.gateway ? selectErrorClass : selectSuccessClass}
                    >
                      {listOptions}
                    </Field>
                  </FieldInput>
                </div>

                <div className="mr-0 lg:mr-6">
                  <label htmlFor="online" className="font-normal text-gray-600 dark:text-white">
                    Status
                  </label>

                  <div className="mt-2">
                    <div
                      className="relative inline-block w-10 align-middle select-none mr-2"
                      // eslint-disable-next-line prettier/prettier
                      onClick={() => setFieldValue('online', !values.online)}
                    >
                      <Field
                        type="checkbox"
                        name="online"
                        className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label
                        htmlFor="online"
                        // eslint-disable-next-line prettier/prettier
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                    <span className="text-gray-400 font-medium">
                      {values.online ? 'Online' : 'Offline'}
                    </span>
                  </div>
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
      )}
    </>
  );
};

EditForm.propTypes = {
  listGateways: PropTypes.array.isRequired
};

export default EditForm;
