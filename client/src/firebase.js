// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-8077f.firebaseapp.com",
  projectId: "real-estate-8077f",
  storageBucket: "real-estate-8077f.appspot.com",
  messagingSenderId: "354494264503",
  appId: "1:354494264503:web:75d34e03ef550ac0eb4932",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
