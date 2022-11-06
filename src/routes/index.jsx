import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/Guest/LandingPage";
import LoginPage from "../pages/General/LoginPage";
import NotFound from "../pages/General/NotFoundPage";
import RegisterPage from "../pages/General/RegisterPage";
import Layout from "../components/General/Layout";
import DashboardPage from "../pages/General/DashboardPage";
import SiswaPage from "../pages/Admin/SiswaPage";
import MataPelajaranPage from "../pages/Admin/MataPelajaranPage";
import GuruPage from "../pages/Admin/GuruPage";
import PelajaranDiampuPage from "../pages/Admin/PelajaranDiampuPage";
import CreatePelajaranDiampuPage from "../pages/Admin/CreatePelajaranDiampuPage";

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
						<Route path="/admin/data/siswa" element={<SiswaPage />} />
						<Route path="/admin/data/mata-pelajaran" element={<MataPelajaranPage />} />
						<Route path="/admin/data/guru" element={<GuruPage />} />
						<Route path="/admin/data/pelajaran/diampu" element={<PelajaranDiampuPage />} />
						<Route path="/admin/tambah/pelajaran/diampu" element={<CreatePelajaranDiampuPage />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default SetupRouter;
