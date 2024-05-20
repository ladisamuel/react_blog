import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../page/HomePage";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
// import { ToastContainer, toast } from 'react-toastify';
import MyForm from "../page/MyForm";
import EditPage from "../page/EditPage";
import BlogPage from "../page/BlogPage";
import { ToastContainer } from "react-toastify";

const Frame = () => {
  return (
    <div>
      <ToastContainer />

      <BrowserRouter>


        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<MyForm />} path="myform"/>
          <Route element={<BlogPage />} path="/blog_page/:id"/>
          <Route element={<EditPage />} path="/edit_item/:id"/>
        </Routes>

      </BrowserRouter>

      <Footer/>

      {/* <BlogPage /> */}
    </div>
  );
};

export default Frame;
