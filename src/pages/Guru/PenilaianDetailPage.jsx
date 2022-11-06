import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSubscription } from "@apollo/client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import PenilaianDetailItem from "../../components/Guru/PenilaianDetailItem";
import { PulseLoader } from "react-spinners";
import { SubscriptionSiswaPelajaranNilai } from "../../graphqls/typeDefs/pelajaranDiampu.graphql";

const PenilaianDetailPage = () => {
	const { mata_pelajaran_id } = useParams();

	const { data, loading } = useSubscription(SubscriptionSiswaPelajaranNilai, {
		variables: {
			mata_pelajaran_id: mata_pelajaran_id,
		},
	});

	return (
		<div>
			<div className="flex items-center border-b border-gray-200 bg-white px-6 py-3">
				<Link to="/guru/penilaian" className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
					<ArrowLeftIcon className="h-5 w-5" />
				</Link>
				<h2 className="ml-3 text-base font-bold text-gray-800">
					Detail Pelajaran
					<span className="ml-1">
						{loading ? <PulseLoader size={10} color="#2563eb" /> : data?.erekap_siswa_pelajaran_nilai[0].mata_pelajaran.nama_pelajaran}
					</span>
				</h2>
			</div>
			<div className="pt-10 pb-16">
				<div className="container">
					{loading ? (
						<div className="my-0 mx-auto flex items-center justify-center pt-5">
							<PulseLoader size={10} color="#2563eb" />
						</div>
					) : (
						<div className="w-full px-4">
							<div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
								<table className="whitespace-no-wrap w-full text-left text-sm text-gray-500">
									<thead>
										<tr className="w-full border-b border-gray-200 bg-blue-50 text-xs uppercase text-gray-700">
											<th scope="col" className="py-3 px-6">
												No
											</th>
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
									{data?.erekap_siswa_pelajaran_nilai.map((item, i) => (
										<PenilaianDetailItem key={item.id} data={{ ...item, no: i + 1 }} />
									))}
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PenilaianDetailPage;
