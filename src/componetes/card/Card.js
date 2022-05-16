import React from 'react';
import styles from './card.module.css'
import Pergunta from './Pergunta';
import Resposta from './Resposta';
import CardEnd from './CardEnd';


    



export default function Card({event, texte, perguntaarray, icon, setAcertos, acertos, teste}){

     const [modeCard1, setModeCard1] = React.useState(false)
     const [modeCard2, setModeCard2] = React.useState(false)
     const [modeCard3, setModeCard3] = React.useState(false)

     const [classe, setClasse] = React.useState(0)
    

   

    // function contar () {
        
    //     setModeCard1(1);

    // }
    
    


    function acert(classe){
        console.log(classe)

        if(classe===1){
            setClasse(1)
        }

        if(classe===2){
            setClasse(2)
        }


         setModeCard3(true)

             setAcertos([...acertos, classe])
       
    }
    console.log(classe)


   

    
   function ModeCard(respondida){
    
    
       return(
            
        <>
       
        <div  className={styles.nPegunta} >
              <h3 >Pergunta {perguntaarray.number} </h3>
               <ion-icon onClick={()=>setModeCard1(true)}
             
                    name={icon}></ion-icon>


                   </div>
     
       </>
       )

       
   }
   


    return (
        <>

        { !modeCard1?
            <ModeCard icon={"play-outline"}/>
           : !modeCard2 ?
            <Pergunta setModeCard2={()=>setModeCard2(true)} aPergunta={perguntaarray.questiom} aReposta={perguntaarray.answer} />
            : !modeCard3 ?
            <Resposta aPergunta={perguntaarray.answer} acertos={(numero)=>acert(numero)}  />
            : classe===1 ?
            <CardEnd  texte={texte} icon={"close-circle"} classe={classe} setAcertos={setAcertos} acertos={acertos} color={"respondida1"}/>
            : classe===2  ?
            <CardEnd  texte={texte} icon={"help-circle"} classe={classe} color={"respondida2"}/> 
            :<CardEnd  texte={texte} icon={"checkmark-circle"} classe={classe} color={"respondida3"}/>
            
         }
        

       
    </>
        )
        
    }


