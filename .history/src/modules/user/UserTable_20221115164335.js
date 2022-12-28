import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, []);

  console.log(userList);
  const renderUserItem = (user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user?.fullname}</td>
        <td>{user?.username}</td>
        <td>{user?.email}</td>
        <td>{user?.fullname}</td>
        <td></td>
        <td>
          <div className="flex items-center gap-x-3">
            <ActionView></ActionView>
            <ActionEdit
            //   onClick={() =>
            //     navigate(`/manage/update-category?id=${category.id}`)
            //   }
            ></ActionEdit>
            <ActionDelete
            //   onClick={() => handleDeleteCategory(category.id)}
            ></ActionDelete>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 && userList.map((user) => renderUserItem(user))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
