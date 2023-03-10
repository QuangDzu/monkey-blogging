import React from "react";
import styled from "styled-components";

const PostImageStyles = styled.div``;

const PostImage = ({ className = "", url = "", alt = "" }) => {
  return (
    <PostImageStyles>
      <img src={url} alt={alt} loading="lazy" />
    </PostImageStyles>
  );
};

export default PostImage;
