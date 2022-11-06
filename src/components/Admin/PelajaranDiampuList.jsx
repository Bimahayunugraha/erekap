import React from "react";
import { Link } from "react-router-dom";

import { PlusIcon } from "@heroicons/react/24/outline";
import PelajaranDiampuListItem from "./PelajaranDiampuListItem";

const PelajaranDiampuList = () => {
	return (
		<div className="container mx-auto py-6 px-2">
			<div className="flex flex-wrap">
				<div className="w-full px-4 lg:w-1/2 xl:w-1/5">
					<Link to="/admin/tambah/pelajaran">
						<div className="mb-10 cursor-pointer rounded-md border border-gray-100 p-10 text-center">
							<div className="inline-block items-center justify-center">
								<PlusIcon className="h-6 w-6 text-gray-600" />
							</div>
							<p className="text-xs font-medium leading-7 text-gray-600">Tambah pelajaran diampu</p>
						</div>
					</Link>
				</div>
				<div className="w-full px-4 lg:w-1/2 xl:w-1/5">
					<PelajaranDiampuListItem />
				</div>
			</div>
		</div>
	);
};

export default PelajaranDiampuList;
