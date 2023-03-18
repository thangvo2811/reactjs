import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        // console.log("Click drop down outside");
        setShowDropdown(false);
      }
      // else {
      //   console.log("Click dropdown inside");
      // }
    };
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    dropDownRef,
    showDropdown,
    setShowDropdown,
  };
}
