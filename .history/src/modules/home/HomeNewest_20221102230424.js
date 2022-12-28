import Heading from "components/layouts/Heading";
import PostItem from "modules/post/PostItem";
import PostNewestItem from "modules/post/PostNewestItem";
import PostNewestLarge from "modules/post/PostNewestLarge";
import React from "react";
import styled from "styled-components";

const HomeNewestStyles = styled.div`
  .layout {
  }
`;

const HomeNewest = () => {
  return (
    <HomeNewestStyles className="home-block">
      <div className="container">
        <Heading>Mới nhất</Heading>
        <div className="layout">
          <PostNewestLarge></PostNewestLarge>
          <div className="sidebar">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
        </div>
        <div className="grid-layout grid-layout-primary">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
