import React from "react";
import { EnvelopeIcon, PhoneIcon, MapIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
	return (
		<div className="pt-36 pb-32">
			<div className="container">
				<div className="w-full px-4">
					<div className="mx-auto mb-16 max-w-xl text-center">
						<h2 className="m-0 mb-2 text-base font-semibold uppercase leading-[1px] text-green-500">Hubungi</h2>
						<p className="p-0 text-xl font-bold uppercase leading-[42px] text-indigo-700">Hubungi Kami</p>
					</div>
					<div className="flex flex-wrap">
						<div className="w-full px-4 lg:w-1/2 xl:w-1/3">
							<div className="mb-10 rounded-md bg-blue-50 p-10">
								<EnvelopeIcon className="h-10 w-10 text-blue-700" />
								<div className="pt-8">
									<h2 className="mb-3 block text-2xl font-semibold text-indigo-700">Alamat</h2>
									<p className="text-base font-medium leading-7 text-gray-800">Ngawi, Jawa Timur, 92121</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/3">
							<div className="mb-10 rounded-md bg-blue-50 p-10">
								<PhoneIcon className="h-10 w-10 text-blue-700" />
								<div className="pt-8">
									<h2 className="mb-3 block text-2xl font-semibold text-indigo-700">Nomor Telepon</h2>
									<p className="text-base font-medium leading-7 text-gray-800">+62 81 901 901 901</p>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-1/3">
							<div className="mb-10 rounded-md bg-blue-50 p-10">
								<MapIcon className="h-10 w-10 text-blue-700" />
								<div className="pt-8">
									<h2 className="mb-3 block text-2xl font-semibold text-indigo-700">Email</h2>
									<p className="text-base font-medium leading-7 text-gray-800">erekap@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
