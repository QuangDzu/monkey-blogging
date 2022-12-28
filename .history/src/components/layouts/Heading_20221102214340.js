import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div``;

const Heading = ({ className = "" }) => {
  return <HeadingStyles className={className}></HeadingStyles>;
};

export default Heading;
