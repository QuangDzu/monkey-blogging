import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div``;

const Input = ({
  type = "text",
  name = "",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={hasIcon}>
      <input
        type={type}
        id={name}
        {...props}
        placeholder="Enter your fullname"
      />
      {/* {hasIcon ? } */}
    </InputStyles>
  );
};

export default Input;
