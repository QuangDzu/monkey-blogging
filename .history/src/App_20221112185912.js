import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import NotPoundPage from "pages/NotPoundPage";
import PostDetailsPage from "pages/PostDetailsPage";
import DashboardLayout from "modules/dashboard/DashboardLayout";
import DashboardPage from "pages/DashboardPage";
import PostManage from "modules/post/PostManage";
import PostAddNew from "modules/post/PostAddNew";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route
            path="/:slug"
            element={<PostDetailsPage></PostDetailsPage>}
          ></Route>{" "}
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/dashboard"
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route
              path="/manage/post"
              element={<PostManage></PostManage>}
            ></Route>
            <Route
              path="/manage/add-post"
              element={<PostAddNew></PostAddNew>}
            ></Route>
          </Route>
          <Route
            path="/manage/add-category"
            element={<CategoryAddNew></CategoryAddNew>}
          ></Route>
          <Route
            path="/manage/add-user"
            element={<UserAddNew></UserAddNew>}
          ></Route>
          <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
          <Route path="*" element={<NotPoundPage></NotPoundPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
