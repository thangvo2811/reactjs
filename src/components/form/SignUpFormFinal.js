import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string().required("Required"),
      //   lastName: Yup.string().required("Required"),
      //   email: Yup.string().email().required("Required"),
      //   intro: Yup.string().required("Required"),
      //   job: Yup.string().required("Required"),
      //   terms: Yup.boolean().oneOf(
      //     [true],
      //     "Please check the terms and conditions"
      //   ),
      // })}
      onSubmit={(values, action) => {
        // console.log(values);
        // console.log(action);
        setTimeout(() => {
          action.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          action.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="First name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>
            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              label="Email address"
              name="email"
              placeholder="Enter your email address"
              id="email"
              type="email"
            ></MyInput>
            <MyTextArea
              label="Introduce yourself"
              name="intro"
              placeholder="Enter your introduce yourself"
              id="intro"
            ></MyTextArea>
            <MySelectBox label="Select your Job" name="job" id="job">
              <option value="frontend">Frontend Developers</option>
              <option value="backend">Backend Developers</option>
              <option value="fullstack">Fullstack Developers</option>
            </MySelectBox>
            <MyCheckBox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckBox>
            {/* <div className="flex flex-col gap-2 mb-5">
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
        </div> */}

            {/* <div className="flex flex-col gap-2 mb-5">
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
        </div> */}
            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email address</label>
          <Field
            name="email"
            type="email"
            className="p-4 rounded-md border border-gray-100 outline-none"
            placeholder="Enter your email address"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div> */}
            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Introduce YourSelf</label>
          <Field
            name="intro"
            className="p-4 rounded-md border border-gray-100 outline-none h-[150px] resize-none"
            placeholder="Enter your introduce yourself"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div> */}
            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Job</label>
          <Field
            name="job"
            className="p-4 rounded-md border border-gray-100"
            placeholder="Enter your job"
            as="select"
          >
            <option value="frontend">Frontend Developers</option>
            <option value="backend">Backend Developers</option>
            <option value="fullstack">Fullstack Developers</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div> */}
            {/* <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            type="checkbox"
            className="p-4 rounded-md border border-gray-100"
            placeholder="Enter your job"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div> */}
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

//destructuring

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("Meta", meta);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100 outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-md border border-gray-100 outline-none h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-100 outline-none "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
