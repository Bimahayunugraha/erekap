import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
	return (
		<>
			<div className="flex h-full overflow-y-auto">
				<div className="flex w-full flex-1 flex-col">
					<Header />
					<div className="pl-0 pt-16 md:pl-64 lg:pl-64">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
