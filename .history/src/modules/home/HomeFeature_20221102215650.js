import React from "react";
import styled from "styled-components";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  return (
    <HomeFeatureStyles>
      <div className="container">
        <h2 className="heading">Feature</h2>
        <div className="grid-layout">PostFeatureItem</div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
