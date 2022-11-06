import React, { useState } from "react";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

const PenilaianDetailItem = () => {
	const [inputNilaiModalTrigger, setInputNilaiModalTrigger] = useState(false);
	const handleInputNilaiModalTrigger = () => {
		setInputNilaiModalTrigger(!inputNilaiModalTrigger);
	};

	return (
		<tbody>
			<tr className="border-b bg-white hover:bg-gray-50">
				<th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
					Bima Nugraha
				</th>
				<td className="py-4 px-6">Bahasa Indonesia</td>
				<td className="py-4 px-6"></td>
				<td className="py-4 px-6">
					<div className="flex items-center space-x-4 text-sm">
						<button onClick={handleInputNilaiModalTrigger}>
							<PlusCircleIcon className="h-6 w-6 text-blue-600 transition duration-75 hover:text-blue-700" />
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	);
};

export default PenilaianDetailItem;
