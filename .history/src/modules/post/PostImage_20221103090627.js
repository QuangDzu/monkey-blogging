import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PostImageStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const PostImage = ({ className = "", url = "", alt = "", to = "null" }) => {
  if (to) return <NavLink to={to}></NavLink>;
  return (
    <PostImageStyles className={`post-image ${className}`}>
      <NavLink></NavLink>
      <img src={url} alt={alt} loading="lazy" />
    </PostImageStyles>
  );
};

export default PostImage;
