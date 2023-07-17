import { getFirestore, collection, getDocs } from "firebase/firestore";
import { fireDB } from '../firebase';
import { useState, useEffect } from 'react';
import './Home.css';
import { v4 as uuidv4 } from 'uuid';
import Card from "../components/Card";

export default function Home() {
  const [feedback, setFeedback] = useState<Array<Feedback>>([]);
  

  const fire = fireDB;
  const db = getFirestore(fire);

  interface Feedback {
    comment: string;
    chatId: string;
    rating: number;
  }

  useEffect(() => {
    getCollectionData();
  }, []);

 

  function formatearChatId(arg: string): string {
    const indiceDelGuion = arg.indexOf('-') + 1;
    const fechaFormateada = arg.slice(indiceDelGuion, indiceDelGuion + 10);
    return fechaFormateada;
  }

  

  const getCollectionData = async () => {
    try {
      const arr1: Feedback[] = [];
      const querySnapshot = await getDocs(collection(db, "feedbacks"));
      querySnapshot.forEach((doc) => {
        const arr: Feedback = {
          comment: doc.data().comment,
          chatId: formatearChatId(doc.data().chatId),
          rating: doc.data().rating
        };

        arr1.push(arr);
      });

      arr1.sort((a, b) => {
        return b.rating - a.rating;
      });

      setFeedback(arr1);
    } catch (error) {
      console.error("Error al obtener los datos de la colección:", error);
    }
  };

  return (
    <>
      <div className="home_contenedor">
        {
        feedback?.map((c) => (
          <Card 
          comment={c.comment}
          chatId={c.chatId}
          rating={c.rating}
          id={uuidv4()}
          key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
}
