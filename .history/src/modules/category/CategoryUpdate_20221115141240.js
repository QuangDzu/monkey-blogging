import DashboardHeading from "modules/dashboard/DashboardHeading";
import React from "react";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  console.log(categoryId);
  if (!categoryId) return null;

  return (
    <div>
      <DashboardHeading
        title="Update category"
        desc={`Update your category id: ${categoryId}`}
      ></DashboardHeading>
    </div>
  );
};

export default CategoryUpdate;
