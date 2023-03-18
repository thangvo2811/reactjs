import React, { useEffect, useRef } from "react";
import useHover from "../hooks/UseHover";
import useLinkNewTab from "../hooks/UseLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolore, cupiditate facilis ducimus at odit ratione possimus atque
        eveniet quos officiis quaerat sunt, commodi placeat exercitationem
        pariatur, enim assumenda modi!
        <a
          href="https://www.google.com.vn/"
          className={`${hovered ? "text-green-500" : ""}`}
          ref={nodeRef}
        >
          Google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolore, cupiditate facilis ducimus at odit ratione possimus atque
        eveniet quos officiis quaerat sunt, commodi placeat exercitationem
        pariatur, enim assumenda modi!
        <a href="https://www.google.com.vn/">Google.com</a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolore, cupiditate facilis ducimus at odit ratione possimus atque
        eveniet quos officiis quaerat sunt, commodi placeat exercitationem
        pariatur, enim assumenda modi!
        <a href="https://www.google.com.vn/">Google.com</a>
      </p>
    </div>
  );
};

export default Blog;
