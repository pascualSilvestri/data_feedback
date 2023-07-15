import './App.css'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {fireDB} from './firebase'
import { useState,useEffect} from 'react';

function App() {

  const [comment, setComment] = useState<string[]>([]);

  const fire = fireDB

  useEffect(()=>{
    getCollectionData();
  },[])
  const db = getFirestore(fire);


const getCollectionData = async () => {
  const arr = []
    try {
      const querySnapshot = await getDocs(collection(db, "feedbacks"));
      querySnapshot.forEach((doc) => {

       
        //obtener los comentarios de la bse de datos
        // console.log(doc.data().comment)
        arr.push(doc.data().comment)
        setComment(arr)
        //Obteniendo la data de la base de datos 
        // console.log(doc.data());
      });
    } catch (error) {
      console.error("Error al obtener los datos de la colección:", error);
    }
  };
  
  // Llamar a la función para obtener los datos de la colección


  
  return (
    <>
      <h3>{comment?.map(c=>(
        <div key={c}>
          <p>{c}</p>
        </div>
      ))}</h3>
    </>
  )
}

export default App
