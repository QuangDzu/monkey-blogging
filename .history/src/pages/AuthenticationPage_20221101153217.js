import React from "react";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div``;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
      </div>
      {children}
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
