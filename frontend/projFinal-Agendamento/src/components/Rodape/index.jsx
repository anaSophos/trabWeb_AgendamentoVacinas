import React from 'react'
import styles from './Rodape.module.css'

function Rodape({}){
  return (
    <footer className={styles.rodape}>
        <div className={styles.text}>
            <h3>Fique tranquilo, seus dados estão protegidos de acordo com nossa Política de Privacidade</h3>
        </div>
    </footer>
  )
}

export default Rodape