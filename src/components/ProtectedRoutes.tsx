import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ListUserPage from "../pages/user/ListUserPage";
import ProductListPage from "../pages/product/ProductListPage";
import EditProductPage from "../pages/product/EditProductPage";
import NavBar from "./NavBar";
import CreateProductPage from "../pages/product/CreateProductPage";

function ProtectedRoutes() {
  useEffect(() => {
    const session = localStorage.getItem("session");

    console.log("session----", session);
  }, []);
  return (
    <NavBar>
      <Routes>
        <Route path='/' element={<Navigate to={"/users"} />} />

        <Route path='/users' element={<ListUserPage />} />
        <Route path='/products' element={<ProductListPage />} />
        <Route path='/products/create' element={<CreateProductPage />} />

        <Route path='/products/:id' element={<EditProductPage />} />
      </Routes>
    </NavBar>
  );
}

export default ProtectedRoutes;
