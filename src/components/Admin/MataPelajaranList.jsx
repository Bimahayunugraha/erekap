import React from "react";
import { useSubscription } from "@apollo/client";

import MataPelajaranListItem from "./MataPelajaranListItem";
import { SubscriptionMataPelajaran } from "../../graphqls/typeDefs/mataPelajaran.graphql";
import { PulseLoader } from "react-spinners";

const MataPelajaranList = () => {
	const { data, loading } = useSubscription(SubscriptionMataPelajaran);

	return (
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
									Nama Pelajaran
								</th>
								<th scope="col" className="py-3 px-6">
									Aksi
								</th>
							</tr>
						</thead>
						{data?.erekap_mata_pelajaran_aggregate.nodes.map((item, i) => {
							return <MataPelajaranListItem key={item.id} data={{ ...item, no: i + 1 }} />;
						})}
					</table>
				</div>
			)}
		</div>
	);
};

export default MataPelajaranList;
