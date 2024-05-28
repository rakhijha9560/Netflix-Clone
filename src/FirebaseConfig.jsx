
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEb3h-lbB8_mPdYgoku2ILHiEVu5u6NEs",
  authDomain: "emailpasswordlogin-9cbf3.firebaseapp.com",
  projectId: "emailpasswordlogin-9cbf3",
  storageBucket: "emailpasswordlogin-9cbf3.appspot.com",
  messagingSenderId: "315147429608",
  appId: "1:315147429608:web:cead8113b159767228cb5d"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

export default firebaseConfig;