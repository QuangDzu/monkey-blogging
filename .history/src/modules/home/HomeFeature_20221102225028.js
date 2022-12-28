import Heading from "components/layouts/Heading";
import PostFeatureItem from "modules/post/PostFeatureItem";
import React from "react";
import styled from "styled-components";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  return (
    <HomeFeatureStyles>
      <div className="container">
        <Heading>Feature</Heading>
        <div className="grid-layout">
          <PostFeatureItem></PostFeatureItem>
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
