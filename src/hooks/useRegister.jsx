import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../configs/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Alert = MySwal.mixin({
	toast: false,
	showConfirmButton: true,
	customClass: {
		container: "custom-toast",
	},
});

export default function Register() {
	const register = async (name, email, password, role) => {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;

		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			role,
			email,
		});

		setTimeout(
			() =>
				Alert.fire({
					icon: "success",
					title: <strong>Sukses</strong>,
					text: "Register berhasil",
					background: "#fefefe",
					confirmButtonColor: "#0000ff",
				}),
			2000
		);
	};
	return register;
}
