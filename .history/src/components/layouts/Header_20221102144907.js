import React from "react";
import styled from "styled-components";

const menuLink = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/",
    title: "Blog",
  },
  {
    url: "/",
    title: "Contact",
  },
];

const HeaderStyles = styled.div`
  .header-main {
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="logo.png 2x" alt="monkey-blogging" className="logo" />
          </a>
          <ul className="menu">
            {menuLink.map((item) => (
              <li className="menu-item" key={item.title}>
                <a href={item.url} className="menu-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="header-right">
            <div className="search">
              <input type="text" className="search" />
              <span className="search-icon"> </span>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
