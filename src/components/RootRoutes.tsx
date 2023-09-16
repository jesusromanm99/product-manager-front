//import ListUserPage from "../pages/user/ListUserPage";
import ProtectedRoutes from "./ProtectedRoutes";
//import LoginRoutes from "./LoginRoutes";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
import CreateUserPage from "../pages/user/CreateUserPage";

function RootRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<CreateUserPage />} />
      <Route path='*' element={<ProtectedRoutes />} />
    </Routes>
  );
}

export default RootRoutes;
