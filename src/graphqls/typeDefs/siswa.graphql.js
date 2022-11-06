import { gql } from "@apollo/client";

export const GetSiswa = gql`
	query GetSiswa {
		erekap_siswa_aggregate(order_by: { nama_depan: asc }) {
			aggregate {
				count
			}
			nodes {
				id
				nama_depan
				nama_belakang
				jenis_kelamin
			}
		}
	}
`;

export const SubscriptionSiswa = gql`
	subscription SubscriptionSiswa($offset: Int, $limit: Int) {
		erekap_siswa_aggregate(order_by: { nama_depan: asc }, offset: $offset, limit: $limit) {
			aggregate {
				count
			}
			nodes {
				id
				nama_depan
				nama_belakang
				jenis_kelamin
			}
		}
	}
`;

export const AddSiswa = gql`
	mutation InsertSiswa($nama_depan: String, $nama_belakang: String, $jenis_kelamin: String) {
		insert_erekap_siswa_one(object: { nama_depan: $nama_depan, nama_belakang: $nama_belakang, jenis_kelamin: $jenis_kelamin }) {
			id
			nama_depan
			nama_belakang
			jenis_kelamin
		}
	}
`;

export const EditSiswa = gql`
	mutation EditSiswa($id: Int!, $nama_depan: String, $nama_belakang: String, $jenis_kelamin: String) {
		update_erekap_siswa_by_pk(
			pk_columns: { id: $id }
			_set: { nama_depan: $nama_depan, nama_belakang: $nama_belakang, jenis_kelamin: $jenis_kelamin }
		) {
			id
			nama_depan
			nama_belakang
			jenis_kelamin
		}
	}
`;

export const DeleteSiswa = gql`
	mutation DeleteSiswa($id: Int!) {
		delete_erekap_siswa_by_pk(id: $id) {
			id
			nama_depan
			nama_belakang
			jenis_kelamin
		}
	}
`;
