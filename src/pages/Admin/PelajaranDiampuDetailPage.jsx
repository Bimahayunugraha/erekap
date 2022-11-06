import React from "react";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const PelajaranDiampuDetailPage = () => {
	return (
		<div>
			<div className="flex items-center border-b border-gray-200 bg-white px-6 py-3">
				<Link to="/admin/data/pelajaran/diampu" className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
					<ArrowLeftIcon className="h-5 w-5" />
				</Link>
				<h2 className="ml-3 text-base font-bold text-gray-800">Detail Pelajaran Diampu</h2>
			</div>
			<div className="container"></div>
		</div>
	);
};

export default PelajaranDiampuDetailPage;
