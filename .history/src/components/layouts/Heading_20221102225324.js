import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  position: relative;
  color: ${(props) => props.theme.primary};
  font-size: 28px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  &:before {
    content: "";
    width: 50px;
    height: 4px;
    background-color: ${(props) => props.theme.accent};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
