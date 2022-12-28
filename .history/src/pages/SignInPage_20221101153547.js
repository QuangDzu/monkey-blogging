import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Field } from "../components/field";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Input } from "../components/input";
import { Label } from "../components/label";
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
      <form className="form" onClick={handleSubmit()} autoComplete="off">
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email address"
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
