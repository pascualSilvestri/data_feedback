import { getFirestore, collection, getDocs } from "firebase/firestore";
import { fireDB } from '../firebase'
import { useState, useEffect } from 'react';
import './Home.css'


export default function Home() {

    const [feedback, setFeedback] = useState<unknown[]>([]);

    const fire = fireDB

    useEffect(() => {
        getCollectionData();
    }, [])

    const db = getFirestore(fire);

    function formatearChatId(arg) {
        const indiceDelGuion = arg.indexOf('-') + 1;
      
        const fechaFormateada = arg.slice(indiceDelGuion, indiceDelGuion + 10);
      
        return fechaFormateada;
      }
      

    const getCollectionData = async () => {

        try {
            const arr1:unknown[] =[]
            const querySnapshot = await getDocs(collection(db, "feedbacks"));
            querySnapshot.forEach((doc) => {

                    const arr = {
                        comment: doc.data().comment,
                        chatId: formatearChatId(doc.data().chatId),
                        rating: doc.data().rating
                    };

                arr1.push(arr)
                arr1.sort((a,b)=>{
                    return b.rating - a.rating
                })

                setFeedback(arr1)
                //Obteniendo la data de la base de datos 
                // console.log(doc.data());
            });
        } catch (error) {
            console.error("Error al obtener los datos de la colección:", error);
        }
    };

    return (
        <>
            <div className="home_contenedor">
                {feedback?.map(c => (
                    <div className="comentario_contendor" key={c.comment}>
                        <h2>{c.chatId}</h2>
                        <p>{c.comment}</p>
                        <span><b>Rating:</b>{c.rating}/5</span>
                    </div>
                ))}
            </div>
        </>
    )
}