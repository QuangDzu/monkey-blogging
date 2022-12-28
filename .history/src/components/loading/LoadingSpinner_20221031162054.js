import React from "react";
import styled from "styled-components";

const SpinnerStyles = styled.div``;

const LoadingSpinner = ({ size = "40px", borderSize = "5px" }) => {
  return <SpinnerStyles size={size} borderSize={borderSize}></SpinnerStyles>;
};

export default LoadingSpinner;
