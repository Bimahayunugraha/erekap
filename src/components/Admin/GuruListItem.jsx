import React, { useState } from "react";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import ModalEditGuru from "./ModalEditGuru";

const GuruListItem = () => {
	const [modalEditTrigger, setModalEditTrigger] = useState(false);

	const handleModalEditTrigger = () => {
		setModalEditTrigger(!modalEditTrigger);
	};

	return (
		<tbody>
			<tr className="border-b bg-white hover:bg-gray-50">
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-semibold text-gray-900 dark:text-white">
					Puji Astudi S.Pd.
				</th>
				<td className="py-4 px-6 font-medium">197689019210212</td>
				<td className="py-4 px-6 font-medium">Perempuan</td>
				<td className="py-4 px-6 font-medium">081901901901</td>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button type="button" className="font-medium text-blue-600 hover:underline" onClick={handleModalEditTrigger}>
							<PencilIcon className="h-6 w-6 text-blue-600 transition duration-75 hover:text-blue-700" />
						</button>
						<button type="button" className="font-medium text-blue-600 hover:underline">
							<TrashIcon className="h-6 w-6 text-red-400 transition duration-75 hover:text-red-500" />
						</button>
					</div>
					{modalEditTrigger && <ModalEditGuru handleModalEditTrigger={handleModalEditTrigger} />}
				</td>
			</tr>
		</tbody>
	);
};

export default GuruListItem;
