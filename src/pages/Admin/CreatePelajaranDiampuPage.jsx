import React from "react";
import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CreatePelajaranDiampuPage = () => {
	return (
		<div>
			<div className="flex items-center border-b border-gray-200 bg-white px-6 py-3">
				<Link to="/admin/data/pelajaran/diampu" className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
					<ArrowLeftIcon className="h-5 w-5" />
				</Link>
				<h2 className="ml-3 text-base font-bold text-gray-800">Tambah Pelajaran Diampu</h2>
			</div>
		</div>
	);
};

export default CreatePelajaranDiampuPage;
