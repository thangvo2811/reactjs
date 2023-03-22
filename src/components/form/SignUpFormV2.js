import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters and less")
          .required("Please enter your first name"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters and less")
          .required("Please enter your last name"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            className="p-4 rounded-md border border-gray-100 outline-none"
            placeholder="Enter your first name"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            className="p-4 rounded-md border border-gray-100 outline-none"
            placeholder="Enter your last name"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
