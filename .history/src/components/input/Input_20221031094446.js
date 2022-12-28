import React from "react";
import styled from "styled-components";

const InputStyles = styled.div``;

const Input = ({ type, name }) => {
  return (
    <InputStyles>
      <input
        type={type}
        id={name}
        className="input"
        placeholder="Enter your fullname"
      />
    </InputStyles>
  );
};

export default Input;
