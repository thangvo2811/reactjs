import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "./../hooks/useClickOutSide";

const DropDown = () => {
  const { dropDownRef, showDropdown, setShowDropdown } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
        <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
