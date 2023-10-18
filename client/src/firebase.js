// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cd4d7.firebaseapp.com",
  projectId: "mern-estate-cd4d7",
  storageBucket: "mern-estate-cd4d7.appspot.com",
  messagingSenderId: "151482593813",
  appId: "1:151482593813:web:8bbaf3f15264e846e4941c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);