import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
//import ListUserPage from "../pages/user/ListUserPage";
import CreateUserPage from "../pages/user/CreateUserPage";
import ListUserPage from "../pages/user/ListUserPage";
function RootRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<CreateUserPage />} />
      <Route path='/users' element={<ListUserPage />} />
    </Routes>
  );
}

export default RootRoutes;
