import React from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/img/svg/Icon.svg";
import { BookOpenIcon, ClipboardDocumentIcon, IdentificationIcon, Squares2X2Icon, UserPlusIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
	return (
		<div className="fixed z-30 hidden min-h-screen w-64 overflow-y-auto border-r border-gray-200 bg-white py-4 px-3 md:block">
			<div className="relative">
				<Link to="/dashboard" className="mb-5 flex cursor-pointer items-center pl-2.5">
					<img src={icon} className="mr-3 ml-2 h-6 w-6 sm:h-7" alt="logo" />
					<span className="self-center whitespace-nowrap text-xl font-semibold text-blue-600">eRekap</span>
				</Link>
				<ul>
					<li>
						<NavLink
							to="/dashboard"
							className={({ isActive }) =>
								isActive
									? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
									: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
							}>
							<Squares2X2Icon className="ml-2 h-6 w-6 transition duration-75" />
							<span className="ml-3 font-medium">Dashboard</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/siswa"
							className={({ isActive }) =>
								isActive
									? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
									: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
							}>
							<IdentificationIcon className="ml-2 h-6 w-6 transition duration-75" />
							<span className="ml-3 font-medium">Siswa</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/mata-pelajaran"
							className={({ isActive }) =>
								isActive
									? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
									: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
							}>
							<BookOpenIcon className="ml-2 h-6 w-6 transition duration-75" />
							<span className="ml-3 font-medium">Mata Pelajaran</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/guru"
							className={({ isActive }) =>
								isActive
									? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
									: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
							}>
							<UserPlusIcon className="ml-2 h-6 w-6 transition duration-75" />
							<span className="ml-3 font-medium">Guru</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/pelajaran/diampu"
							className={({ isActive }) =>
								isActive
									? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
									: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
							}>
							<ClipboardDocumentIcon className="ml-2 h-6 w-6 transition duration-75" />
							<span className="ml-3 font-medium">Pelajaran Diampu</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
