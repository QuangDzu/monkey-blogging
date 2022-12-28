import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageNotPoundStyles = styled.div`
  height: 100vh;
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
    margin-bottom: 20px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
    font-weight: 500;
  }
`;

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <PageNotPoundStyles>
      <div className="page-content">
        <img src="/404.png" alt="notfound" className="image" />
        <h1 className="heading">404 - Looks like you're lost.</h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
      </div>
      <NavLink to="/" className={"logo"}>
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="heading">Oops! Page not found</h1>
      <NavLink to="/" className={"back"}>
        Back to home
      </NavLink>
    </PageNotPoundStyles>
  );
};

export default PageNotFound;
