import React from "react";

import imgAdmin from "../../assets/img/png/img-admin.png";
import OverviewData from "../../components/Admin/OverviewData";

const DashboardPage = () => {
	return (
		<div>
			<div>
				<div className="flex items-center border-b border-gray-200 bg-white px-6 py-3">
					<h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
				</div>
				<div className="container mx-auto py-4 px-6">
					<div className="rounded-lg bg-white p-6 shadow">
						<div className="md:flex">
							<div className="mb-8 text-center sm:text-center md:mb-0 md:w-full md:text-start lg:text-start xl:text-start">
								<h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 md:text-2xl">Selamat Datang Kembali</h2>
								<p className="mb-2 text-lg font-medium text-gray-600"></p>
							</div>
							<div className="md:w-full">
								<img src={imgAdmin} alt="image admin" className="mx-auto h-48 w-64 object-cover" />
							</div>
						</div>
					</div>
				</div>
				<OverviewData />
			</div>
		</div>
	);
};

export default DashboardPage;
