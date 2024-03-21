import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostIdPage from "../../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route exact path="/post/:id" element={<PostIdPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
