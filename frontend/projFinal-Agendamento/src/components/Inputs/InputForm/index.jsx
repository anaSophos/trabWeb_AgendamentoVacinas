import React from 'react'
import { Link } from 'react-router-dom'

function InputForm({type, id, name, placeholder}){
  return (
    <input type={type} id={id} name={name} placeholder={placeholder}
        className='lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] rounded-[18px] outline-none'
    ></input>
  )
}
export default InputForm