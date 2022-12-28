import React from "react";

const InputPasswordToggle = () => {
  return (
    <Input
      type={togglePassword ? "text" : "password"}
      name="password"
      placeholder="Enter your Password"
      control={control}
    >
      {!togglePassword ? (
        <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
      ) : (
        <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
      )}
    </Input>
  );
};

export default InputPasswordToggle;
