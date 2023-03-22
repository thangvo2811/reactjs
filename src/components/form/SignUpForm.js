import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Please enter your first name";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters and less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Please enter your last name";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters and less";
//   }
//   return errors;
// };
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "" },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters and less")
        .required("Please enter your first name"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters and less")
        .required("Please enter your last name"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log("FormIk", formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          className="p-4 rounded-md border border-gray-100 outline-none"
          placeholder="Enter your first name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          className="p-4 rounded-md border border-gray-100 outline-none"
          placeholder="Enter your last name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
