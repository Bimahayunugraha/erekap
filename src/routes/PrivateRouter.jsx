import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/auth";

export default function PrivateRouter() {
	if (!Auth.isAuthorization()) {
		return <Navigate to="/login" replace />;
	}
	return <Outlet />;
}
