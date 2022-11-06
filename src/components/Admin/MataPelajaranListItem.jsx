import React, { useState } from "react";

import { TrashIcon } from "@heroicons/react/24/outline";

const MataPelajaranListItem = () => {
	const [modaDeleteTrigger, setModaDeleteTrigger] = useState(false);

	const handleModalDeleteTrigger = () => {
		setModaDeleteTrigger(!modaDeleteTrigger);
	};

	return (
		<tbody>
			<tr className="border-b bg-white hover:bg-gray-50">
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
					Bahasa Indonesia
				</th>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button type="button" className="font-medium text-blue-600 hover:underline" onClick={handleModalDeleteTrigger}>
							<TrashIcon className="h-6 w-6 text-red-400 transition duration-75 hover:text-red-500" />
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	);
};

export default MataPelajaranListItem;
