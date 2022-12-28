import Heading from "components/layouts/Heading";
import Layout from "components/layouts/Layout";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import PostItem from "modules/post/PostItem";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const docRef = query(
        collection(db, "posts"),
        where("category.slug", "==", params.slug)
      );
      onSnapshot(docRef, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setPosts(results);
      });
    }
    fetchData();
  }, [params.slug]);

  if (posts.length <= 0) return null;

  return (
    <Layout>
      <div className="container">
        <div className="pt-10"></div>
        <div className="post-related">
          <Heading>Danh mục {params.slug}</Heading>
          <div className="grid-layout grid-layout-primary">
            {posts.map((item) => (
              <PostItem key={item.id} data={item}></PostItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
