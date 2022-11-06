import React, { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/outline";
import SiswaList from "../../components/Admin/SiswaList";
import ModalCreateSiswa from "../../components/Admin/ModalCreateSiswa";

const SiswaPage = () => {
	const [modalTrigger, setModalTrigger] = useState(false);

	const handleModalTrigger = () => {
		setModalTrigger(!modalTrigger);
	};

	return (
		<div>
			<div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
				<h2 className="text-xl font-bold text-gray-800">Data Siswa</h2>
				<button
					type="button"
					className="focus:shadow-outline rounded-lg bg-indigo-500 py-2 px-4 font-semibold text-white hover:bg-indigo-600 focus:outline-none"
					onClick={handleModalTrigger}>
					<PlusIcon className="h-5 w-5" />
				</button>
			</div>
			<SiswaList />
			{modalTrigger && <ModalCreateSiswa handleModalTrigger={handleModalTrigger} modalTrigger={modalTrigger} />}
		</div>
	);
};

export default SiswaPage;
