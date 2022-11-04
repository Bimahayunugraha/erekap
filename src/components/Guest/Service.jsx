import React from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const Service = () => {
	return (
		<div className="pt-36 pb-16">
			<div className="container">
				<div className="w-full px-4">
					<div className="mx-auto mb-16 max-w-xl text-center">
						<h2 className="m-0 mb-2 text-base font-semibold uppercase leading-[1px] text-green-500">Layanan</h2>
						<p className="p-0 text-xl font-bold uppercase leading-[42px] text-indigo-700">Layanan yang kami sediakan</p>
					</div>
					<div className="flex flex-wrap">
						<div className="w-full px-4 lg:w-1/2 xl:w-1/4">
							<div className="mb-10 rounded-md bg-white pt-10 pb-5 text-center shadow-md">
								<div className="relative inline-block rounded-md bg-blue-200 px-[30px] py-[20px] transition duration-300">
									<ChatBubbleLeftIcon className="h-6 w-6 text-2xl text-blue-700" />
								</div>
								<div className="py-8 px-6">
									<h2 className="mb-3 block text-xl font-semibold text-indigo-700">Input Nilai Siswa</h2>
									<p className="text-base font-medium text-gray-800">Melakukan input untuk nilai dari setiap siswa</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/4">
							<div className="mb-10 rounded-md bg-white pt-10 pb-5 text-center shadow-md">
								<div className="relative inline-block rounded-md bg-blue-200 px-[30px] py-[20px] transition duration-300">
									<ChatBubbleLeftIcon className="h-6 w-6 text-2xl text-blue-700" />
								</div>
								<div className="py-8 px-6">
									<h2 className="mb-3 block text-xl font-semibold text-indigo-700">Rekap nilai siswa</h2>
									<p className="text-base font-medium text-gray-800">Melakukan rekap dengan melihat seluruh nilai dari siswa</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/4">
							<div className="mb-10 rounded-md bg-white pt-10 pb-5 text-center shadow-md">
								<div className="relative inline-block rounded-md bg-blue-200 px-[30px] py-[20px] transition duration-300">
									<ChatBubbleLeftIcon className="h-6 w-6 text-2xl text-blue-700" />
								</div>
								<div className="py-8 px-6">
									<h2 className="mb-3 block text-xl font-semibold text-indigo-700">Mengelola data siswa</h2>
									<p className="text-base font-medium text-gray-800">Melakukan pengelolaan data dari siswa</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/4">
							<div className="mb-10 rounded-md bg-white pt-10 pb-5 text-center shadow-md">
								<div className="relative inline-block rounded-md bg-blue-200 px-[30px] py-[20px] transition duration-300">
									<ChatBubbleLeftIcon className="h-6 w-6 text-2xl text-blue-700" />
								</div>
								<div className="py-8 px-6">
									<h2 className="mb-3 block text-xl font-semibold text-indigo-700">Mengelola data guru</h2>
									<p className="text-base font-medium text-gray-800">Melakukan pengelolaan data dari guru</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/4">
							<div className="mb-10 rounded-md bg-white pt-10 pb-5 text-center shadow-md">
								<div className="relative inline-block rounded-md bg-blue-200 px-[30px] py-[20px] transition duration-300">
									<ChatBubbleLeftIcon className="h-6 w-6 text-2xl text-blue-700" />
								</div>
								<div className="py-8 px-6">
									<h2 className="mb-3 block text-xl font-semibold text-indigo-700">Mengelola data pelajaran</h2>
									<p className="text-base font-medium text-gray-800">Melakukan pengelolaan data pelajaran yang diambil siswa</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/4">
							<div className="mb-10 rounded-md bg-white pt-10 pb-5 text-center shadow-md">
								<div className="relative inline-block rounded-md bg-blue-200 px-[30px] py-[20px] transition duration-300">
									<ChatBubbleLeftIcon className="h-6 w-6 text-2xl text-blue-700" />
								</div>
								<div className="py-8 px-6">
									<h2 className="mb-3 block text-xl font-semibold text-indigo-700">Mengelola data pelajaran guru</h2>
									<p className="text-base font-medium text-gray-800">Melakukan pengelolaan data pelajaran yang diampu oleh guru</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
