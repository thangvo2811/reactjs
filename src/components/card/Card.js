import React from "react";
import styled, { css } from "styled-components";
import image1 from "../../assets/images/image1.svg";
import avatar from "../../assets/images/avatar.svg";
import heart from "../../assets/images/coolicon.svg";

const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;

const CardImage = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  width: calc(100% - 36px);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 100rem;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardNumber = styled.span`
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
      background: linear-gradient(
        86.88deg,
        #20e3b2 1.38%,
        #2cccff 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const Card = (props) => {
  console.log("🚀 ~ file: Card.js:108 ~ Card ~ props:", props);
  return (
    <>
      <StyledCard>
        <CardImage>
          <CardImg src={image1} alt="" />
        </CardImage>
        <CardContent>
          <CardTop>
            <CardUser>
              <UserAvatar src={avatar} alt="" />
              <UserName>@zndrson</UserName>
            </CardUser>
            <CardMeta>
              <img src={heart} alt="" />
              <span>256</span>
            </CardMeta>
          </CardTop>
          <CardFooter>
            <CardTitle>Cosmic Perspective</CardTitle>
            <CardNumber secondary={props.secondary}>12,000 PSL</CardNumber>
          </CardFooter>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default Card;
