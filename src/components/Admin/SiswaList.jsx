import React from "react";
import SiswaListItem from "./SiswaListItem";

const SiswaList = () => {
	return (
		<div>
			<div className="container mx-auto py-6 px-6">
				<div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
					<table className="whitespace-no-wrap w-full text-left text-sm text-gray-500">
						<thead>
							<tr className="w-full border-b border-gray-200 bg-blue-50 text-xs uppercase text-gray-700">
								<th scope="col" className="py-3 px-6">
									No
								</th>
								<th scope="col" className="py-3 px-6">
									Nama Siswa
								</th>
								<th scope="col" className="py-3 px-6">
									Jenis Kelamin
								</th>
								<th scope="col" className="py-3 px-6">
									Aksi
								</th>
							</tr>
						</thead>
						<SiswaListItem />
					</table>
				</div>
			</div>
		</div>
	);
};

export default SiswaList;
