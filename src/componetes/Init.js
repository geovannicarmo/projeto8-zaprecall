import styles from './Init.module.css'
import stylebUtton from './Button.module.css'
import logo from '../assets/images/logo.png'
export default function Init({setTelas}){
    return(
        
        <>
        <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
        <Button/>
        </div>
        </>
    )


function Button(){
    return(
        <div onClick={(clickd)} className={stylebUtton.Button}>
            <h2>Iniciar Recall!</h2>
        </div>
    )
}

function clickd(){
    setTelas(true)
}
}