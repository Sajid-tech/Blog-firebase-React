import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";

import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/FirebaseConfig";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route
            path="/adminlogin"
            element={
              user ? <Navigate to={`/dashboard/${user.uid}`} /> : <AdminLogin />
            }
          />
          <Route
            path={`/dashboard/:userId`}
            element={user ? <Dashboard /> : <Navigate to="/adminlogin" />}
          />
          <Route path={`/createblog/:userId`} element={<CreateBlog />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
