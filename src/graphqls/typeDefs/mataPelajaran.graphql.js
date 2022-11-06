import { gql } from "@apollo/client";

export const GetMataPelajaran = gql`
	query GetMataPelajaran {
		erekap_mata_pelajaran_aggregate(order_by: { nama_pelajaran: asc }) {
			aggregate {
				count
			}
			nodes {
				id
				nama_pelajaran
			}
		}
	}
`;

export const SubscriptionMataPelajaran = gql`
	subscription SubscriptionMataPelajaran($nama_pelajaran: order_by = asc) {
		erekap_mata_pelajaran_aggregate(order_by: { nama_pelajaran: $nama_pelajaran }) {
			aggregate {
				count
			}
			nodes {
				id
				nama_pelajaran
			}
		}
	}
`;

export const AddMataPelajaran = gql`
	mutation AddMataPelajaran($nama_pelajaran: String) {
		insert_erekap_mata_pelajaran_one(object: { nama_pelajaran: $nama_pelajaran }, on_conflict: { constraint: mata_pelajaran_pkey }) {
			nama_pelajaran
		}
	}
`;

export const EditMataPelajaran = gql`
	mutation EditMataPelajaran($id: Int!, $nama_pelajaran: String) {
		update_erekap_mata_pelajaran_by_pk(pk_columns: { id: $id }, _set: { nama_pelajaran: $nama_pelajaran }) {
			nama_pelajaran
		}
	}
`;

export const DeleteMataPelajaran = gql`
	mutation DeleteMataPelajaran($id: Int!) {
		delete_erekap_mata_pelajaran_by_pk(id: $id) {
			id
			nama_pelajaran
		}
	}
`;
