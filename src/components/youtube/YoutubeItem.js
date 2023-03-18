import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className={`youtube-items ${props.className}`}>
        <div className="youtube-image">
          <img src={props.image} alt="logo" />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="" className="youtube-avatar" />
          <div className="youtube-info">
            <div className="youtube-title">
              {props.title || "This is example of title"}
            </div>
            <h4 className="youtube-author">
              {props.author || "This is example of author name"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
