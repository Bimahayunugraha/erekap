import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { AddGuru } from "../../graphqls/typeDefs/guru.graphql";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

const ModalCreateGuru = ({ handleModalCreateTrigger }) => {
	const dataGuru = {
		nama_depan: "",
		nama_belakang: "",
		nip: "",
		jenis_kelamin: "",
		nomor_telepon: "",
	};

	const baseErrors = {
		nama_depan: "",
		nama_belakang: "",
		nip: "",
		nomor_telepon: "",
	};

	const [data, setData] = useState(dataGuru);
	const [errors, setErrors] = useState(baseErrors);
	const [addGuru] = useMutation(AddGuru, {
		onError: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "error",
						title: "Gagal menambahkan data",
						text: "Nama guru, nip, atau nomor telepon tidak boleh sama",
						showConfirmButton: false,
						timer: 2000,
						background: "#fefefe",
					}),
				1500
			);
		},
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Data guru berhasil ditambahkan",
						showConfirmButton: false,
						timer: 1500,
						background: "#fefefe",
					}),
				1000
			);
		},
	});

	const regexNameValidation = /^[a-zA-Z\s,.'-]*$/;
	const regexPhoneNumberValidation = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/gm;

	const tambahGuru = (newGuru) => {
		addGuru({
			variables: {
				...newGuru,
			},
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});

		validation(name, value);
	};

	const validation = (name, value) => {
		if (name === "nama_depan") {
			if (!regexNameValidation.test(value)) {
				setErrors({ ...errors, nama_depan: "Nama depan guru harus berupa huruf" });
			} else if (value == "") {
				setErrors({ ...errors, nama_depan: "Nama depan guru harus diisi" });
			} else {
				setErrors({ ...errors, nama_depan: "" });
			}
		}

		if (name === "nama_belakang") {
			if (!regexNameValidation.test(value)) {
				setErrors({ ...errors, nama_belakang: "Nama belakang guru harus berupa huruf" });
			} else if (value == "") {
				setErrors({ ...errors, nama_belakang: "Nama belakang guru harus diisi" });
			} else {
				setErrors({ ...errors, nama_belakang: "" });
			}
		}

		if (name === "nip") {
			if (value == "") {
				setErrors({ ...errors, nip: "Nip harus diisi" });
			} else if (value.length <= 13) {
				setErrors({ ...errors, nip: "Nip harus lebih dari 13 karakter" });
			} else if (value.length >= 18) {
				setErrors({ ...errors, nip: "Nip harus kurang dari 18 karakter" });
			} else {
				setErrors({ ...errors, nip: "" });
			}
		}

		if (name === "nomor_telepon") {
			if (!regexPhoneNumberValidation.test(value)) {
				setErrors({ ...errors, nomor_telepon: "Nomor telepon harus berupa angka" });
			} else if (value == "") {
				setErrors({ ...errors, nomor_telepon: "Nomor telepon harus diisi" });
			} else if (value.length <= 11) {
				setErrors({ ...errors, nomor_telepon: "Nomor telepon harus lebih dari 11 karakter" });
			} else if (value.length >= 13) {
				setErrors({ ...errors, nomor_telepon: "Nomor telepon harus kurang dari 13 karakter" });
			} else {
				setErrors({ ...errors, nomor_telepon: "" });
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (data.nama_depan && data.nama_belakang && data.nip && data.jenis_kelamin && data.nomor_telepon !== "") {
			const newData = {
				nama_depan: data.nama_depan,
				nama_belakang: data.nama_belakang,
				nip: data.nip,
				jenis_kelamin: data.jenis_kelamin,
				nomor_telepon: data.nomor_telepon,
			};

			tambahGuru(newData);
			handleModalCreateTrigger();

			setData(dataGuru);
		} else {
			alert("Terdapat data yang kosong");
		}
	};

	return (
		<div className="relative z-50">
			<div className="fixed inset-0 z-50 bg-gray-400 bg-opacity-50 transition-opacity"></div>

			<div className="fixed inset-0 z-50 items-center justify-center overflow-y-auto">
				<div className="flex w-full items-end justify-center px-4 py-20 sm:h-full sm:items-center sm:p-0 md:h-screen">
					<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
						<form onSubmit={handleSubmit} className="rounded-lg bg-white shadow">
							<div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600">
								<h3 className="p-1.5 text-base font-semibold text-gray-900 dark:text-white lg:text-lg xl:text-xl">Tambah Guru</h3>
								<button
									type="button"
									className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
									onClick={handleModalCreateTrigger}>
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
												required
												value={data.nama_depan}
												onChange={handleChange}
											/>
											{errors.nama_depan && <span className="mt-2 block text-sm text-red-700">{errors.nama_depan}</span>}
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="nama_belakang" className="mb-2 block text-xs  font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nama Belakang Guru</span>
											</label>
											<input
												type="text"
												name="nama_belakang"
												id="nama_belakang"
												className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:p-2.5 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
												placeholder="Masukkan nama belakang guru"
												required
												value={data.nama_belakang}
												onChange={handleChange}
											/>
											{errors.nama_belakang && <span className="mt-2 block text-sm text-red-700">{errors.nama_belakang}</span>}
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="nip" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												<span className="block after:ml-1 after:text-red-500 after:content-['*']">NIP</span>
											</label>
											<input
												type="number"
												name="nip"
												id="nip"
												min="1"
												className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:p-2.5 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
												placeholder="Masukkan nip"
												value={data.nip}
												onChange={handleChange}
												required
											/>
											{errors.nip && <span className="mt-2 block text-sm text-red-700">{errors.nip}</span>}
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="jenis_kelamin" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												<span className="block after:ml-1 after:text-red-500 after:content-['*']">Jenis Kelamin</span>
											</label>
											<select
												id="jenis_kelamin"
												name="jenis_kelamin"
												className="md:placeholder:text-smfocus:border-blue-500 block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder:text-sm focus:ring-blue-500 sm:p-2.5 sm:text-sm md:p-2.5 lg:p-2.5 xl:p-2.5"
												required
												value={data.jenis_kelamin}
												onChange={handleChange}>
												<option>Pilih jenis kelamin</option>
												<option value="Laki-laki">Laki-laki</option>
												<option value="Perempuan">Perempuan</option>
											</select>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="nomor_telepon" className="mb-2 block text-xs  font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
												<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nomor Telepon</span>
											</label>
											<input
												type="number"
												name="nomor_telepon"
												id="nomor_telepon"
												min="1"
												className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:p-2.5 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
												placeholder="Masukkan nomor telepon"
												value={data.nomor_telepon}
												onChange={handleChange}
												required
											/>
											{errors.nomor_telepon && <span className="mt-2 block text-sm text-red-700">{errors.nomor_telepon}</span>}
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

export default ModalCreateGuru;
