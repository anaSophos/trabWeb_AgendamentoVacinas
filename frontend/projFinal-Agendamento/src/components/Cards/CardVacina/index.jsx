import React from 'react'
import Style from './CardImagem.module.css'
import { Link } from 'react-router-dom'

const CardVacina = ({to, url}) => {
  return (
    <div className="">
        <Link to={to}>
            <img className={Style.img} src={url}/>
        </Link>
    </div>
  )
}
export default CardVacina
