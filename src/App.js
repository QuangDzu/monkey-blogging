import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import React, { Suspense } from "react";

// pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const PostDetailsPage = React.lazy(() => import("./pages/PostDetailsPage"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
// modules
const DashboardLayout = React.lazy(() =>
  import("modules/dashboard/DashboardLayout")
);
const PostManage = React.lazy(() => import("modules/post/PostManage"));
const PostAddNew = React.lazy(() => import("modules/post/PostAddNew"));
const CategoryAddNew = React.lazy(() =>
  import("modules/category/CategoryAddNew")
);
const UserAddNew = React.lazy(() => import("modules/user/UserAddNew"));
const UserProfile = React.lazy(() => import("modules/user/UserProfile"));
const CategoryManage = React.lazy(() =>
  import("modules/category/CategoryManage")
);
const UserManage = React.lazy(() => import("modules/user/UserManage"));
const CategoryUpdate = React.lazy(() =>
  import("modules/category/CategoryUpdate")
);
const UserUpdate = React.lazy(() => import("modules/user/UserUpdate"));
const PostUpdate = React.lazy(() => import("modules/post/PostUpdate"));

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
                element={<CategoryManage></CategoryManage>}
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
