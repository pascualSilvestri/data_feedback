import { getFirestore, collection, getDocs } from "firebase/firestore";
import { fireDB } from '../firebase';
import { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const [feedback, setFeedback] = useState<Array<Feedback>>([]);

  const fire = fireDB;

  useEffect(() => {
    getCollectionData();
  }, []);

  const db = getFirestore(fire);

  function formatearChatId(arg: string): string {
    const indiceDelGuion = arg.indexOf('-') + 1;
    const fechaFormateada = arg.slice(indiceDelGuion, indiceDelGuion + 10);
    return fechaFormateada;
  }

  interface Feedback {
    comment: string;
    chatId: string;
    rating: number;
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
        {feedback?.map((c) => (
          <div className="comentario_contendor" key={c.comment}>
            <h2>{c.chatId}</h2>
            <p>{c.comment}</p>
            <span>
              <b>Rating:</b>
              {c.rating}/5
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
