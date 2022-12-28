import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import { IconEyeOpen } from "../icon";

const TextareaStyles = styled.div`
  position: relative;
  width: 100%;
  textarea {
    width: 100%;
    padding: ${(props) =>
      props.hasIcon ? "16px 60px 16px 20px" : "16px 20px"};
    background-color: #e7ecf3;
    border: 1px solid ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    color: ${(props) => props.theme.black};
    font-size: 14px;
    resize: none;
    min-height: 200px;
  }
  textarea:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  textarea::-webkit-input-placeholder {
    color: #84878b;
  }
  textarea::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

/**
 *
 * @param {*} placeholder(optional) - Placeholder of input
 * @param {*} name(optional) - name of input
 * @param {*} control - control from react hook form
 * @returns
 */

const Input = ({ type = "text", name = "", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <TextareaStyles hasIcon={children ? true : false}>
      <textarea
        id={name}
        type={type}
        {...field}
        {...props}
        cols="30"
        rows="10"
      ></textarea>
      {children ? <div className="input-icon">{children}</div> : null}
    </TextareaStyles>
  );
};

export default Input;
