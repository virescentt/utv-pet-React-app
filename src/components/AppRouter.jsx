import React, { useContext } from "react";
import Posts from "../pages/Posts";
import About from "../pages/About";
import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return
  }
  
  return isAuth ? (
    <Routes>
      <Route index element={<Navigate to="/posts" replace />} />
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      <Route index element={<Navigate to="/login" replace />} />
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
