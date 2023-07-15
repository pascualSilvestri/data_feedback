// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = import.meta.env.VITE_API_KEY_FIREDB

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "nativai.firebaseapp.com",
  projectId: "nativai",
  storageBucket: "nativai.appspot.com",
  messagingSenderId: "1075824541262",
  appId: "1:1075824541262:web:99d03a1d5adc9f75954d1f",
  measurementId: "G-R2CNCP57QV"
};

// Initialize Firebase
export const fireDB = initializeApp(firebaseConfig);


