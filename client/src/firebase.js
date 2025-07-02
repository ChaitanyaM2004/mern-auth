// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-63c22.firebaseapp.com",
  projectId: "mern-auth-63c22",
  storageBucket: "mern-auth-63c22.firebasestorage.app",
  messagingSenderId: "4631030349",
  appId: "1:4631030349:web:937a45d5553eebb1fd4a04"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);