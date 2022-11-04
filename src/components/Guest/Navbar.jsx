import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import icon from "../../assets/img/svg/Icon.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
	const [toggleIcon, setToggleIcon] = useState(false);
	const [scroll, setScroll] = useState(false);

	const handleToggle = () => {
		setToggleIcon(!toggleIcon);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
	});

	return (
		<>
			<header
				className={
					scroll
						? "nav-container active absolute top-0 left-0 z-10 flex w-full items-center bg-transparent transition-all duration-300"
						: "fixed top-0 left-0 z-10 flex w-full items-center bg-transparent transition-all duration-300"
				}>
				<div className="container">
					<div className="relative flex items-center justify-between">
						<div className="flex flex-wrap items-center px-4">
							<button id="hamburger" name="hamburger" type="button" className="absolute block text-white lg:hidden" onClick={handleToggle}>
								<Bars3Icon className={toggleIcon ? "hidden" : "hamburger my-2 block h-6 w-6 transition duration-300 ease-in-out"} />

								<XMarkIcon className={toggleIcon ? "hamburger my-2 block h-6 w-6 text-white transition duration-300 ease-in-out" : "hidden"} />
							</button>
							<Link to="/" className="nav-brand ml-10 flex flex-wrap items-center py-6 text-xl font-bold tracking-tight text-gray-50 lg:ml-0">
								<img src={icon} className="mr-3 h-8 w-8" alt="Logo" />
								eRekap
							</Link>
						</div>
						<div className="flex items-center">
							<nav
								className={
									toggleIcon
										? "absolute left-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-xl transition duration-300 ease-in-out lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
										: "absolute left-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg transition duration-300 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
								}>
								<ul className="block lg:flex">
									<li className="group">
										<a
											href="#hero"
											className="nav-links mx-8 flex py-2 text-base font-semibold text-gray-300 group-hover:text-primary"
											onClick={handleToggle}>
											Home
										</a>
									</li>
									<li className="group">
										<a
											href="#service"
											className="nav-links mx-8 flex py-2 text-base font-semibold text-gray-300 group-hover:text-primary"
											onClick={handleToggle}>
											Layanan
										</a>
									</li>
									<li className="group">
										<a
											href="#contact"
											className="nav-links mx-8 flex py-2 text-base font-semibold text-gray-300 group-hover:text-primary"
											onClick={handleToggle}>
											Hubungi Kami
										</a>
									</li>
								</ul>
							</nav>
							<div className="items-center lg:flex">
								<div className="group">
									<Link
										to="/login"
										className="mx-2 flex items-center justify-center rounded-3xl bg-blue-600 py-2 px-8 text-base font-semibold text-gray-50 group-hover:bg-blue-700 group-hover:text-gray-100 lg:mx-8">
										Login
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
