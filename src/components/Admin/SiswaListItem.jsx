import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { DeleteSiswa, EditSiswa, GetSiswa } from "../../graphqls/typeDefs/siswa.graphql";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import ModalEditSiswa from "./ModalEditSiswa";
import ModalDelete from "./ModalDelete";
import Swal from "sweetalert2";

const SiswaListItem = ({ data }) => {
	const { id, nama_depan, nama_belakang, jenis_kelamin, no } = data;

	const baseUpdate = {
		nama_depan: nama_depan,
		nama_belakang: nama_belakang,
		jenis_kelamin: jenis_kelamin,
	};

	const [modalEditTrigger, setModalEditTrigger] = useState(false);
	const [modaDeleteTrigger, setModaDeleteTrigger] = useState(false);
	const [update, setUpdate] = useState(baseUpdate);
	const [updateSiswa] = useMutation(EditSiswa, {
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Data siswa berhasil diubah",
						showConfirmButton: false,
						timer: 1500,
						background: "#fefefe",
					}),
				1000
			);
		},
	});
	const [deleteSiswa] = useMutation(DeleteSiswa, {
		onError: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "error",
						title: "Data siswa tidak dapat dihapus",
						text: "Siswa terdapat di pelajaran diampu",
						showConfirmButton: false,
						timer: 2000,
						background: "#fefefe",
					}),
				1000
			);
		},
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Data siswa berhasil dihapus",
						showConfirmButton: false,
						timer: 1500,
						background: "#fefefe",
					}),
				1000
			);
		},
		refetchQueries: [GetSiswa],
	});

	const siswaUpdate = (editSiswa) => {
		updateSiswa({
			variables: editSiswa,
		});
	};

	const handleUpdate = () => {
		const userUpdated = { id, ...update };
		siswaUpdate(userUpdated);
		handleModalEditTrigger();
	};

	const handleDelete = (idx) => {
		deleteSiswa({
			variables: { id: idx },
		});
		handleModalDeleteTrigger();
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
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
					{no}
				</th>
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-semibold text-gray-900">
					{nama_depan} {nama_belakang}
				</th>
				<td className="py-4 px-6 font-medium">{jenis_kelamin}</td>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button onClick={handleModalEditTrigger}>
							<PencilIcon className="h-6 w-6 text-blue-600 transition duration-75 hover:text-blue-700" />
						</button>
						<button onClick={handleModalDeleteTrigger}>
							<TrashIcon className="h-6 w-6 text-red-400 transition duration-75 hover:text-red-500" />
						</button>
					</div>

					{modalEditTrigger && (
						<ModalEditSiswa handleModalEditTrigger={handleModalEditTrigger} update={update} handleUpdate={handleUpdate} handleChange={handleChange} />
					)}

					{modaDeleteTrigger && (
						<ModalDelete
							handleModalDeleteTrigger={handleModalDeleteTrigger}
							handleDeleteSiswa={() => {
								handleDelete(id);
							}}
							siswa
						/>
					)}
				</td>
			</tr>
		</tbody>
	);
};

export default SiswaListItem;
