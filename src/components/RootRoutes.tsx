import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
//import ListUserPage from "../pages/user/ListUserPage";
import CreateUserPage from "../pages/user/CreateUserPage";
import ListUserPage from "../pages/user/ListUserPage";
import ProductListPage from "../pages/product/ProductListPage";
import EditProductPage from "../pages/product/EditProductPage";
function RootRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<CreateUserPage />} />
      <Route path='/users' element={<ListUserPage />} />
      <Route path='/products' element={<ProductListPage />} />
      <Route path='/products/:id' element={<EditProductPage />} />
    </Routes>
  );
}

export default RootRoutes;
