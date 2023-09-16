import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
function RootRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default RootRoutes;
