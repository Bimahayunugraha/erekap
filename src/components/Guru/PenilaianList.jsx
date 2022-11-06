import React from "react";
import PenilaianListItem from "./PenilaianListItem";

const PenilaianList = () => {
	return (
		<div className="container mx-auto py-6 px-2">
			<div className="flex flex-wrap">
				<div className="w-full px-4 lg:w-1/2 xl:w-1/5">
					<PenilaianListItem />
				</div>
			</div>
		</div>
	);
};

export default PenilaianList;
