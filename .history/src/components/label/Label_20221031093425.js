import React from "react";
import styled from "styled-components";

const LabelStyles = styled.div``;

const Label = ({ htmlFor, children }) => {
  return (
    <LabelStyles htmlFor={htmlFor} className="label">
      {children}
    </LabelStyles>
  );
};

export default Label;
