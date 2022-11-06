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
import PelajaranDiampuDetailPage from "../pages/Admin/PelajaranDiampuDetailPage";
import PenilaianPage from "../pages/Guru/PenilaianPage";
import PenilaianDetailPage from "../pages/Guru/PenilaianDetailPage";
import PrivateRouter from "./PrivateRouter";
import ProtectedRouter from "./ProtectedRouter";
import { Helmet } from "react-helmet";

const SetupRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Helmet>
					<title></title>
					<meta name="description" content="Melakukan rekap nilai" />
					<meta
						name="keywords"
						content="Dashboard Admin, Dashboard Guru, Data Siswa, Data Mata Pelajaran, Data Guru, Data Pelajaran Diampu, Penilaian, Tambah Pelajaran Diampu"
					/>
				</Helmet>
				<Routes>
					<Route element={<ProtectedRouter />}>
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
					</Route>
					<Route element={<PrivateRouter />}>
						<Route path="/" element={<Layout />}>
							<Route path="/dashboard" element={<DashboardPage />} />
							<Route path="/admin/data/siswa" element={<SiswaPage />} />
							<Route path="/admin/data/mata-pelajaran" element={<MataPelajaranPage />} />
							<Route path="/admin/data/guru" element={<GuruPage />} />
							<Route path="/admin/data/pelajaran/diampu" element={<PelajaranDiampuPage />} />
							<Route path="/admin/tambah/pelajaran/diampu" element={<CreatePelajaranDiampuPage />} />
							<Route path="/admin/detail/pelajaran/diampu/:mata_pelajaran_id" element={<PelajaranDiampuDetailPage />} />
							<Route path="/guru/penilaian" element={<PenilaianPage />} />
							<Route path="/guru/detail/penilaian/pelajaran/:mata_pelajaran_id" element={<PenilaianDetailPage />} />
						</Route>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default SetupRouter;
