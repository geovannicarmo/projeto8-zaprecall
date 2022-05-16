import "./cardend.css"
import React from 'react';

export default function CardEnd({texte, icon, setAcertos, acertos, color}){

    return(
            
        <>
       
        <div  className={`nPegunta ${color}`} >
              <h3 >Pergunta {texte.number} {texte+1} </h3>
               <ion-icon 
             
                    name={icon}></ion-icon>
                         
                   </div>
     
       </>
       )

       
   }