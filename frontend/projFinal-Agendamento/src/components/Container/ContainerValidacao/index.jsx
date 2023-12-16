import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button'

function ContainerValidacao({children, childrenButton1, childrenButton2}){
  return (
    <div className='w-[80%] h-[481px] bg-[#E8F1F3] m-auto border border-solid border-[#9fdfed] flex flex-col items-center'>
      <div className='m-auto grid justify-items-center'>
        <div className='flex flex-row justify-center flex-wrap pb-20'>
          <h2 className='pr-3 text-3xl font-bold'>{children}</h2>
          <img src='/Imagens/iconOk.png'/>
        </div>
        <div className='pb-5'>
          <Button children={childrenButton1} colorButton={'bg-[#1C99E0]'} colorText={'text-[#FFFFFF]'}/>
        </div>
        <div>
          <Button children={childrenButton2} colorButton={'bg-[#FCFEFF]'} colorText={'text-[#13293D]'}/>
        </div>
      </div>
    </div>
  )
}
export default ContainerValidacao