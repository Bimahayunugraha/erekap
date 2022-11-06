import React from "react";

const Dropdown = () => {
	return (
		<div className="absolute right-2 top-full z-10 mt-2 w-44 divide-y divide-gray-100 rounded bg-white shadow">
			<div className="py-1">
				<h4 className="block border-b border-gray-200 px-4 py-2 text-center font-semibold text-gray-600 hover:bg-gray-100"></h4>
				<button className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
			</div>
		</div>
	);
};

export default Dropdown;
