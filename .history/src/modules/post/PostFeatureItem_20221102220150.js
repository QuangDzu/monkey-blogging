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
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <div className="post-category">Kiến thức</div>
          <div className="post-info">
            <div className="post-time">Mar 23</div>
            <div className="post-dot"></div>
            <div className="post-auth">Andiez Le</div>
          </div>
        </div>
        <h3 className="post-title">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </h3>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
