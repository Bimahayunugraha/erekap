import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/img/svg/Icon.svg";

const LoginPage = () => {
	return (
		<div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
			<div className="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
				<Link to="/" className="flex items-center justify-center pt-6 text-2xl font-semibold text-gray-900">
					<img src={icon} className="h-12 w-12" alt="Logo" />
				</Link>
				<div className="space-y-4 p-6 sm:p-8 md:space-y-6">
					<h1 className="pb-2 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login</h1>
					<form className="space-y-4 md:space-y-6">
						<div>
							<label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
								<span className="block after:ml-1 after:text-red-500 after:content-['*']">Email</span>
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Masukkan email"
								required
								autoFocus
							/>
						</div>
						<div>
							<label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900">
								<span className="block after:ml-1 after:text-red-500 after:content-['*']">Password</span>
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Masukkan password"
								className="block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300">
							Login
						</button>
						<p className="text-center text-sm font-light text-gray-500 ">
							Belum memiliki akun?
							<Link to="/register" className="ml-1 font-medium text-indigo-600 hover:underline">
								Daftar
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
