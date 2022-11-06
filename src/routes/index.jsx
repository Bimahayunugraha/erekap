import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/Guest/LandingPage";
import LoginPage from "../pages/General/LoginPage";
import NotFound from "../pages/General/NotFoundPage";
import RegisterPage from "../pages/General/RegisterPage";
import Layout from "../components/General/Layout";
import DashboardPage from "../pages/General/DashboardPage";
import SiswaPage from "../pages/Admin/SiswaPage";

const SetupRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/" element={<Layout />}>
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route path="/admin/siswa" element={<SiswaPage />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default SetupRouter;
