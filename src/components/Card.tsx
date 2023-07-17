import { useState} from 'react';
import './Card.css'

export default function Card({id,comment,chatId,rating}) {
    const [visto, setVisto] = useState(false)

    function cardVista(e){

        if(e.target.id && visto == false){
          setVisto(true)
        }
    
      }
    

    return (
        <div className="card">
            <div className="comentario_contendor"  key={comment} id={id} onClick={cardVista}>
                <h2>{chatId}</h2>
                <p>{comment}</p>
                <span>
                    <b>Rating:</b>
                    {rating}/5
                </span>
            </div>
        </div>
    )
}

// {visto? "comentario_contendor" :'comentario_contendor_check'}