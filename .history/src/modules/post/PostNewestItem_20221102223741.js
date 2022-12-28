import React from "react";
import styled from "styled-components";

const PostNewestItemStyles = styled.div``;

const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZlbmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="post-content">
        <span className="post-category">Kiến thức</span>
        <h3 className="post-title">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </h3>
        <div className="post-info">
          <span className="post-time">Mar 23</span>
          <span className="post-dot"></span>
          <span className="post-author">Andiez Le</span>
        </div>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
