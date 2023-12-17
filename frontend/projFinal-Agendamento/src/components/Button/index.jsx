import React from 'react'
import { Link } from 'react-router-dom'

function Button({children, colorButton, colorText, type}){
  return (
    <button type={type} className={`sm:w-[259px] w-[220px] h-[56px] ${colorButton} rounded-[18px] ${colorText} font-bold text-xl border border-solid border-[#1C99E0]`}>{children}</button>
  )
}
export default Button