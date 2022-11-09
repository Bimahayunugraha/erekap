import React from "react";
import { useSubscription } from "@apollo/client";

import { BookOpenIcon, IdentificationIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { SubscriptionSiswa } from "../../graphqls/typeDefs/siswa.graphql";
import { SubscriptionMataPelajaran } from "../../graphqls/typeDefs/mataPelajaran.graphql";
import { SubscriptionGuru } from "../../graphqls/typeDefs/guru.graphql";
import { PulseLoader } from "react-spinners";

const OverviewData = () => {
	const { data: dataSubsSiswa, loading: loadingSubsSiswa } = useSubscription(SubscriptionSiswa);
	const { data: dataSubsMataPelajaran, loading: loadingSubsMataPelajaran } = useSubscription(SubscriptionMataPelajaran);
	const { data: dataSubsGuru, loading: loadingSubsGuru } = useSubscription(SubscriptionGuru);

	return (
		<div className="container mx-auto py-6 px-6">
			{loadingSubsSiswa || loadingSubsMataPelajaran || loadingSubsGuru ? (
				<div className="my-0 mx-auto flex items-center justify-center pt-5">
					<PulseLoader size={10} color="#2563eb" />
				</div>
			) : (
				<div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					<div className="rounded-lg border bg-white p-4 shadow-sm">
						<div className="flex items-center space-x-4">
							<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 p-5">
								<span className="text-sm">
									<IdentificationIcon className="h-6 w-6 text-indigo-700" />
								</span>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-semibold text-gray-900">Total Siswa</p>

								<p className="truncate text-sm font-medium text-gray-500">{dataSubsSiswa?.erekap_siswa_aggregate.aggregate.count}</p>
							</div>
						</div>
					</div>
					<div className="rounded-lg border bg-white p-4 shadow-sm">
						<div className="flex items-center space-x-4">
							<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 p-5">
								<span className="text-sm">
									<BookOpenIcon className="h-6 w-6 text-indigo-700" />
								</span>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-semibold text-gray-900">Total Pelajaran</p>
								<p className="truncate text-sm font-medium text-gray-500">{dataSubsMataPelajaran?.erekap_mata_pelajaran_aggregate.aggregate.count}</p>
							</div>
						</div>
					</div>
					<div className="rounded-lg border bg-white p-4 shadow-sm">
						<div className="flex items-center space-x-4">
							<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 p-5">
								<span className="text-sm">
									<UserPlusIcon className="h-6 w-6 text-indigo-700" />
								</span>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-semibold text-gray-900">Total Guru</p>
								<p className="truncate text-sm font-medium text-gray-500">{dataSubsGuru?.erekap_guru_aggregate.aggregate.count}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OverviewData;
