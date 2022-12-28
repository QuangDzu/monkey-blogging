import React from "react";
import styled from "styled-components";

const FieldStyles = styled.div``;

const Field = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
