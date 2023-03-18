import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timeRef.current) {
      return;
    }
    timeRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  useEffect(() => {
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  return (
    <div>
      <div>Time: {count}s</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default StopWatch;
