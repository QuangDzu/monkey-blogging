import DashboardHeading from "modules/dashboard/DashboardHeading";
import React from "react";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  return (
    <div>
      <DashboardHeading></DashboardHeading>
    </div>
  );
};

export default CategoryUpdate;
