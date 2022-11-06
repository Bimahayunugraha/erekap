import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "@apollo/client";

import { GetSiswaPelajaranNilai } from "../../graphqls/typeDefs/pelajaranDiampu.graphql";
import PelajaranDiampuListItem from "./PelajaranDiampuListItem";
import { PlusIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { PulseLoader } from "react-spinners";

const PelajaranDiampuList = () => {
	const { data, loading } = useSubscription(GetSiswaPelajaranNilai);

	return (
		<div className="container mx-auto py-6 px-2">
			<div className="flex flex-wrap">
				<div className="w-full px-4 lg:w-1/2 xl:w-1/5">
					<Link to="/admin/tambah/pelajaran/diampu">
						<div className="mb-10 cursor-pointer rounded-md border border-gray-100 p-10 text-center">
							<div className="inline-block items-center justify-center">
								<PlusIcon className="h-6 w-6 text-gray-600" />
							</div>
							<p className="text-xs font-medium leading-7 text-gray-600">Tambah pelajaran diampu</p>
						</div>
					</Link>
				</div>
				{loading ? (
					<div className="my-0 mx-auto pt-5">
						<PulseLoader size={10} color="#2563eb" />
					</div>
				) : data?.erekap_siswa_pelajaran_nilai.length > 0 ? (
					data?.erekap_siswa_pelajaran_nilai.map((item) => (
						<div className="w-full px-4 lg:w-1/2 xl:w-1/5" key={item.id}>
							<PelajaranDiampuListItem data={item} />
						</div>
					))
				) : (
					<div className="w-full px-4 font-semibold text-gray-800 lg:w-1/2 xl:w-1/5">
						<div className="mb-10 rounded-md border border-gray-100 bg-white p-10 text-center shadow-sm hover:bg-gray-50">
							<div className="inline-block items-center justify-center">
								<InformationCircleIcon className="h-6 w-6 text-gray-600" />
							</div>
							<p className="text-xs font-semibold leading-7 text-gray-700">Data pelajaran diampu kosong</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default PelajaranDiampuList;
