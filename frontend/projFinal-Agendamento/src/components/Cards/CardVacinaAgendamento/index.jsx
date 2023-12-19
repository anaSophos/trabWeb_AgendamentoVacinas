import React from 'react'
import Button from '../../Button'

const CardVacina = ({nameVaccine, qtd, hospitalName, childrenButton, onClickbutton}) => {
  return (
    <div className="xl:w-[23%] lg:w-[30%] sm:w-[45%] w-[80%] h-[350px] bg-[#E8F1F3] border border-solid border-[#9fdfed] hover:border-[#016494] rounded-[18px] mt-5 flex-col flex place-content-center justify-center text-center m-auto">
      <img src={`/Imagens/iconSeringa.png`} className='mx-auto w-[30%] pb-2'/>
      
      <h1 className='mx-auto pb-12 text-xl font-bold'>{nameVaccine}</h1>
      
      <div className='mx-auto pb-5'>
        <div className='flex-row flex pb-2'>
          <img src='Imagens/iconPeople.svg' className='mr-3.5'/>
          <p>{qtd}</p> 
        </div>
        <div className='flex flex-row'>
          <img src='Imagens/iconMap.svg' className='mr-3.5' />
          <p>Posto de saúde: {hospitalName}</p>
        </div>
      </div>
      
      <div className='mx-auto'>
        <button className={`sm:w-[259px] w-[220px] h-[56px] bg-[#1C99E0] rounded-[18px] text-[#FFFFFF] font-bold text-xl border border-solid border-[#1C99E0]`} onClick={onClickbutton}>{childrenButton}</button>
      </div>
    </div>
  )
}
export default CardVacina
