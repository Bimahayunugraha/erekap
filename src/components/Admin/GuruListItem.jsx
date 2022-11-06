import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { DeleteGuru, EditGuru } from "../../graphqls/typeDefs/guru.graphql";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import ModalEditGuru from "./ModalEditGuru";
import ModalDelete from "./ModalDelete";
import Swal from "sweetalert2";

const GuruListItem = ({ data }) => {
	const { id, no, nip, nama_depan, nama_belakang, jenis_kelamin, nomor_telepon } = data;

	const baseUpdate = {
		nama_depan: nama_depan,
		nama_belakang: nama_belakang,
		jenis_kelamin: jenis_kelamin,
		nomor_telepon: nomor_telepon,
	};

	const [modalEditTrigger, setModalEditTrigger] = useState(false);
	const [modaDeleteTrigger, setModaDeleteTrigger] = useState(false);
	const [update, setUpdate] = useState(baseUpdate);
	const [updateGuru] = useMutation(EditGuru, {
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Data guru berhasil diubah",
						showConfirmButton: false,
						timer: 1500,
						background: "#fefefe",
					}),
				1000
			);
		},
	});
	const [deleteGuru] = useMutation(DeleteGuru, {
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Data guru berhasil dihapus",
						showConfirmButton: false,
						timer: 1500,
						background: "#fefefe",
					}),
				1000
			);
		},
	});

	const guruUpdate = (editGuru) => {
		updateGuru({
			variables: editGuru,
		});
	};

	const handleDelete = (idx) => {
		deleteGuru({
			variables: { id: idx },
		});
		handleModalDeleteTrigger();
	};

	const handleUpdate = () => {
		const guruUpdated = { id, ...update };
		guruUpdate(guruUpdated);
		handleModalEditTrigger();
	};

	const handleChange = (e) => {
		setUpdate({ ...update, [e.target.name]: e.target.value });
	};

	const handleModalEditTrigger = () => {
		setModalEditTrigger(!modalEditTrigger);
	};

	const handleModalDeleteTrigger = () => {
		setModaDeleteTrigger(!modaDeleteTrigger);
	};

	return (
		<tbody>
			<tr className="border-b bg-white hover:bg-gray-50">
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-semibold text-gray-900 dark:text-white">
					{no}
				</th>
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-semibold text-gray-900 dark:text-white">
					{nama_depan} {nama_belakang}
				</th>
				<td className="py-4 px-6 font-medium">{nip}</td>
				<td className="py-4 px-6 font-medium">{jenis_kelamin}</td>
				<td className="py-4 px-6 font-medium">{nomor_telepon}</td>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button type="button" className="font-medium text-blue-600 hover:underline" onClick={handleModalEditTrigger}>
							<PencilIcon className="h-6 w-6 text-blue-600 transition duration-75 hover:text-blue-700" />
						</button>
						<button type="button" className="font-medium text-blue-600 hover:underline" onClick={handleModalDeleteTrigger}>
							<TrashIcon className="h-6 w-6 text-red-400 transition duration-75 hover:text-red-500" />
						</button>
					</div>
					{modalEditTrigger && (
						<ModalEditGuru handleModalEditTrigger={handleModalEditTrigger} update={update} handleUpdate={handleUpdate} handleChange={handleChange} />
					)}

					{modaDeleteTrigger && (
						<ModalDelete
							handleModalDeleteTrigger={handleModalDeleteTrigger}
							handleDeleteGuru={() => {
								handleDelete(id);
							}}
							guru
						/>
					)}
				</td>
			</tr>
		</tbody>
	);
};

export default GuruListItem;
