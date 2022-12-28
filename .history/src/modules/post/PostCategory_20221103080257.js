import React from "react";
import styled from "styled-components";

const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  color: #6b6b6b;
  font-size: 12px;
  font-weight: 600;
  background-color: #f3f3f3;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const PostCategory = () => {
  return <PostCategoryStyles></PostCategoryStyles>;
};

export default PostCategory;
