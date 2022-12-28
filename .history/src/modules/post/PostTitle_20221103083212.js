import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.h3`
  display: block;
  font-weight: bold;
  line-height: 1.5;
`;

const PostTitle = ({ children, className = "", size = "normal" }) => {
  return (
    <PostTitleStyles className={className} size={size}>
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
