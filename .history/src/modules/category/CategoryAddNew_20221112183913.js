import React from "react";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });
  return <div></div>;
};

export default CategoryAddNew;
