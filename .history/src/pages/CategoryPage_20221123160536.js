import Heading from "components/layouts/Heading";
import Layout from "components/layouts/Layout";
import { db } from "firebase-app/firebase-config";
import { collection, query } from "firebase/firestore";
import PostItem from "modules/post/PostItem";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const docRef = query(collection(db, "posts", params.slug));
    }
  }, [params.slug]);
  if (!params.slug) return null;
  return (
    <Layout>
      <div className="container">
        <div className="post-related">
          <Heading>Bài viết liên quan</Heading>
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
