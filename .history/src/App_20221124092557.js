import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import DashboardLayout from "modules/dashboard/DashboardLayout";
import PostManage from "modules/post/PostManage";
import PostAddNew from "modules/post/PostAddNew";
import CategoryAddNew from "modules/category/CategoryAddNew";
import UserAddNew from "modules/user/UserAddNew";
import UserProfile from "modules/user/UserProfile";
import PageNotFound from "pages/PageNotFound";
import CategoryManage from "modules/category/CategoryManage";
import UserManage from "modules/user/UserManage";
import CategoryUpdate from "modules/category/CategoryUpdate";
import UserUpdate from "modules/user/UserUpdate";
import PostUpdate from "modules/post/PostUpdate";
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const PostDetailsPage = React.lazy(() => import("./pages/PostDetailsPage"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div>
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            <Route
              path="/category/:slug"
              element={<CategoryPage></CategoryPage>}
            ></Route>{" "}
            <Route
              path="/:slug"
              element={<PostDetailsPage></PostDetailsPage>}
            ></Route>{" "}
            {/* Admin */}
            <Route element={<DashboardLayout></DashboardLayout>}>
              <Route
                path="/dashboard"
                element={<DashboardPage></DashboardPage>}
              ></Route>
              <Route
                path="/manage/posts"
                element={<PostManage></PostManage>}
              ></Route>
              <Route
                path="/manage/add-post"
                element={<PostAddNew></PostAddNew>}
              ></Route>
              <Route
                path="/manage/update-post"
                element={<PostUpdate></PostUpdate>}
              ></Route>
              <Route
                path="/manage/category"
                element={<CategoryManage></CategoryManage>}
              ></Route>
              <Route
                path="/manage/add-category"
                element={<CategoryAddNew></CategoryAddNew>}
              ></Route>
              <Route
                path="/manage/update-category"
                element={<CategoryUpdate></CategoryUpdate>}
              ></Route>
              <Route
                path="/manage/user"
                element={<UserManage></UserManage>}
              ></Route>
              <Route
                path="/manage/add-user"
                element={<UserAddNew></UserAddNew>}
              ></Route>
              <Route
                path="/manage/update-user"
                element={<UserUpdate></UserUpdate>}
              ></Route>
              <Route
                path="/profile"
                element={<UserProfile></UserProfile>}
              ></Route>
            </Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
