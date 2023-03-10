import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostTitleStyles = styled.h3`
  display: block;
  font-weight: bold;
  line-height: 1.5;
  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
    `};
`;

const PostTitle = ({ children, className = "", size = "normal", to=/ }) => {
  return (
    <PostTitleStyles className={`post-title ${className}`} size={size}>
      <NavLink to={to}></NavLink>
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
