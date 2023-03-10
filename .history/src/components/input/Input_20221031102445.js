import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import { IconEyeOpen } from "../icon";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  .input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 30px" : "20px")};
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  .input::-webkit-input-placeholder {
    color: #c4c4c4;
  }
  .input::-moz-input-placeholder {
    color: #c4c4c4;
  }
  .icon-eye {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

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
        {...field}
        {...props}
        placeholder="Enter your fullname"
      />
      {hasIcon ? <IconEyeOpen className="icon-eye"></IconEyeOpen> : null}
    </InputStyles>
  );
};

export default Input;
