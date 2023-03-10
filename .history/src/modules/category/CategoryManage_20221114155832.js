import { Button } from "components/button";
import DashboardHeading from "modules/dashboard/DashboardHeading";
import React from "react";

const CategoryManage = () => {
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="ghost" height="60px" to="/manage/add-category"></Button>
      </DashboardHeading>
    </div>
  );
};

export default CategoryManage;
