import Heading from "components/layouts/Heading";
import React, { useState } from "react";
import PostItem from "./PostItem";

const PostRelated = ({ categoryId = "" }) => {
  const [post, setPost] = useState({});
  if (!categoryId || !post) return null;
  return (
    <div className="post-related">
      <Heading>Bài viết liên quan</Heading>
      <div className="grid-layout grid-layout-primary">
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
      </div>
    </div>
  );
};

export default PostRelated;
