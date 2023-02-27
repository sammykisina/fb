import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Explore = lazy(() => import("../pages/Explore"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Profile = lazy(() => import("../pages/Profile"));
const Reels = lazy(() => import("../pages/Reels"));
const Shop = lazy(() => import("../pages/Shop"));
const Post = lazy(() => import("../pages/posts/Post"));
const Login = lazy(() => import("../pages/auth/Login"));

import { Route, Routes } from "react-router-dom";
import { Loading } from "@/components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/explore"
        element={
          <Suspense fallback={<Loading />}>
            <Explore />
          </Suspense>
        }
      />
      <Route
        path="/reels"
        element={
          <Suspense fallback={<Loading />}>
            <Reels />
          </Suspense>
        }
      />
      <Route
        path="shop"
        element={
          <Suspense fallback={<Loading />}>
            <Shop />
          </Suspense>
        }
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="/posts/:id"
        element={
          <Suspense fallback={<Loading />}>
            <Post />
          </Suspense>
        }
      />
      <Route
        path="/auth/login"
        element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
