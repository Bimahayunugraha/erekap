import React from "react";
import { useQuery } from "@apollo/client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { GetDetailPelajaranDiampu } from "../../graphqls/typeDefs/pelajaranDiampu.graphql";
import { Link, useParams } from "react-router-dom";
import PelajaranDiampuDetailList from "../../components/Admin/PelajaranDiampuDetailList";
import { PulseLoader } from "react-spinners";

const PelajaranDiampuDetailPage = () => {
	const { mata_pelajaran_id } = useParams();

	const { data, loading } = useQuery(GetDetailPelajaranDiampu, {
		variables: {
			siswa_pelajaran: mata_pelajaran_id,
			guru_pelajaran: mata_pelajaran_id,
		},
	});

	return (
		<div>
			<div className="flex items-center border-b border-gray-200 bg-white px-6 py-3">
				<Link to="/admin/data/pelajaran/diampu" className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
					<ArrowLeftIcon className="h-5 w-5" />
				</Link>
				<h2 className="ml-3 text-base font-bold text-gray-800">Detail Pelajaran Diampu</h2>
			</div>
			<div className="container">
				{loading ? (
					<div className="my-0 mx-auto flex items-center justify-center pt-5">
						<PulseLoader size={10} color="#2563eb" />
					</div>
				) : (
					<PelajaranDiampuDetailList
						key={data?.erekap_guru_pelajaran[0].id}
						dataGuru={data?.erekap_guru_pelajaran[0]}
						dataSiswa={data?.erekap_siswa_pelajaran_nilai}
						loading={loading}
					/>
				)}
			</div>
		</div>
	);
};

export default PelajaranDiampuDetailPage;
