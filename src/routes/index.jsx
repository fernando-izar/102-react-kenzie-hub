import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";

const MainRoutes = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUser={setUser} />}></Route>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default MainRoutes;
