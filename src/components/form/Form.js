import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  // const [fullName, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");

  // const handleFullName = (e) => {
  //   setFullName(e.target.value);
  // };
  // const handleMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleCountry = (e) => {
  //   setCountry(e.target.value);
  // };
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const type = e.target.type;
    // console.log("Type", type);
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
    // if (type === "checkbox") {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.checked,
    //   });
    // } else {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //   });
    // }
  };
  return (
    <div className="p-5">
      <div className="flex gap-5">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>

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

export default Form;
