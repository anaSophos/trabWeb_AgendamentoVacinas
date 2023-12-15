import React from 'react'
import { Link } from 'react-router-dom'

const BotaoVoltar = ({to}) => {
  return (
    <button>
        <Link to={to}>Voltar</Link>
    </button>
  )
}

export default BotaoVoltar
