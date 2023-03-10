import React from "react";
import styled from "styled-components";

const PostMetaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  .post {
    &-dot {
    }
  }
`;

const PostMeta = ({ date = "Mar 23", authorName = "Andiez Le" }) => {
  return (
    <PostMetaStyles>
      <span className="post-time">{date}</span>
      <span className="post-dot"></span>
      <span className="post-auth">{authorName}</span>
    </PostMetaStyles>
  );
};

export default PostMeta;
