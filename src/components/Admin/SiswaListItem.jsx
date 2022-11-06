import React, { useState } from "react";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import ModalEditSiswa from "./ModalEditSiswa";

const SiswaListItem = () => {
	const [modalEditTrigger, setModalEditTrigger] = useState(false);

	const handleModalEditTrigger = () => {
		setModalEditTrigger(!modalEditTrigger);
	};

	return (
		<tbody>
			<tr className="border-b bg-white hover:bg-gray-50">
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
					1
				</th>
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-semibold text-gray-900">
					Bima Nugraha
				</th>
				<td className="py-4 px-6 font-medium">Laki-laki</td>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button onClick={handleModalEditTrigger}>
							<PencilIcon className="h-6 w-6 text-blue-600 transition duration-75 hover:text-blue-700" />
						</button>
						<button>
							<TrashIcon className="h-6 w-6 text-red-400 transition duration-75 hover:text-red-500" />
						</button>
					</div>

					{modalEditTrigger && <ModalEditSiswa handleModalEditTrigger={handleModalEditTrigger} />}
				</td>
			</tr>
		</tbody>
	);
};

export default SiswaListItem;
