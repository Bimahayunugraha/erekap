import React from "react";
import { Helmet } from "react-helmet";
import PelajaranDiampuList from "../../components/Admin/PelajaranDiampuList";

const PelajaranDiampuPage = () => {
	return (
		<div>
			<Helmet>
				<title>Data Pelajaran Diampu</title>
				<meta name="description" content="Penilaian siswa" />
			</Helmet>
			<div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
				<h2 className="text-xl font-bold text-gray-800">Data Pelajaran Diampu</h2>
			</div>
			<PelajaranDiampuList />
		</div>
	);
};

export default PelajaranDiampuPage;
