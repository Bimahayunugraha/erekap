import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AddSiswa } from "../../graphqls/typeDefs/siswa.graphql";
import Swal from "sweetalert2";

const ModalCreateSiswa = ({ handleModalCreateTrigger }) => {
	const siswaData = {
		nama_depan: "",
		nama_belakang: "",
		jenis_kelamin: "",
	};

	const baseErrors = {
		nama_depan: "",
		nama_belakang: "",
		nip: "",
		nomor_telepon: "",
	};

	const [data, setData] = useState(siswaData);
	const [errors, setErrors] = useState(baseErrors);
	const [addSiswa, { error: erroAddSiswa }] = useMutation(AddSiswa, {
		onError: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "error",
						title: "Gagal menambahkan data",
						text: "Nama siswa tidak boleh sama",
						showConfirmButton: false,
						timer: 2000,
						background: "#fefefe",
					}),
				1000
			);
		},
		onCompleted: () => {
			setTimeout(
				() =>
					Swal.fire({
						icon: "success",
						title: "Data siswa berhasil ditambahkan",
						showConfirmButton: false,
						timer: 1500,
						background: "#fefefe",
					}),
				1000
			);
		},
	});

	const regexNameValidation = /^[a-zA-Z\s,.'-]*$/;

	if (erroAddSiswa) {
		alert("opss eror");
	}

	const tambahSiswa = (newSiswa) => {
		addSiswa({
			variables: {
				...newSiswa,
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
				setErrors({ ...errors, nama_depan: "Nama depan siswa harus berupa huruf" });
			} else if (value == "") {
				setErrors({ ...errors, nama_depan: "Nama depan siswa harus diisi" });
			} else {
				setErrors({ ...errors, nama_depan: "" });
			}
		}

		if (name === "nama_belakang") {
			if (!regexNameValidation.test(value)) {
				setErrors({ ...errors, nama_belakang: "Nama belakang siswa harus berupa huruf" });
			} else if (value == "") {
				setErrors({ ...errors, nama_belakang: "Nama belakang siswa harus diisi" });
			} else {
				setErrors({ ...errors, nama_belakang: "" });
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (data.nama_depan.trim() && data.nama_belakang.trim() && data.jenis_kelamin !== "") {
			const newData = {
				nama_depan: data.nama_depan,
				nama_belakang: data.nama_belakang,
				jenis_kelamin: data.jenis_kelamin,
			};

			tambahSiswa(newData);
			handleModalCreateTrigger();

			setData(siswaData);
		} else {
			alert("Data masih ada yang kosong");
		}
	};

	return (
		<div>
			<div className="relative z-50">
				<div className="fixed inset-0 z-50 bg-gray-400 bg-opacity-50 transition-opacity"></div>

				<div className="fixed inset-0 z-50 items-center justify-center overflow-y-auto">
					<div className="flex w-full items-end justify-center px-4 py-20 sm:h-full sm:items-center sm:p-0 md:h-screen">
						<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
							<form onSubmit={handleSubmit} className="rounded-lg bg-white shadow">
								<div className="flex items-center justify-between rounded-t border-b p-4">
									<h3 className="p-1.5 text-base font-semibold text-gray-900 lg:text-lg xl:text-xl">Tambah Siswa</h3>
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
										<label htmlFor="nama_depan" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
											<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nama Depan Siswa</span>
										</label>
										<input
											type="text"
											name="nama_depan"
											id="nama_depan"
											className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
											placeholder="Masukkan nama depan siswa"
											required
											value={data.nama_depan}
											onChange={handleChange}
										/>
										{errors.nama_depan && <span className="mt-2 block text-sm text-red-700">{errors.nama_depan}</span>}
									</div>
									<div>
										<label htmlFor="nama_belakang" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
											<span className="block after:ml-1 after:text-red-500 after:content-['*']">Nama Belakang Siswa</span>
										</label>
										<input
											type="text"
											name="nama_belakang"
											id="nama_belakang"
											className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder-gray-500 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
											placeholder="Masukkan nama belakang siswa"
											required
											value={data.nama_belakang}
											onChange={handleChange}
										/>
										{errors.nama_belakang && <span className="mt-2 block text-sm text-red-700">{errors.nama_belakang}</span>}
									</div>
									<div>
										<label htmlFor="jenis_kelamin" className="mb-2 block text-xs font-medium text-gray-900 md:text-sm lg:text-sm xl:text-sm">
											<span className="block after:ml-1 after:text-red-500 after:content-['*']">Jenis Kelamin</span>
										</label>
										<select
											id="jenis_kelamin"
											name="jenis_kelamin"
											className="block w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 placeholder:text-xs focus:border-blue-500 focus:ring-blue-500 sm:text-sm md:p-2.5 md:placeholder:text-sm lg:p-2.5 xl:p-2.5"
											value={data.jenis_kelamin}
											onChange={handleChange}>
											<option>Pilih jenis kelamin</option>
											<option value="Laki-laki">Laki-laki</option>
											<option value="Perempuan">Perempuan</option>
										</select>
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
		</div>
	);
};

export default ModalCreateSiswa;
