import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { handleSubmit, control } = useForm({});
  //   const { userInfo } = useAuth();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!userInfo.email) navigate("/sign-up");
  //     else navigate("/");
  //   }, [userInfo]);
  return (
    <AuthenticationPage>
      <form
        className="form"
        onClick={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Enter your Email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your Password"
            control={control}
          >
            {/* {!togglePassword ? ( */}
            <IconEyeClose
            // onClick={() => setTogglePassword(true)}
            ></IconEyeClose>
            {/* ) : ( */}
            <IconEyeOpen
            // onClick={() => setTogglePassword(false)}
            ></IconEyeOpen>
            {/* )} */}
          </Input>
        </Field>
        <Button type="submit" style={{ maxWidth: 300, margin: "0 auto" }}>
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
