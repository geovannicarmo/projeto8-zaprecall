import styles from './Deck.module.css'
import logo from '../assets/images/logo.png'
import Card from './card/Card'
import Pergunta from './card/Pergunta';

import React from 'react';

const perguntaarray=[{number:1, questiom:"O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"}, {number:2, questiom:"O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces"} , {number:3, questiom:"Componentes devem iniciar com __ ", answer: "letra maiúscula"} , {number:3, questiom:"Componentes devem iniciar com __ ", answer: "letra maiúscula"}, ]

let teste

export default function Deck(){
    const [acertos, setAcertos] = React.useState([])
    let [acertos1, setAcertos1] = React.useState([])

  teste=acertos
    

        return(
            <>
            
            <div className={styles.conteiner}>
                <div className={styles.top}>
                    <img src={logo} alt="" />
                    <h1>ZapRecall</h1>
                </div>

              <div className={styles.tdcards}>
                {perguntaarray.map((perguntaarray,index) => <Card event={Deck} texte={index} perguntaarray={perguntaarray} key={index} icon={"play-outline"} classe={"className={styles.nPegunta}"} acertos={acertos} setAcertos={setAcertos} teste={teste}/>
                
                
               
               )}
               </div>

                <div className={styles.bottom}>
                    { <h2>{acertos.length}/4 Concluídos</h2> }

                    <div>   {acertos.map(acerto=>{
                        if(acerto===1){

                            return <ion-icon style={{color:"#FF3030ed"}} name="close-circle"></ion-icon>
                        }
                        if(acerto===2){

                            return <ion-icon style={{color:"#FF922E"}} name="help-circle"></ion-icon>
                        }
                        else{
                            return <ion-icon style={{color:"#2FBE34"}} name="checkmark-circle"></ion-icon>
                            
                        }

                    })}</div>

                  
                   
                
                </div>
            </div>
            </>
        )
    
}

