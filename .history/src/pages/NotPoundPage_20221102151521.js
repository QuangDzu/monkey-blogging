import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotPoundPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    display: block;
    margin-bottom: 40px;
  }
  .heading {
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 40px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
  }
`;

const NotPoundPage = () => {
  return (
    <NotPoundPageStyles>
      <NavLink to="/" className={"logo"}>
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="heading">Oops! Page not found</h1>
      <NavLink to="/" className={"back"}>
        Back to home
      </NavLink>
    </NotPoundPageStyles>
  );
};

export default NotPoundPage;
