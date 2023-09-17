import { Routes, Route, redirect } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
//import ListUserPage from "../pages/user/ListUserPage";
import CreateUserPage from "../pages/user/CreateUserPage";
import { useEffect } from "react";

function LoginRoutes() {
  console.log("ree");
  useEffect(() => {
    const session = localStorage.getItem("session");
    console.log("session", session);
    if (session) redirect("/users");
  }, []);
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<CreateUserPage />} />
    </Routes>
  );
}

export default LoginRoutes;
