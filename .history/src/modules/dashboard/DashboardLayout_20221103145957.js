import React from "react";
import styled from "styled-components";

const DashboardStyles = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  .dashboard {
    &-main {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      padding: 40px 20px;
      gap: 0 40px;
    }
  }
`;

const DashboardLayout = () => {
  return <DashboardStyles></DashboardStyles>;
};

export default DashboardLayout;
