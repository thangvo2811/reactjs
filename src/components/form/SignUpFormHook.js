import React from "react";
import { useForm } from "react-hook-form";
//using react hook form

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

//using Yup react hook form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      isValid,
      isDirty,
      dirtyFields,
      isSubmitSuccessful,
    },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  // console.log("SignUpFormHook ~ isSubmitting:", isValid);
  // console.log("isValid:", isValid);
  console.log("IsDirty:", isDirty);
  console.log("dirtyFields", dirtyFields);
  console.log("isSubmitting", isSubmitSuccessful);

  const onSubmit = async (values) => {
    if (isValid) {
      console.log("Send data to backend");
    }
    // return new Promise(() => {
    //   setTimeout(() => {
    //     console.log("Values", values);
    //   }, 5000);
    // });
    reset({
      firstName: "november",
      lastName: "thang",
      email: "thang@gmail.com",
    });
  };
  console.log("Errors", errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors?.firstName?.message}
          </div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          className="p-4 rounded-md border border-gray-100 outline-none"
          placeholder="Enter your last name"
          {...register("lastName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.lastName?.type === "required" && (
          <div className="text-red-500 text-sm"></div>
        )}
        {errors?.lastName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="p-4 rounded-md border border-gray-100 outline-none"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
          })}
        />
        {errors?.email?.type === "required" && (
          <div className="text-red-500 text-sm">Please enter your email</div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
