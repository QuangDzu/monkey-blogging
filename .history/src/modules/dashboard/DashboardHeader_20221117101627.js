import { Button } from "components/button";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  .sidebar-logo {
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 0 20px;
    img {
      max-width: 40px;
    }
    margin-bottom: 20px;
    padding: 20px 20px 0;
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
`;

const DashboardHeader = () => {
  return (
    <DashboardHeaderStyles>
      <div className="sidebar-logo">
        <img srcSet="/logo.png 2x" alt="" />
        <span>Monkey Blogging</span>
      </div>
      <Button to="/manage/add-post" className="header-button" height="52px">
        Write new post
      </Button>
      <NavLink to="/profile" className="header-avatar">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt=""
        />
      </NavLink>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
