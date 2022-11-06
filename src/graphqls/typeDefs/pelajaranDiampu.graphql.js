import { gql } from "@apollo/client";

export const AddGuruPelajaran = gql`
	mutation AddGuruPelajaran($objects: [erekap_guru_pelajaran_insert_input!] = {}) {
		insert_erekap_guru_pelajaran(objects: $objects) {
			returning {
				id
				guru_id
				mata_pelajaran_id
			}
		}
	}
`;

export const addSiswaPelajaranNilai = gql`
	mutation addSiswaPelajaranNilai($objects: [erekap_siswa_pelajaran_nilai_insert_input!] = {}) {
		insert_erekap_siswa_pelajaran_nilai(objects: $objects) {
			returning {
				id
				mata_pelajaran_id
				siswa_id
			}
		}
	}
`;

export const GetSiswaPelajaranNilai = gql`
	subscription GetSiswaPelajaranNilai {
		erekap_siswa_pelajaran_nilai(distinct_on: mata_pelajaran_id) {
			id
			mata_pelajaran {
				nama_pelajaran
			}
			siswa {
				nama_depan
				nama_belakang
			}
			mata_pelajaran_id
			siswa_id
		}
	}
`;

export const GetDetailPelajaranDiampu = gql`
	query GetDetailPelajaranDiampu($siswa_pelajaran: Int, $guru_pelajaran: Int) {
		erekap_siswa_pelajaran_nilai(where: { mata_pelajaran_id: { _eq: $siswa_pelajaran } }) {
			id
			siswa {
				nama_depan
				nama_belakang
			}
		}
		erekap_guru_pelajaran(where: { mata_pelajaran_id: { _eq: $guru_pelajaran } }) {
			id
			guru {
				nama_depan
				nama_belakang
			}
			mata_pelajaran {
				nama_pelajaran
			}
		}
	}
`;

export const SubscriptionSiswaPelajaranNilai = gql`
	subscription SubscriptionSiswaPelajaranNilai($mata_pelajaran_id: Int) {
		erekap_siswa_pelajaran_nilai(order_by: { siswa: { nama_depan: asc } }, where: { mata_pelajaran_id: { _eq: $mata_pelajaran_id } }) {
			id
			siswa {
				nama_depan
				nama_belakang
			}
			mata_pelajaran {
				nama_pelajaran
			}
			nilai
		}
	}
`;

export const EditSiswaPelajaranNilai = gql`
	mutation EditSiswaPelajaranNilai($id: Int!, $nilai: Int) {
		update_erekap_siswa_pelajaran_nilai_by_pk(pk_columns: { id: $id }, _set: { nilai: $nilai }) {
			id
			siswa {
				nama_depan
				nama_belakang
			}
			mata_pelajaran {
				nama_pelajaran
			}
			nilai
		}
	}
`;

export const DeleteSiswaPelajaranNilai = gql`
	mutation DeleteSiswaPelajaranNilai($id: Int!) {
		delete_erekap_siswa_pelajaran_nilai_by_pk(id: $id) {
			id
			siswa_id
			mata_pelajaran_id
			nilai
		}
	}
`;
