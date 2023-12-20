import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button'

function ContainerValidacao({children, childrenButton1, direction1, childrenButton2, direction2}){
  return (
    <div className='w-[80%] h-[481px] bg-[#E8F1F3] m-auto border border-solid border-[#9fdfed] flex flex-col items-center'>
      <div className='m-auto grid justify-items-center'>
        <div className='flex flex-row justify-center flex-wrap pb-20'>
          <h2 className='pr-3 text-3xl font-bold'>{children}</h2>
          <img src='/Imagens/iconOk.png'/>
        </div>
        <div className='pb-5'>
          <Link to={direction1}>
          <Button children={childrenButton1} colorButton={'bg-[#1C99E0]'} colorText={'text-[#FFFFFF]'}/>
          </Link>
        </div>
        <div>
          <Link to={direction2}>
          <Button children={childrenButton2} colorButton={'bg-[#FCFEFF]'} colorText={'text-[#13293D]'}/>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ContainerValidacao