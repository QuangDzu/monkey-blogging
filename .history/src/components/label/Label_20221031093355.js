import React from "react";
import styled from "styled-components";

const LabelStyles = styled.div``;

const Label = () => {
  return (
    <LabelStyles htmlFor="fullname" className="label">
      Fullname
    </LabelStyles>
  );
};

export default Label;
