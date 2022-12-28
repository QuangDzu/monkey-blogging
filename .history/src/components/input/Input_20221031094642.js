import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div``;

const Input = ({ type = "text", name = "", children, ...props }) => {
  const { field } = useController({
    control,
    defaultValue: "",
  });
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
