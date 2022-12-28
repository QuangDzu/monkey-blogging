import DashboardHeading from "modules/dashboard/DashboardHeading";
import React from "react";
import { useForm } from "react-hook-form";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });

  return (
    <div>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
    </div>
  );
};

export default CategoryAddNew;
