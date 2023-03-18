import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(function () {
      setCount((count) => count + 1);
    }, 1000);
  };
  return <div onClick={handleIncrement}>Increment {count}</div>;
};

export default Counter;
