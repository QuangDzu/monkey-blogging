import React from "react";
import styled from "styled-components";

const LabelStyles = styled.div``;

const Label = ({ children }) => {
  return (
    <LabelStyles htmlFor="fullname" className="label">
      {children}
    </LabelStyles>
  );
};

export default Label;
