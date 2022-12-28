import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotPoundPageStyles = styled.div``;
const NotPoundPage = () => {
  return (
    <NotPoundPageStyles>
      <NavLink to="/">
        <img src="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
    </NotPoundPageStyles>
  );
};

export default NotPoundPage;
