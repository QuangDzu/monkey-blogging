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
      <DashboardHeading></DashboardHeading>
    </div>
  );
};

export default CategoryAddNew;
