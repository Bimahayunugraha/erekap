import React from "react";

const PelajaranDiampuDetailList = () => {
	return (
		<div className="container mx-auto py-6 px-6">
			<div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100">
				<h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white lg:text-xl">Bahasa Indonesia</h5>
				<h6 className="mt-3 mb-2 text-sm font-medium text-gray-600 lg:text-base">Guru</h6>
				<div className="flex items-center space-x-4">
					<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 p-1 ring-2 ring-gray-300">
						<span className="text-sm">PA</span>
					</div>
					<div className="min-w-0 flex-1">
						<p className="text-sm font-medium text-gray-900">Puji Astuti S.Pd.</p>
					</div>
				</div>
			</div>
			<div className="mt-4 rounded-md border border-dashed border-gray-100 p-5">
				<div className="grid grid-cols-2 gap-x-2 md:mb-0 md:grid-cols-3 lg:mb-0 xl:grid-cols-6">
					<div className="mb-4 flex flex-col items-center">
						<div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 p-1 ring-2 ring-gray-300 lg:h-8 lg:w-8 ">
							<span className="text-xs md:text-xs lg:text-sm">BN</span>
						</div>
						<div className="mt-3">
							<p className="text-[10px] font-medium text-gray-900 md:text-xs lg:text-xs xl:text-sm">Bima Nugraha</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PelajaranDiampuDetailList;
