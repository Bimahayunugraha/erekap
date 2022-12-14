import React from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";

const ModalEditGuru = ({ handleModalEditTrigger, update, handleChange, handleUpdate, maxLengthCheck }) => {
	return (
		<div className="relative z-50">
			<div className="fixed inset-0 z-50 bg-gray-400 bg-opacity-50 transition-opacity"></div>

			<div className="fixed inset-0 z-50 items-center justify-center overflow-y-auto">
				<div className="flex w-full items-end justify-center px-4 py-20 sm:h-full sm:items-center sm:p-0 md:h-screen">
					<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
						<form onSubmit={handleUpdate} className="rounded-lg bg-white shadow">
							<div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600">
								<h3 className="p-1.5 text-base font-semibold text-gray-900 dark:text-white lg:text-lg xl:text-xl">Edit Guru</h3>
								<button
									type="button"
									className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
									onClick={handleModalEditTrigger}>
									<XMarkIcon className="h-5 w-5" />
								</button>
							</div>
							<div className="md:col-span-2">
								<div className="space-y-4 p-6 md:space-y-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="nama_depan" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nama Depan Guru</span>
											</label>
											<input
												type="text"
												name="nama_depan"
												id="nama_depan"
												className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:p-2.5 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
												placeholder="Masukkan nama depan guru"
												defaultValue={update.nama_depan}
												onChange={handleChange}
												required
											/>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="nama_belakang" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nama belakang Guru</span>
											</label>
											<input
												type="text"
												name="nama_belakang"
												id="nama_belakang"
												className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:p-2.5 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
												placeholder="Masukkan nama belakang guru"
												defaultValue={update.nama_belakang}
												onChange={handleChange}
												required
											/>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="jenis_kelamin" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												Jenis Kelamin
											</label>
											<select
												id="jenis_kelamin"
												name="jenis_kelamin"
												className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder:text-xs focus:border-blue-500 focus:ring-blue-500 sm:p-2.5 md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
												defaultValue={update.jenis_kelamin}
												onChange={handleChange}>
												<option>Pilih jenis kelamin</option>
												<option value="Laki-laki">Laki-laki</option>
												<option value="Perempuan">Perempuan</option>
											</select>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="nomor_telepon" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nomor Telepon</span>
											</label>
											<input
												type="number"
												name="nomor_telepon"
												id="nomor_telepon"
												min="1"
												maxLength="12"
												onInput={maxLengthCheck}
												className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:p-2.5 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
												placeholder="Masukkan nomor telepon"
												defaultValue={update.nomor_telepon}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
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

export default ModalEditGuru;
