import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FieldInput from './RegisterInput/RegisterInput';

const RegisterForm = () => {
  const schema = Yup.object({
    name: Yup.string().required().min(3).max(50),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(32),
    repeat: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="mt-12">
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        <Form>
          <FieldInput icon={faUser}>
            <Field
              name="name"
              type="text"
              className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Your name"
            />

            <ErrorMessage name="name" />
          </FieldInput>

          <FieldInput icon={faEnvelope}>
            <Field
              name="email"
              type="email"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Your email"
            />
            <ErrorMessage name="email" />
          </FieldInput>

          <FieldInput icon={faLock}>
            <Field
              name="password"
              type="password"
              className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Your password"
            />

            <ErrorMessage name="password" />
          </FieldInput>

          <FieldInput icon={faCheckDouble}>
            <Field
              name="confirmPassword"
              type="password"
              className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Confirm password"
            />

            <ErrorMessage name="name" />
          </FieldInput>

          <div className="my-6">
            <button
              className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 w-full"
              type="submit">
              Register
            </button>
          </div>
        </Form>
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
