import { getFirestore, collection, getDocs } from "firebase/firestore";
import { fireDB } from '../firebase'
import { useState, useEffect } from 'react';
import './Home.css'


export default function Home() {

    const [comment, setComment] = useState<string[]>([]);

    const fire = fireDB

    useEffect(() => {
        getCollectionData();
    }, [])
    const db = getFirestore(fire);


    const getCollectionData = async () => {

        try {
            const arr: string[] = []
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

    return (
        <>
            <div className="home_contenedor">
                {comment?.map(c => (
                    <div className="comentario_contendor" key={c}>
                        <p>{c}</p>
                    </div>
                ))}
            </div>
        </>
    )
}