import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import icon from "../../assets/img/svg/Icon.svg";
import { BookOpenIcon, ClipboardDocumentIcon, IdentificationIcon, Squares2X2Icon, UserPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { sidebarToggler } from "../../stores/features/sidebarSlice";

const Drawer = () => {
	const sidebarToggle = useSelector((state) => state.sidebar);
	const dispatch = useDispatch();

	return (
		<div className="md:hidden">
			<div
				className={
					sidebarToggle
						? "pointer-events-auto fixed inset-0 z-30 bg-gray-600 opacity-75 transition-opacity duration-300 ease-linear"
						: "pointer-events-none fixed inset-0 z-30 bg-gray-600 opacity-0 transition-opacity duration-300 ease-linear"
				}
				onClick={() => dispatch(sidebarToggler())}></div>
			<div
				id="drawer-body-scrolling"
				className={
					sidebarToggle
						? "fixed inset-y-0 left-0 z-40 h-screen w-full max-w-[250px] translate-x-0 transform overflow-y-auto bg-white p-4 shadow-lg duration-300 ease-in-out"
						: "fixed inset-y-0 left-0 z-40 h-screen w-full max-w-[250px] -translate-x-full transform overflow-y-auto bg-white p-4 duration-300 ease-in-out"
				}
				tabIndex="-1"
				aria-labelledby="drawer-body-scrolling-label">
				<Link
					to="/dashboard"
					id="drawer-body-scrolling-label"
					href="#"
					className="flex items-center pl-2.5"
					onClick={() => dispatch(sidebarToggler())}>
					<img src={icon} className="mr-3 ml-2 h-6 w-6 sm:h-7" alt="eRekap Logo" />
					<span className="self-center whitespace-nowrap text-xl font-semibold">eRekap</span>
				</Link>
				<button
					type="button"
					data-drawer-dismiss="drawer-body-scrolling"
					aria-controls="drawer-body-scrolling"
					className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
					onClick={() => dispatch(sidebarToggler())}>
					<XMarkIcon className="h-5 w-5" />
					<span className="sr-only">Close menu</span>
				</button>
				<div className="overflow-y-auto py-4">
					<ul>
						<li>
							<NavLink
								to="/dashboard"
								className={({ isActive }) =>
									isActive
										? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
										: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
								}
								onClick={() => dispatch(sidebarToggler())}>
								<Squares2X2Icon className="ml-2 h-6 w-6 transition duration-75" />
								<span className="ml-3 font-medium">Dashboard</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admin/data/siswa"
								className={({ isActive }) =>
									isActive
										? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
										: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
								}
								onClick={() => dispatch(sidebarToggler())}>
								<IdentificationIcon className="ml-2 h-6 w-6 transition duration-75" />
								<span className="ml-3 font-medium">Siswa</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admin/data/mata-pelajaran"
								className={({ isActive }) =>
									isActive
										? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
										: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
								}
								onClick={() => dispatch(sidebarToggler())}>
								<BookOpenIcon className="ml-2 h-6 w-6 transition duration-75" />
								<span className="ml-3 font-medium">Mata Pelajaran</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admin/data/guru"
								className={({ isActive }) =>
									isActive
										? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
										: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
								}
								onClick={() => dispatch(sidebarToggler())}>
								<UserPlusIcon className="ml-2 h-6 w-6 transition duration-75" />
								<span className="ml-3 font-medium">Guru</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admin/data/pelajaran/diampu"
								className={({ isActive }) =>
									isActive
										? "flex items-center rounded-lg bg-indigo-100 p-2 text-base font-semibold text-indigo-700 hover:bg-indigo-200"
										: "flex items-center rounded-lg p-2 text-base font-normal text-gray-600 hover:bg-indigo-100"
								}
								onClick={() => dispatch(sidebarToggler())}>
								<ClipboardDocumentIcon className="ml-2 h-6 w-6 transition duration-75" />
								<span className="ml-3 font-medium">Pelajaran Diampu</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
