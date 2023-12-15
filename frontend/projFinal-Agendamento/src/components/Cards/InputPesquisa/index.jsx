import React from 'react'
import iconLupa from '../../../assets/iconLupa.png'
import { Link } from 'react-router-dom'

function Input({type, placeholder}){
  return (
    <div className='mt-12 p-5 mx-auto rounded-md w-[90%] bg-[#E8F1F3] border border-solid border-[#9fdfed] hover:border-[#016494] justify-between flex flex-row'>
        <input type={type} placeholder={placeholder} 
            className='lg:text-[.9em] text-[.8em] bg-transparent w-[70%]'
        ></input>
        <button>
        <img
            src={iconLupa}
            alt="Ícone de lupa"
            className="w-[30px]"
            />
        </button>
    </div>
  )
}
export default Input