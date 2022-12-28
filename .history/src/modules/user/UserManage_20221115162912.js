import DashboardHeading from "modules/dashboard/DashboardHeading";
import React from "react";

const UserManage = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <DashboardHeading
        title="Users"
        desc="Manage your user"
      ></DashboardHeading>
    </div>
  );
};

export default UserManage;
