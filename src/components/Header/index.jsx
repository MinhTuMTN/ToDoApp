import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";
import React, { memo } from "react";
import CustomLink from "../CustomLink";
import icon from "../../assets/icon.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100vw;
`;
const Left = styled.div`
  display: flex;
  flex-basis: 30%;
  align-items: center;

  @media (max-width: 768px) {
    flex-basis: 40%;
  }
  @media (max-width: 425px) {
    flex-basis: 50%;
  }
`;
const Middle = styled.div`
  flex-basis: 30%;
  display: flex;
  column-gap: 1rem;

  @media (max-width: 768px) {
    flex-basis: 50%;
  }
  @media (max-width: 425px) {
    flex-basis: 40%;
  }
`;
const Right = styled.div`
  flex-basis: 30%;

  @media (max-width: 768px) {
    flex-basis: 0%;
  }

  @media (max-width: 425px) {
    flex-basis: 0%;
  }
`;

function Header(props) {
  return (
    <Wrapper>
      <Left>
        <Avatar
          src={icon}
          sx={{
            width: "3rem",
            height: "3rem",
            marginRight: "0.5rem",
            border: "1px solid #fff",
          }}
        />
        <Typography
          variant="h3"
          fontSize="1.5rem"
          fontWeight="bold"
          color="#F38181"
        >
          The Duck Hospital
        </Typography>
      </Left>
      <Middle>
        <CustomLink to="/" text="Home" />
        <CustomLink to="/todo" text="To Do" />
      </Middle>
      <Right></Right>
    </Wrapper>
  );
}

export default memo(Header);
