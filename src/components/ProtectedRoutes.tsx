import React from "react";
import { Route, Routes } from "react-router-dom";
import ListUserPage from "../pages/user/ListUserPage";
import ProductListPage from "../pages/product/ProductListPage";
import EditProductPage from "../pages/product/EditProductPage";
import NavBar from "./NavBar";

function ProtectedRoutes() {
  return (
    <NavBar>
      <Routes>
        <Route path='/users' element={<ListUserPage />} />
        <Route path='/products' element={<ProductListPage />} />
        <Route path='/products/:id' element={<EditProductPage />} />
      </Routes>
    </NavBar>
  );
}

export default ProtectedRoutes;
