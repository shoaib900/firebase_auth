import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyATK-6ToheuwZPi1SlADSFskRCeQU2ABgQ",
  authDomain: "auth-1pm.firebaseapp.com",
  projectId: "auth-1pm",
  storageBucket: "auth-1pm.appspot.com",
  messagingSenderId: "252858086754",
  appId: "1:252858086754:web:17d4c653a84297041fe83b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth}