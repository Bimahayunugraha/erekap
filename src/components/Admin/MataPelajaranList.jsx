import React from "react";

const MataPelajaranList = () => {
	return (
		<div className="container mx-auto py-6 px-6">
			<div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
				<table className="whitespace-no-wrap w-full text-left text-sm text-gray-500">
					<thead>
						<tr className="w-full border-b border-gray-200 bg-blue-50 text-xs uppercase text-gray-700">
							<th scope="col" className="py-3 px-6">
								Nama Pelajaran
							</th>
							<th scope="col" className="py-3 px-6">
								Aksi
							</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
};

export default MataPelajaranList;
