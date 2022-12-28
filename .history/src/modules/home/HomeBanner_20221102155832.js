import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-content {
    max-width: 400px;
    color: white;
  }
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      max-width: 400px;
      color: white;
    }
    &-heading {
    }
    &-desc {
    }
  }
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
