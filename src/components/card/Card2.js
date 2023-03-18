import React from "react";
import styled, { css } from "styled-components";
import image1 from "../../assets/images/image1.svg";
import avatar from "../../assets/images/avatar.svg";
import heart from "../../assets/images/coolicon.svg";

const StyledCard = styled.div`
  position: relative;
  width: 400px;
  .card-image {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    width: calc(100% - 36px);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 100rem;
      flex-shrink: 0;
    }
    .card-username {
      font-weight: 300;
      font-size: 16px;
      color: ${(props) => props.theme.orange};
    }
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-title {
      font-size: 18px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.blue};
    }
    .card-number {
      font-size: 18px;
      font-weight: bold;
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );

      ${(props) =>
        props.secondary &&
        css`
          background: linear-gradient(86.88deg, #20e3b2 1.38%, #2cccff 64.35%);
        `};
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
  .card-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
`;

const Card2 = (props) => {
  console.log("🚀 ~ file: Card.js:108 ~ Card ~ props:", props);
  return (
    <>
      <StyledCard>
        <div className="card-image">
          <img src={image1} alt="" />
        </div>
        <div className="card-content">
          <div className="card-top">
            <div className="card-user">
              <img src={avatar} alt="" />
              <span className="card-username">@zndrson</span>
            </div>
            <div className="card-meta">
              <img src={heart} alt="" />
              <span>256</span>
            </div>
          </div>
          <div className="card-footer">
            <h3 className="card-title">Cosmic Perspective</h3>
            <span className="card-number" secondary={props.secondary}>
              12,000 PSL
            </span>
          </div>
        </div>
      </StyledCard>
    </>
  );
};

export default Card2;
