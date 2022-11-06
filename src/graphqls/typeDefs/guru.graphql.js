import { gql } from "@apollo/client";

export const GetGuru = gql`
	query GetGuru {
		erekap_guru {
			id
			nama_depan
			nama_belakang
			nip
			jenis_kelamin
			nomor_telepon
		}
	}
`;

export const SubscriptionGuru = gql`
	subscription SubscriptionGuru {
		erekap_guru_aggregate(order_by: { nama_depan: asc }) {
			aggregate {
				count
			}
			nodes {
				id
				nama_depan
				nama_belakang
				nip
				jenis_kelamin
				nomor_telepon
			}
		}
	}
`;

export const AddGuru = gql`
	mutation AddGuru($nama_depan: String, $nama_belakang: String, $nip: String, $jenis_kelamin: String, $nomor_telepon: String) {
		insert_erekap_guru_one(
			object: { nama_depan: $nama_depan, nama_belakang: $nama_belakang, nip: $nip, jenis_kelamin: $jenis_kelamin, nomor_telepon: $nomor_telepon }
		) {
			id
			nama_depan
			nama_belakang
			nip
			jenis_kelamin
			nomor_telepon
		}
	}
`;

export const EditGuru = gql`
	mutation EditGuru($id: Int!, $nama_depan: String, $nama_belakang: String, $jenis_kelamin: String, $nomor_telepon: String) {
		update_erekap_guru_by_pk(
			pk_columns: { id: $id }
			_set: { nama_depan: $nama_depan, nama_belakang: $nama_belakang, jenis_kelamin: $jenis_kelamin, nomor_telepon: $nomor_telepon }
		) {
			id
			nama_depan
			nama_belakang
			nip
			jenis_kelamin
			nomor_telepon
		}
	}
`;

export const DeleteGuru = gql`
	mutation DeleteGuru($id: Int!) {
		delete_erekap_guru_by_pk(id: $id) {
			id
			nama_depan
			nama_belakang
			nip
			jenis_kelamin
			nomor_telepon
		}
	}
`;
