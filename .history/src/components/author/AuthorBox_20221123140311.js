import React, { useEffect } from "react";

const AuthorBox = ({ userId = "" }) => {
  useEffect(() => {}, []);
  if (!userId) return null;
  return (
    <div className="author">
      <div className="author-image">
        <img src="" alt="" />
      </div>
      <div className="author-content">
        <h3 className="author-name"></h3>
        <p className="author-desc"></p>
      </div>
    </div>
  );
};

export default AuthorBox;
