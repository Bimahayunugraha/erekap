import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Bars3Icon } from "@heroicons/react/24/outline";
import icon from "../../assets/img/svg/Icon.svg";
import iconAvatar from "../../assets/img/png/icon-avatar.png";
import Dropdown from "./Dropdown";

const Header = () => {
	const [modalTrigger, setModalTrigger] = useState(false);
	const handleModalTrigger = () => {
		setModalTrigger(!modalTrigger);
	};

	return (
		<header className="fixed top-0 left-0 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4 py-2 md:px-8">
			<div className="flex w-2/3 items-center">
				<div className="cursor-pointer rounded-full p-2 hover:bg-gray-200 md:hidden" onClick={handleModalTrigger}>
					<Bars3Icon className="h-6 w-6 text-gray-800" />
				</div>
				<Link to="/dashboard" className="flex items-center pl-2 md:hidden">
					<img src={icon} className="mr-3 h-6 w-6 sm:h-7" alt="Flowbite Logo" />
					<span className="self-center whitespace-nowrap text-sm font-semibold tracking-tight sm:text-sm md:text-sm lg:text-xl">eRekap</span>
				</Link>
			</div>
			<div className="flex items-center">
				<div className="relative">
					<button
						className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100"
						onClick={handleModalTrigger}>
						<span className="font-medium text-gray-600">
							<img src={iconAvatar} alt="avatar" />
						</span>
					</button>
					{modalTrigger && <Dropdown />}
				</div>
			</div>
		</header>
	);
};

export default Header;
