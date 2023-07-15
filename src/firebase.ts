// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqNbgQ7uNJcXkKa6S1XPA89NaQLHhjxo",
  authDomain: "nativai.firebaseapp.com",
  projectId: "nativai",
  storageBucket: "nativai.appspot.com",
  messagingSenderId: "1075824541262",
  appId: "1:1075824541262:web:99d03a1d5adc9f75954d1f",
  measurementId: "G-R2CNCP57QV"
};

// Initialize Firebase
export const fireDB = initializeApp(firebaseConfig);

// const db = getFirestore(app);


// const getCollectionData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "feedbacks"));
//       querySnapshot.forEach((doc) => {

//         //obtener los comentarios de la bse de datos
//         console.log(doc.data().comment)
//         //Obteniendo la data de la base de datos 
//         // console.log(doc.data());
//       });
//     } catch (error) {
//       console.error("Error al obtener los datos de la colección:", error);
//     }
//   };
  
//   // Llamar a la función para obtener los datos de la colección
//   getCollectionData();

// console.log(app)