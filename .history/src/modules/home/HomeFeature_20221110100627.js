import Heading from "components/layouts/Heading";
import { db } from "firebase-app/firebase-config";
import { collection, query, where } from "firebase/firestore";
import PostFeatureItem from "modules/post/PostFeatureItem";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(colRef, where("status", "==", 1), where("hot", "==", true));
  }, []);
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout"></div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
