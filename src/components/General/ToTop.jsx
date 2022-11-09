import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { scrolling } from "../../stores/features/scrollSlice";

const ToTop = () => {
	const scroll = useSelector((state) => state.scroll);
	const dispatch = useDispatch();

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleScrollVisibility = () => {
		if (window.scrollY > 200) {
			dispatch(scrolling(true));
		} else {
			dispatch(scrolling(false));
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollVisibility);

		return () => {
			window.removeEventListener("scroll", handleScrollVisibility);
		};
	});

	return (
		<div>
			<button
				onClick={handleScrollToTop}
				className={
					scroll
						? "visible fixed right-4 bottom-4 z-[99999] flex h-10 w-10 items-center justify-center rounded-lg border-0 bg-indigo-600 opacity-[1] transition-all duration-300 hover:bg-indigo-700 hover:text-gray-100"
						: "fixed right-4 bottom-4 z-[99999] hidden h-10 w-10 items-center justify-center rounded-lg border-0 bg-indigo-600 opacity-0 transition-all duration-300 hover:bg-indigo-700 hover:text-gray-100"
				}>
				<ArrowUpIcon className="h-4 w-4 text-gray-50" />
			</button>
		</div>
	);
};

export default ToTop;
