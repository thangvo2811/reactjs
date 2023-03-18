import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    // console.log(divRef.current);
    // if (divRef.current) divRef.current.style.backgroundColor = "blue";
    // inputRef.current.focus();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  // console.log(divRef.current);

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        className="inline-block p-5 border border-gray-200 outline-none  focus:border-blue-500"
        placeholder="Auto focus input"
      />
    </div>
  );
};

export default Input;
