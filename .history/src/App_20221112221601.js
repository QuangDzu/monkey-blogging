import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "pages/PostDetailsPage";
import DashboardLayout from "modules/dashboard/DashboardLayout";
import DashboardPage from "pages/DashboardPage";
import PostManage from "modules/post/PostManage";
import PostAddNew from "modules/post/PostAddNew";
import CategoryAddNew from "modules/category/CategoryAddNew";
import UserAddNew from "modules/user/UserAddNew";
import UserProfile from "modules/user/UserProfile";
import PageNotFound from "pages/PageNotFound";

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
          {/* Admin */}
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
            <Route
              path="/manage/add-category"
              element={<CategoryAddNew></CategoryAddNew>}
            ></Route>
            <Route
              path="/manage/add-user"
              element={<UserAddNew></UserAddNew>}
            ></Route>
            <Route
              path="/profile"
              element={<UserProfile></UserProfile>}
            ></Route>
          </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
