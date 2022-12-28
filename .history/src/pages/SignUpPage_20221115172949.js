// import { Input } from "../components/input";
// import { Label } from "../components/label";
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { Field } from "../components/field";
// import { Button } from "../components/button";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { toast } from "react-toastify";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db } from "../firebase-app/firebase-config";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   setDoc,
// } from "firebase/firestore";
// import AuthenticationPage from "./AuthenticationPage";
// import InputPasswordToggle from "components/input/InputPasswordToggle";
// import slugify from "slugify";
// import { userRole, userStatus } from "utils/constants";

// const schema = yup.object({
//   fullname: yup.string().required("Please enter your full name"),
//   email: yup
//     .string()
//     .email("Please enter valid email address")
//     .required("Please enter your email address"),
//   password: yup
//     .string()
//     .min(8, "Your password must be at least 8 characters or greater")
//     .required("Please enter your password"),
// });

// const SignUpPage = () => {
//   const navigate = useNavigate();

//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isValid, isSubmitting },
//     watch,
//     reset,
//   } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

//   const handleSignUp = async (values) => {
//     if (!isValid) return;

//     await createUserWithEmailAndPassword(auth, values.email, values.password);
//     await updateProfile(auth.currentUser, {
//       displayName: values.fullname,
//       photoURL:
//         "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     });

//     await setDoc(doc(db, "users", auth.currentUser.uid), {
//       fullname: values.fullname,
//       email: values.email,
//       password: values.password,
//       username: slugify(values.fullname, { lower: true }),
//       avatar:
//         "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       status: userStatus.ACTIVE,
//       role: userRole.USER,
//       createdAt: serverTimestamp(),
//     });
//     toast.success("Create user successfully!!!", { pauseOnHover: false });
//     navigate("/");

//     // return new Promise((resolve) => {
//     //   if (!isValid) return;
//     //   setTimeout(() => {
//     //     resolve();
//     //     reset({
//     //       fullname: "",
//     //       email: "",
//     //       password: "",
//     //     });
//     //   }, 5000);
//     // });
//   };

//   // useEffect(() => {
//   //   const arrErrors = Object.values(errors);
//   //   if (arrErrors.length > 0) {
//   //     toast.error(arrErrors[0]?.message, {
//   //       pauseOnHover: false,
//   //       delay: 0,
//   //     });
//   //   }
//   // }, [errors]);
//   useEffect(() => {
//     const arrErroes = Object.values(errors);
//     if (arrErroes.length > 0) {
//       toast.error(arrErroes[0]?.message, {
//         pauseOnHover: false,
//         delay: 0,
//       });
//     }
//   }, [errors]);

//   return (
//     <AuthenticationPage>
//       <form
//         className="form"
//         onClick={handleSubmit(handleSignUp)}
//         autoComplete="off"
//       >
//         <Field>
//           <Label htmlFor="fullname">Fullname</Label>
//           <Input
//             type="text"
//             name="fullname"
//             placeholder="Enter your fullname"
//             control={control}
//           />
//         </Field>
//         <Field>
//           <Label htmlFor="email">Email</Label>
//           <Input
//             type="text"
//             name="email"
//             placeholder="Enter your Email"
//             control={control}
//           />
//         </Field>
//         <Field>
//           <Label htmlFor="password">Password</Label>
//           <InputPasswordToggle control={control}></InputPasswordToggle>
//         </Field>
//         <div className="have-account">
//           Do you already have an account? <NavLink to="/sign-in">Login</NavLink>
//         </div>
//         <Button
//           type="submit"
//           className="w-full max-w-[300px] mx-auto"
//           isLoading={isSubmitting}
//           disabled={isSubmitting}
//         >
//           Sign Up
//         </Button>
//       </form>
//     </AuthenticationPage>
//   );
// };

// export default SignUpPage;

import slugify from "slugify";
import React, { useEffect } from "react";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { Field } from "components/field";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Button } from "components/button";
import { auth, db } from "firebase-app/firebase-config";
import { userRole, userStatus } from "utils/constants";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
      photoURL:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    });

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      username: slugify(values.fullname, { lower: true }),
      avatar:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: userStatus.ACTIVE,
      role: userRole.USER,
      createdAt: serverTimestamp(),
    });

    toast.success("Register successfully!!!");
    navigate("/");
  };
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  }, []);
  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignUp)}
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
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <div className="have-account">
          You already have an account? <NavLink to={"/sign-in"}>Login</NavLink>{" "}
        </div>
        <Button
          type="submit"
          className="w-full max-w-[300px] mx-auto"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
