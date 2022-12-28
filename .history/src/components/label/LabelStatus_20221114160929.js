import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelStatusStyles = styled.span`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

/**
 * @param type - "default" "success" "warning" "danger"
 * @returns
 */

const LabelStatus = ({ children, type = "default" }) => {
  let styleClassName = "text-gray-500 bg-gray-500";
  return <LabelStatusStyles></LabelStatusStyles>;
};

export default LabelStatus;
