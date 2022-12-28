import Heading from "components/layouts/Heading";
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
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
