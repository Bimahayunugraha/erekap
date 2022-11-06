import React, { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/outline";
import GuruList from "../../components/Admin/GuruList";
import ModalCreateGuru from "../../components/Admin/ModalCreateGuru";

const GuruPage = () => {
	const [modalCreateTrigger, setModalCreateTrigger] = useState(false);

	const handleModalCreateTrigger = () => {
		setModalCreateTrigger(!modalCreateTrigger);
	};

	return (
		<div>
			<div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
				<h2 className="text-xl font-bold text-gray-800">Data Guru</h2>
				<button
					type="button"
					className="focus:shadow-outline rounded-lg bg-indigo-500 py-2 px-4 font-semibold text-white hover:bg-indigo-600 focus:outline-none"
					onClick={handleModalCreateTrigger}>
					<PlusIcon className="h-5 w-5" />
				</button>
			</div>
			<GuruList />
			{modalCreateTrigger && <ModalCreateGuru handleModalCreateTrigger={handleModalCreateTrigger} />}
		</div>
	);
};

export default GuruPage;
