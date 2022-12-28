import DashboardHeading from "modules/dashboard/DashboardHeading";
import React from "react";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  if (!categoryId) return null;
  return (
    <div>
      <DashboardHeading></DashboardHeading>
    </div>
  );
};

export default CategoryUpdate;
