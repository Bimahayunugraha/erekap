import React from "react";

const PelajaranDiampuInput = () => {
	return (
		<div className="h-full overflow-y-auto">
			<div className="container mx-auto py-6 px-6">
				<form>
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="mata_pelajaran_id" className="mb-2 block text-sm font-medium text-gray-900">
								<span className="block after:ml-1 after:text-red-500 after:content-['*']">Pelajaran</span>
							</label>
							<select
								id="mata_pelajaran_id"
								name="mata_pelajaran_id"
								className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
								required>
								<option>Pilih pelajaran</option>

								<option>Bahasa Indonesia</option>
							</select>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="guru_id" className="mb-2 block text-sm font-medium text-gray-900">
								<span className="block after:ml-1 after:text-red-500 after:content-['*']">Guru</span>
							</label>
							<select
								id="guru_id"
								name="guru_id"
								className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
								required>
								<option>Pilih guru</option>
								<option>Puji Astuti S.Pd.</option>
							</select>
						</div>
					</div>
					<h3 className="mb-2 mt-6 block text-sm font-medium text-gray-900">
						<span className="block after:ml-1 after:text-red-500 after:content-['*']">Siswa</span>
					</h3>
					<div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
						<table className="whitespace-no-wrap w-full text-left text-sm text-gray-500">
							<thead className="bg-blue-5 border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-700">
								<tr>
									<th scope="col" className="p-4">
										<div className="flex items-center">
											<label htmlFor="checkbox-all" className="sr-only">
												checkbox
											</label>
										</div>
									</th>
									<th scope="col" className="py-3 px-6">
										Nama Siswa
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b bg-white hover:bg-gray-50">
									<td className="w-4 p-4">
										<div className="flex items-center">
											<input
												id="siswa_id"
												name="siswa_id"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
												multiple
												required
											/>
											<label htmlFor="siswa_id" className="sr-only">
												Bima Nugraha
											</label>
										</div>
									</td>
									<th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900">
										Bima Nugraha
									</th>
								</tr>
							</tbody>
						</table>
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
	);
};

export default PelajaranDiampuInput;
