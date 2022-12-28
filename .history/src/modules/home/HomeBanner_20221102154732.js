import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary};
  );
`;

const HomeBanner = () => {
  return <div className="container"></div>;
};

export default HomeBanner;
