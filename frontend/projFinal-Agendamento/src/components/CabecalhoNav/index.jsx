import { Link } from "react-router-dom"
import styles from './CabecalhoNav.module.css'

function CabecalhoNav({url, children}){
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoNav