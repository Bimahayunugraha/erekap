import React from "react";
import PenilaianList from "../../components/Guru/PenilaianList";

const PenilaianPage = () => {
	return (
		<div>
			<div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
				<h2 className="text-xl font-bold text-gray-800">Data Penilaian</h2>
			</div>
			<PenilaianList />
		</div>
	);
};

export default PenilaianPage;
