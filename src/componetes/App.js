import '../assets/reset.css'
import '../assets/style.css'
import React from 'react'


import Init from "./Init"
import Deck from "./Deck"
export default function App(){

const [telas, setTelas]= React.useState(false)

    return(
        <>
          {!telas ?
          <Init setTelas={setTelas}/>
          :
          <Deck/>

          }
         
        </>
    )
}