import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { CommonRoutes } from "./common.routes";

export function AppRoutes() {
  const { token } = useAuth();

  return (
    <BrowserRouter>{!token ? <AuthRoutes /> : <CommonRoutes />}</BrowserRouter>
  );
}
