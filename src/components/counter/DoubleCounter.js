import React, { useState } from "react";

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <div>{count}</div>
    </div>
  );
};

export default DoubleCounter;
