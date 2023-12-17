import React from 'react'

function LabelForms({htmlFor, children}){
  return (
    <label htmlFor={htmlFor} className="block text-xl font-bold mb-2 text-[#13293D]">{children}</label>
  )
}
export default LabelForms

