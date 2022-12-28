import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  background-color: ${(props) => props.theme.primary};
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
