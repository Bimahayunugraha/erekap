import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ModalInputNilai from "./ModalInputNilai";
import { EditSiswaPelajaranNilai } from "../../graphqls/typeDefs/pelajaranDiampu.graphql";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const PenilaianDetailItem = ({ data }) => {
	const { id, no, nilai } = data;
	const baseUpdate = {
		nilai: nilai,
	};

	const [inputNilaiModalTrigger, setInputNilaiModalTrigger] = useState(false);
	const [update, setUpdate] = useState(baseUpdate);
	const [updateSiswaPelajaranNilai] = useMutation(EditSiswaPelajaranNilai, {
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Nilai berhasil dimasukkan",
						showConfirmButton: false,
						timer: 1500,
					}),
				1000
			);
		},
	});

	const siswaPelajaranNilaiUpdate = (editSiswaPelajaranNilai) => {
		updateSiswaPelajaranNilai({
			variables: editSiswaPelajaranNilai,
		});
	};

	const handleUpdate = () => {
		const siswaPelajaranNilaiUpdated = { id, ...update };
		siswaPelajaranNilaiUpdate(siswaPelajaranNilaiUpdated);
		handleInputNilaiModalTrigger();
	};

	const handleChange = (e) => {
		setUpdate({ ...update, [e.target.name]: e.target.value });
	};

	const handleInputNilaiModalTrigger = () => {
		setInputNilaiModalTrigger(!inputNilaiModalTrigger);
	};

	return (
		<tbody>
			<Helmet>
				<title>{`Detail Penilaian Pelajaran - ${data.mata_pelajaran.nama_pelajaran}`}</title>
				<meta name="description" content="Penilaian siswa" />
			</Helmet>
			<tr className="border-b bg-white hover:bg-gray-50">
				<td scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
					{no}
				</td>
				<td scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
					{data.siswa.nama_depan} {data.siswa.nama_belakang}
				</td>
				<td className="py-4 px-6">{data.mata_pelajaran.nama_pelajaran}</td>
				<td className="py-4 px-6">{nilai}</td>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button onClick={handleInputNilaiModalTrigger}>
							<PlusCircleIcon className="h-6 w-6 text-blue-600 transition duration-75 hover:text-blue-700" />
						</button>
					</div>
					{inputNilaiModalTrigger && (
						<ModalInputNilai
							handleInputNilaiModalTrigger={handleInputNilaiModalTrigger}
							update={update}
							handleUpdate={handleUpdate}
							handleChange={handleChange}
						/>
					)}
				</td>
			</tr>
		</tbody>
	);
};

export default PenilaianDetailItem;
