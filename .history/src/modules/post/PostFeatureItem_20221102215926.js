import React from "react";
import styled from "styled-components";

const PostFeatureItemStyles = styled.div``;

const PostFeatureItem = () => {
  return (
    <PostFeatureItemStyles>
      <img
        src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="unsplash"
        className="post-image"
      />
      <div className="post-top">
        <div className="post-category"></div>
        <div className="post-info">
          <div className="post-time"></div>
          <div className="post-dot"></div>
          <div className="post-auth"></div>
        </div>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
