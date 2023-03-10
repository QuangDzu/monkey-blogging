import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      border-radius: 16px;
    }
    &-category {
      margin-bottom: 10px;
    }
    &-title {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-image {
        aspect-ratio: 16/9;
        height: auto;
      }
    }
  }
`;

const PostItem = ({ data }) => {
  if (!data) return null;

  return (
    <PostItemStyles>
      <PostImage url={data.image} alt="" to="/"></PostImage>
      <PostCategory>{data.category?.name}</PostCategory>
      <PostTitle size="normal">{data.title}</PostTitle>
      <PostMeta></PostMeta>
    </PostItemStyles>
  );
};

export default PostItem;
