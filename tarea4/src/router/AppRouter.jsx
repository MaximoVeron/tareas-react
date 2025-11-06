import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
