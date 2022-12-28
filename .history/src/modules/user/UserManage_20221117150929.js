import { Button } from "components/button";
import DashboardHeading from "modules/dashboard/DashboardHeading";
import React, { useState } from "react";
import UserTable from "./UserTable";

const UserManage = () => {
  return (
    <div>
      <DashboardHeading
        title="Users"
        desc="Manage your user"
      ></DashboardHeading>
      <div className="mt-10 text-center">
        {/* <Pagination></Pagination> */}
        <Button kind="ghost" className="mx-auto w-[200px]">
          See more+
        </Button>
      </div>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
