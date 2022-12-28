import { Button } from "components/button";
import { Field, FieldCheckboxes } from "components/field";
import { Label } from "components/label";
import { Radio } from "components/checkbox";
import { useForm } from "react-hook-form";
import DashboardHeading from "modules/dashboard/DashboardHeading";
import React from "react";
import { Input } from "components/input";
import ImageUpload from "components/image/ImageUpload";
import { userStatus } from "utils/constants";

const UserAddNew = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    mode: "onChange",
    defaultValues: {},
  });
  const watchStatus = watch("status");
  const watchRole = watch("role");
  const handleCreateUser = (values) => {
    console.log(values);
  };

  return (
    <div>
      <DashboardHeading
        title="New user"
        desc="Add new user to system"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="w-[200px] h-[200px] mx-auto rounded-full  mb-10">
          <ImageUpload className="!rounded-full"></ImageUpload>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Fullname</Label>
            <Input
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              name="username"
              placeholder="Enter your username"
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              control={control}
              type="email"
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
              >
                Active
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.PENDING}
                value={userStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.BAN}
                value={userStatus.BAN}
              >
                Banned
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Role</Label>
            <FieldCheckboxes>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
              >
                Admin
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
              >
                Moderator
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
              >
                User
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button kind="primary" type="submit" className="mx-auto w-[200px]">
          Add new user
        </Button>
      </form>
    </div>
  );
};

export default UserAddNew;
