import React from "react";
import { BookOpenIcon, IdentificationIcon, UserPlusIcon } from "@heroicons/react/24/outline";

const OverviewData = () => {
	return (
		<div className="container mx-auto py-6 px-6">
			<div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
				<div className="rounded-lg border bg-white p-4 shadow-sm">
					<div className="flex items-center space-x-4">
						<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 p-5">
							<span className="text-sm">
								<IdentificationIcon className="h-6 w-6 text-indigo-700" />
							</span>
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-semibold text-gray-900">Total Siswa</p>

							<p className="truncate text-sm font-medium text-gray-500">0</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg border bg-white p-4 shadow-sm">
					<div className="flex items-center space-x-4">
						<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 p-5">
							<span className="text-sm">
								<BookOpenIcon className="h-6 w-6 text-indigo-700" />
							</span>
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-semibold text-gray-900">Total Pelajaran</p>
							<p className="truncate text-sm font-medium text-gray-500">0</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg border bg-white p-4 shadow-sm">
					<div className="flex items-center space-x-4">
						<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 p-5">
							<span className="text-sm">
								<UserPlusIcon className="h-6 w-6 text-indigo-700" />
							</span>
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-semibold text-gray-900">Total Guru</p>
							<p className="truncate text-sm font-medium text-gray-500">0</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverviewData;
