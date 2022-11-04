import React from "react";
import { Link } from "react-router-dom";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
	return (
		<div className="relative z-[3] flex min-h-[100vh] w-full items-center bg-bgHero bg-cover bg-center before:absolute before:inset-0 before:bg-gray-700 before:bg-opacity-60 lg:bg-fixed lg:before:bg-gray-800 lg:before:bg-opacity-[0.7] lg:after:absolute lg:after:top-0 lg:after:bottom-0 lg:after:w-[40%] lg:after:bg-dark">
			<div className="container z-[1]">
				<div className="grid lg:grid-cols-3 xl:grid-cols-3">
					<div className="w-full self-center px-4">
						<h2 className="line m-0 text-3xl font-bold leading-[1.2] text-white">Selamat Datang di eRekap</h2>
						<blockquote className="b my-[40px] border-l-4 border-indigo-500 pl-[20px] text-lg text-white lg:text-gray-400">
							<p>Sistem informasi untuk melakukan rekap nilai.</p>
						</blockquote>
						<div className="text-center lg:text-start"></div>
						<Link
							to="/login"
							className="inline-flex items-center justify-center self-center rounded-xl bg-blue-600 px-8 py-2 font-semibold tracking-[1px] text-gray-50 shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700">
							<span>Mulai</span> <ArrowRightIcon className="ml-3 h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
