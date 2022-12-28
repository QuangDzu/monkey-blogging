import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <div className="banner-heading">Monkey Blogging</div>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur tenetur, vero praesentium quos qui labore! Quod
              inventore itaque, totam sit quisquam impedit perferendis dolores
              dignissimos, quos distinctio blanditiis praesentium. Beatae.
            </p>
          </div>
          <div className="banner-image">
            <img src="/image-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
