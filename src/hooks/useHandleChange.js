import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const type = e.target.type;
    // console.log("Type", type);
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
}
