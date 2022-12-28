import Header from "components/layouts/Header";
import Layout from "components/layouts/Layout";
import HomeBanner from "modules/home/HomeBanner";
import React from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
