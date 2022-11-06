import React from "react";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PenilaianDetailItem from "../../components/Guru/PenilaianDetailItem";

const PenilaianDetailPage = () => {
	return (
		<div>
			<div className="flex items-center border-b border-gray-200 bg-white px-6 py-3">
				<Link to="/guru/penilaian" className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
					<ArrowLeftIcon className="h-5 w-5" />
				</Link>
				<h2 className="ml-3 text-base font-bold text-gray-800">
					Detail Pelajaran
					<span className="ml-1">Bahasa Indonesia</span>
				</h2>
			</div>
			<div className="pt-10 pb-16">
				<div className="container">
					<div className="w-full px-4">
						<div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
							<table className="whitespace-no-wrap w-full text-left text-sm text-gray-500">
								<thead>
									<tr className="w-full border-b border-gray-200 bg-blue-50 text-xs uppercase text-gray-700">
										<th scope="col" className="py-3 px-6">
											Nama Siswa
										</th>
										<th scope="col" className="py-3 px-6">
											Pelajaran Diampu
										</th>
										<th scope="col" className="py-3 px-6">
											Nilai
										</th>
										<th scope="col" className="py-3 px-6">
											Aksi
										</th>
									</tr>
								</thead>
								<PenilaianDetailItem />
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PenilaianDetailPage;
