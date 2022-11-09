import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { TrashIcon } from "@heroicons/react/24/outline";
import ModalDelete from "./ModalDelete";
import { DeleteMataPelajaran } from "../../graphqls/typeDefs/mataPelajaran.graphql";
import Swal from "sweetalert2";

const MataPelajaranListItem = ({ data }) => {
	const { id, no } = data;

	const [modaDeleteTrigger, setModaDeleteTrigger] = useState(false);
	const [deleteMataPelajaran] = useMutation(DeleteMataPelajaran, {
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Data mata pelajaran berhasil dihapus",
						showConfirmButton: false,
						timer: 1500,
						background: "#fefefe",
					}),
				1000
			);
		},
	});

	const handleDelete = (idx) => {
		deleteMataPelajaran({
			variables: { id: idx },
		});

		handleModalDeleteTrigger();
	};

	const handleModalDeleteTrigger = () => {
		setModaDeleteTrigger(!modaDeleteTrigger);
	};

	return (
		<tbody>
			<tr className="border-b bg-white hover:bg-gray-50">
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-semibold text-gray-900">
					{no}
				</th>
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-semibold text-gray-900">
					{data.nama_pelajaran}
				</th>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button type="button" className="font-medium text-blue-600 hover:underline" onClick={handleModalDeleteTrigger}>
							<TrashIcon className="h-6 w-6 text-red-400 transition duration-75 hover:text-red-500" />
						</button>
					</div>
					{modaDeleteTrigger && (
						<ModalDelete
							handleModalDeleteTrigger={handleModalDeleteTrigger}
							handleDeleteMataPelajaran={() => {
								handleDelete(id);
							}}
							mataPelajaran
						/>
					)}
				</td>
			</tr>
		</tbody>
	);
};

export default MataPelajaranListItem;
