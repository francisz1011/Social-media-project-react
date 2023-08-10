// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2RPM9z1VocKhU9UTQNc-57W1CBFotp3A",
  authDomain: "social-media-project-55959.firebaseapp.com",
  projectId: "social-media-project-55959",
  storageBucket: "social-media-project-55959.appspot.com",
  messagingSenderId: "822757416891",
  appId: "1:822757416891:web:e15fcf796d0c25ed34ee9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);