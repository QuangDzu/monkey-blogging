import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";

const AuthorBox = ({ userId = "" }) => {
  useEffect(() => {
    async function fetchUserData() {
      const docRef = doc(db, "users", userId);
      const docSnapshot = await getDoc(docRef);
    }
    fetchUserData();
  }, []);
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
