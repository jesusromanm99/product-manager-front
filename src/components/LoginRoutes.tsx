import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
//import ListUserPage from "../pages/user/ListUserPage";
import CreateUserPage from "../pages/user/CreateUserPage";

function LoginRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<CreateUserPage />} />
    </Routes>
  );
}

export default LoginRoutes;
