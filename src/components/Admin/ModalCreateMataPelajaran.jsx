import React from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";

const ModalCreateMataPelajaran = ({ handleModalCreateTrigger }) => {
	return (
		<div className="relative z-50">
			<div className="fixed inset-0 z-50 bg-gray-400 bg-opacity-50 transition-opacity"></div>

			<div className="fixed inset-0 z-50 items-center justify-center overflow-y-auto">
				<div className="flex w-full items-end justify-center pt-36 sm:items-center sm:p-0 md:h-screen">
					<div className="relative w-full max-w-xs">
						<form className="rounded-lg bg-white shadow">
							<div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600">
								<h3 className="p-1.5 text-xl font-semibold text-gray-900 dark:text-white">Tambah Mata Pelajaran</h3>
								<button
									type="button"
									className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
									data-modal-toggle="editUserModal"
									onClick={handleModalCreateTrigger}>
									<XMarkIcon className="h-5 w-5" />
								</button>
							</div>
							<div className="space-y-6 p-6">
								<div>
									<label htmlFor="nama_pelajaran" className="mb-2 block text-sm font-medium text-gray-900">
										<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nama Pelajaran</span>
									</label>
									<input
										type="text"
										name="nama_pelajaran"
										id="nama_pelajaran"
										className="block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										placeholder="Masukkan nama pelajaran"
										required
									/>
								</div>
							</div>
							<div className="flex items-center justify-center space-x-2 rounded-b border-t border-gray-200 p-6">
								<button
									type="submit"
									className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
									Simpan
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalCreateMataPelajaran;
