import React from "react";
import { Link } from "react-router-dom";

import defaultImage from "../../assets/img/png/default-image.png";

const PelajaranDiampuListItem = ({ data }) => {
	return (
		<Link to={`/admin/detail/pelajaran/diampu/${data.mata_pelajaran_id}`}>
			<div className="mb-10 rounded-md border border-gray-200 bg-white">
				<img className="w-full rounded-t-lg bg-cover" src={defaultImage} alt="img-default" />
				<div className="p-2 text-center">
					<h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 lg:text-base">{data.mata_pelajaran.nama_pelajaran}</h5>
				</div>
			</div>
		</Link>
	);
};

export default PelajaranDiampuListItem;
