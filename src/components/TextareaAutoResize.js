import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };

  useEffect(() => {
    setTextAreaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5" style={{ minHeight: parentHeight }}>
      <textarea
        ref={textareaRef}
        className="w-full max-w-[400px] overflow-hidden  p-5 rounded-lg border border-gray-300 focus:border-blue-500 resize-none outline-none transition-all leading-normal"
        placeholder="Please enter write content ...."
        value={text}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
