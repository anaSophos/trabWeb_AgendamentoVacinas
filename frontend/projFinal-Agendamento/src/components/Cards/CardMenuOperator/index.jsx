import React from 'react'
import Button from '../../Button'
import { Link } from 'react-router-dom'

const CardMenuOperator = ({urlImagem, childrenButton, redirec}) => {
  return (
    <div className="xl:w-[30%] lg:w-[30%] sm:w-[45%] w-[80%] h-[350px] bg-[#E8F1F3] border border-solid border-[#9fdfed] hover:border-[#016494] rounded-[18px] mt-5 flex-col flex place-content-center justify-center text-center m-auto">
      <img src={urlImagem} className='mx-auto w-[30%] pb-2'/>
      
      <div className='mx-auto'>
        <Link to={redirec}>
          <Button children={childrenButton} colorButton={'bg-[#1C99E0]'} colorText={'text-[#FFFFFF]'}/>
        </Link>
      </div>
    </div>
  )
}
export default CardMenuOperator
