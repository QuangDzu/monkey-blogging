import Heading from "components/layouts/Heading";
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
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
