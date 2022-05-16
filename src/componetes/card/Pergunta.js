import style from "./pergunta.module.css"
import React from 'react';

export default function Pergunta({eventPergunta, aPergunta, aReposta, setModeCard2}){
    

    return(
    <>
    <div className={style.pergunta}>
        <h3>{aPergunta}</h3>
        <ion-icon id="virar" onClick={setModeCard2}
                     name="refresh-outline"></ion-icon>


                  
    </div>
    </>
    )
}

