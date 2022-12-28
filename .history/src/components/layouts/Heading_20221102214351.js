import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div``;

const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
