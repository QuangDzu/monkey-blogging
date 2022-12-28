import React from "react";
import styled from "styled-components";

const PostFeatureItemStyles = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  height: 169px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: linear-gradient(
        179.77deg,
        #6b6b6b 36.45%,
        rgba(163, 163, 163, 0.622265) 63.98%,
        rgba(255, 255, 255, 0) 99.8%
      );
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    &-category {
      display: inline-block;
      padding: 8px 12px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100px;
      color: #6b6b6b;
      background-color: #f3f3f3;
      white-space: nowrap;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      color: white;
      margin-left: auto;
    }
    &-time {
    }
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: contentColor;
      border-radius: 100rem;
    }
    &-auth {
    }
    &-title {
      display: block;
      font-weight: bold;
      line-height: 1.5;
      color: white;
      font-size: 22px;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 272px;
  }
`;

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
