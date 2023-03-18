import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../data";

const YoutubeList = (props) => {
  console.log("Props", props);
  return (
    <div>
      <div className="youtube-list">
        {/* {props.children} */}
        {YoutubeData?.map((item, index) => {
          let newClass = "";
          if (index === 1) newClass = "abc";
          return (
            <YoutubeItem
              key={index.id}
              image={item?.image}
              avatar={item?.avatar}
              title={item?.title}
              author={item?.author}
              className={newClass}
            ></YoutubeItem>
          );
        })}
      </div>
    </div>
  );
};

export default YoutubeList;
