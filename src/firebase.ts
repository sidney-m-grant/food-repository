// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
{/*}
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}; */}

const firebaseConfig = {
  apiKey: "AIzaSyBDSCQP_UpYb6lIXBSn7btpvmZpoOZN-wk",
  authDomain: "food-repository-979fd.firebaseapp.com",
  projectId: "food-repository-979fd",
  storageBucket: "food-repository-979fd.appspot.com",
  messagingSenderId: "882861869923",
  appId: "1:882861869923:web:3fcfd34e61a36abd2f2156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
export const auth = getAuth(app)
export default app