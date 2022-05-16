import style from "./pergunta.module.css"
import React from 'react';

export default function Resposta({eventPergunta, aPergunta, aReposta, setModeCard1, acertos}){
    

    return(
    <>
    <div className={style.pergunta}>
        <h3>{aPergunta}</h3>
        <div className={style.buttonsResposta }>

        <div  className={style.respostaErrada}  onClick={()=>acertos(1)}>
             Não lembrei!
            </div>
            <div className={style.meiaCerta}  onClick={()=>acertos(2)}>
                Quase não lembrei!
            </div>
            <div className={style.buttonResposta}  onClick={()=>acertos(0)}>
                zap
            </div>
        </div>
                  
    </div>
    </>
    )
}

