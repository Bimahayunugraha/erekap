import React, { useState } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { AddGuruPelajaran, addSiswaPelajaranNilai, GetDetailPelajaranDiampu } from "../../graphqls/typeDefs/pelajaranDiampu.graphql";
import { SubscriptionMataPelajaran } from "../../graphqls/typeDefs/mataPelajaran.graphql";
import { SubscriptionSiswa } from "../../graphqls/typeDefs/siswa.graphql";
import { SubscriptionGuru } from "../../graphqls/typeDefs/guru.graphql";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const PelajaranDiampuInput = () => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	const { data: dataMataPelajaran } = useSubscription(SubscriptionMataPelajaran);
	const { data: dataGuru } = useSubscription(SubscriptionGuru);
	const { data: dataSiswa, loading: loadingDataSiswa } = useSubscription(SubscriptionSiswa);

	const [addGuruPelajaran, { error: errorGuruPelajaran }] = useMutation(AddGuruPelajaran);
	const [addSiswaPelajaran, { error: errorSiswaPelajaran }] = useMutation(addSiswaPelajaranNilai, {
		onCompleted: () => {
			navigate("/admin/data/pelajaran/diampu");
			Swal.fire({
				icon: "success",
				title: "Sukses menambahkan data",
				showConfirmButton: false,
				timer: 1500,
			});
		},
		refetchQueries: [GetDetailPelajaranDiampu],
	});

	if (errorGuruPelajaran || errorSiswaPelajaran) {
		return console.log({ errorGuruPelajaran });
	}

	const tambahGuruPelajaran = (newGuruPelajaran) => {
		addGuruPelajaran({
			variables: {
				objects: newGuruPelajaran,
			},
		});
	};

	const tambahSiswaPelajaran = (newSiswaPelajaran) => {
		addSiswaPelajaran({
			variables: {
				objects: newSiswaPelajaran,
			},
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const mata_pelajaran_id = Number(formData.get("mata_pelajaran_id"));
		const newGuruPelajaranData = [];
		const newSiswaPelajaranData = [];

		data.forEach(function (val) {
			if (val.guru_id) {
				newGuruPelajaranData.push({
					guru_id: val.guru_id,
					mata_pelajaran_id,
				});
			}

			if (val.siswa_id) {
				newSiswaPelajaranData.push({ siswa_id: val.siswa_id, mata_pelajaran_id });
			}
		});
		tambahGuruPelajaran(newGuruPelajaranData);
		tambahSiswaPelajaran(newSiswaPelajaranData);
		setData([]);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name !== "mata_pelajaran_id") {
			setData((state) => [...state, { [name]: Number(value) }]);
		}
	};

	return (
		<div className="h-full overflow-y-auto">
			<Helmet>
				<title>Tambah Pelajaran Diampu</title>
				<meta name="description" content="Penilaian siswa" />
			</Helmet>
			<div className="container mx-auto py-6 px-6">
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="mata_pelajaran_id" className="mb-2 block text-sm font-medium text-gray-900">
								<span className="block after:ml-1 after:text-red-500 after:content-['*']">Pelajaran</span>
							</label>
							<select
								id="mata_pelajaran_id"
								name="mata_pelajaran_id"
								className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
								onChange={handleChange}
								value={data.mata_pelajaran_id}>
								<option>Pilih pelajaran</option>
								{dataMataPelajaran?.erekap_mata_pelajaran_aggregate.nodes.map((item) => {
									return (
										<option key={item.id} value={item.id}>
											{item.nama_pelajaran}
										</option>
									);
								})}
							</select>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="guru_id" className="mb-2 block text-sm font-medium text-gray-900">
								<span className="block after:ml-1 after:text-red-500 after:content-['*']">Guru</span>
							</label>
							<select
								id="guru_id"
								name="guru_id"
								className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
								onChange={handleChange}
								value={data.guru_id}>
								<option>Pilih guru</option>
								{dataGuru?.erekap_guru_aggregate.nodes.map((item) => {
									return (
										<option key={item.id} value={item.id}>
											{item.nama_depan} {item.nama_belakang}
										</option>
									);
								})}
							</select>
						</div>
					</div>
					<h3 className="mb-2 mt-6 block text-sm font-medium text-gray-900">
						<span className="block after:ml-1 after:text-red-500 after:content-['*']">Siswa</span>
					</h3>
					{loadingDataSiswa ? (
						<div className="my-0 mx-auto flex items-center justify-center pt-5">
							<PulseLoader size={10} color="#2563eb" />
						</div>
					) : (
						<div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
							<table className="whitespace-no-wrap w-full text-left text-sm text-gray-500">
								<thead className="bg-blue-5 border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-700">
									<tr>
										<th scope="col" className="p-4">
											<div className="flex items-center">
												<label htmlFor="checkbox-all" className="sr-only">
													checkbox
												</label>
											</div>
										</th>
										<th scope="col" className="py-3 px-6">
											Nama Siswa
										</th>
									</tr>
								</thead>
								{dataSiswa?.erekap_siswa_aggregate.nodes.map((item) => {
									return (
										<tbody key={item.id}>
											<tr className="border-b bg-white hover:bg-gray-50">
												<td className="w-4 p-4">
													<div className="flex items-center">
														<input
															id="siswa_id"
															name="siswa_id"
															type="checkbox"
															className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
															onChange={handleChange}
															value={item.id}
															multiple
														/>
														<label htmlFor="siswa_id" className="sr-only">
															{item.nama_depan} {item.nama_belakang}
														</label>
													</div>
												</td>
												<th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
													{item.nama_depan} {item.nama_belakang}
												</th>
											</tr>
										</tbody>
									);
								})}
							</table>
						</div>
					)}
					<div className="flex items-center justify-center space-x-2 rounded-b border-t border-gray-200 p-6">
						<button
							type="submit"
							className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
							Simpan
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PelajaranDiampuInput;
