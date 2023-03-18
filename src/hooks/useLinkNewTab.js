import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef) {
      const link = contentRef.current.querySelectorAll("a");
      link.length > 0 &&
        link.forEach((item) => item.setAttribute("target", "_blank"));
    }
  }, []);
  return {
    contentRef,
  };
}
