import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form2 = () => {
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  // console.log("Values", values);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your name is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3 text-red-700">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>

        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>

      {/* <div>{message}</div>
      <textarea
        type="text"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        name="message"
        placeholder="Enter your message"
        onChange={handleMessage}
      ></textarea>
      <div>{country}</div>
      <select name="country" onChange={handleCountry}>
        <option value="VietNam">VN</option>
        <option value="USA">USA</option>
        <option value="ThaiLand">TL</option>
      </select> */}
    </div>
  );
};

export default Form2;
