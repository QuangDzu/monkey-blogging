import React from "react";
import styled from "styled-components";

const InputStyles = styled.div``;

const Input = ({ type, name, ...props }) => {
  return (
    <InputStyles>
      <input
        type={type}
        id={name}
        {...props}
        placeholder="Enter your fullname"
      />
    </InputStyles>
  );
};

export default Input;
