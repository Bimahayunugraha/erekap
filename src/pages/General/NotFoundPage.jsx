import React from "react";
import { useNavigate } from "react-router-dom";
import logoNotFound from "../../assets/img/svg/not-found.svg";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="mx-auto flex h-screen w-full flex-col items-center justify-center px-6 py-8 md:h-screen md:py-10 lg:py-0">
			<div className="container">
				<div className="flex flex-wrap">
					<div className="w-full self-center px-4 lg:w-1/2">
						<h2 className="mb-3 text-center text-base font-extrabold text-indigo-600 md:text-start md:text-2xl lg:text-start">
							Halaman tidak ditemukan
						</h2>
						<p className="mb-5 text-center text-xs font-normal leading-relaxed text-gray-500 md:text-start md:text-lg lg:mb-10 lg:text-start">
							Maaf halaman yang Anda cari tidak ditemukan. Cobalah mencari halaman kembali atau Anda dapat mengklik pada button dibawah ini.
						</p>
						<div className="flex justify-center md:justify-start lg:justify-start">
							<button
								onClick={() => {
									navigate("/");
								}}
								type="button"
								className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold tracking-[1px] text-gray-50 transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg md:px-8 md:text-base lg:px-8 lg:text-base">
								<ArrowLeftIcon className="mr-3 h-4 w-4" />
								<span>Kembali</span>
							</button>
						</div>
						{/* <Link
							to="/"
							className="inline-flex items-center justify-center self-center rounded-xl bg-blue-600 py-3 px-6 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg md:text-base lg:text-base">
							<FaArrowLeft className="mr-3" />
							<span>Kembali</span>
						</Link> */}
					</div>
					<div className="w-full self-end px-4 lg:w-1/2">
						<div className="mt-10 lg:right-0 lg:mt-0">
							<img src={logoNotFound} alt="not-found" className="mx-auto max-w-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
