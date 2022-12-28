import { Table } from "components/table";
import React, { useState } from "react";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default UserTable;
