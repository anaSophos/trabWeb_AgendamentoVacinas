import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';

const AcessoNegado = () => {
  return (
    <>
    <Cabecalho/>
    <div className='py-[5%]'>
    <div className='w-[80%] h-[481px] bg-[#E8F1F3] m-auto border border-solid border-[#9fdfed] flex flex-col items-center'>
      <div className='m-auto grid justify-items-center'>
        <div className='flex flex-row justify-center flex-wrap pb-20'>
          <h2 className='pr-3 text-3xl font-bold text-[#13293D]'>STATUS 401: ACESSO NEGADO</h2>
        </div>
      </div>
    </div>
    </div>
    <Rodape />
    </>
  )
}

export default AcessoNegado