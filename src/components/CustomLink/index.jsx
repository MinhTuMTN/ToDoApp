import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CustomRouterLink = styled(Link)`
  text-decoration: none;
  color: #056674;

  &:hover {
    color: #ff4b5c;
  }
`;

function CustomLink(props) {
  const { to, text, variant } = props;
  return (
    <CustomRouterLink to={to}>
      <Typography variant={variant && "h3"} fontWeight="bold" fontSize="1.2rem">
        {text}
      </Typography>
    </CustomRouterLink>
  );
}

export default CustomLink;
