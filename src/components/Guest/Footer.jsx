import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/img/svg/Icon.svg";

const Footer = () => {
	return (
		<div>
			<footer className="bg-blue-50 pt-10">
				<div className="border border-t-2 border-b-2 border-sky-200 bg-white bg-contain py-20">
					<div className="container">
						<div className="w-full px-4">
							<div className="flex flex-wrap">
								<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
									<div className="mx-3 mb-8">
										<Link href="/" className="flex flex-wrap items-center pb-6 text-2xl font-bold text-dark">
											<img src={icon} className="mr-3 h-10 w-10" alt="Logo" />
											<span className="tracking-[1px]">eRekap</span>
										</Link>
										<p className="text-sm leading-6">eRekap adalah sebuah website yang digunakan untuk melakukan rekap nilai siswa </p>
									</div>
								</div>
								<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
									<div className="mx-3 mb-8">
										<h3 className="mb-3 text-xl font-bold uppercase text-slate-700">fitur</h3>
										<ul>
											<li>
												<a href="/#hero" className="font-base flex py-2 text-base text-gray-800 hover:text-blue-400">
													Home
												</a>
											</li>
											<li>
												<a href="/#service" className="font-base flex py-2 text-base text-gray-800 hover:text-blue-400">
													Layanan
												</a>
											</li>
											<li>
												<a href="/#contact" className="font-base flex py-2 text-base text-gray-800 hover:text-blue-400">
													Hubungi Kami
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
									<div className="mx-3 mb-8">
										<h3 className="mb-3 text-xl font-bold uppercase text-slate-700">Hubungi Kami</h3>
										<p className="leading-7">
											Magetan <br />
											Jawa Timur, 63396
											<br />
											<strong>Phone:</strong> +62 82 902 902 902
											<br />
											<strong>Email:</strong> godev@gmiail.com
											<br />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="py-10 text-center">
						&copy; Copyright
						<strong>
							<span> eRekap. </span>
						</strong>
						All Rights Reserved
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
