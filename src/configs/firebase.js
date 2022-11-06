import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCtlzwFoP9tnDYkV-6QDyynzHa2cXXulJ4",
	authDomain: "rekap-data-nilai.firebaseapp.com",
	projectId: "rekap-data-nilai",
	storageBucket: "rekap-data-nilai.appspot.com",
	messagingSenderId: "185872777957",
	appId: "1:185872777957:web:571f4902ec671ff19b8a0c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
