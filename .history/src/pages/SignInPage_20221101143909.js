import React, { useEffect } from "react";
import { useAuth } from "../contexts/auth-context";

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate()
  useEffect(() => {
if(!userInfo.email) 
  },[])
  return <div></div>;
};

export default SignInPage;
