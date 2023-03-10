import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div``;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="./public/logo.png 2x" alt="monkey-blogging" />
          </a>
          <ul className="menu"></ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
