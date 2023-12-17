import React from 'react'
import Button from '../../Button'

const CardListOperator = ({nameVacina, nameFabricante, qtdVacina}) => {
  return (
    <div className="w-[90%] h-[83px] bg-[#F8F8F8] border border-solid border-[#9D9CE4] hover:border-[#016494] flex-row flex justify-between m-auto items-center p-8">
        <img src='/Imagens/iconSeringa.png' className='w-[59px] h-[55px]'/>
        <div className='flex flex-col'>
            <p className='text-2xl font-bold text-[#13293D]'>{nameVacina} - {nameFabricante}</p>
            <p className='text-[#13293D]'>Quantidade: {qtdVacina}</p>
        </div>
        <Button children={"ATUALIZAR"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
        <Button children={"AGENDAMENTOS"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
    </div>
  )
}
export default CardListOperator
