import React from "react";
import { useSubscription } from "@apollo/client";

import SiswaListItem from "./SiswaListItem";
import { SubscriptionSiswa } from "../../graphqls/typeDefs/siswa.graphql";
import { PulseLoader } from "react-spinners";

const SiswaList = () => {
	const { data, loading, error } = useSubscription(SubscriptionSiswa);

	if (error) {
		return alert(error);
	}

	return (
		<div>
			<div className="container mx-auto py-6 px-6">
				{loading ? (
					<div className="my-0 mx-auto flex items-center justify-center pt-5">
						<PulseLoader size={10} color="#2563eb" />
					</div>
				) : (
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
							{data?.erekap_siswa_aggregate.nodes.map((item, i) => (
								<SiswaListItem key={item.id} data={{ ...item, no: i + 1 }} />
							))}
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default SiswaList;
