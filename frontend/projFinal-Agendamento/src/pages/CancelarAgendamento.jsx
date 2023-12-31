import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape/index.jsx';
import ContainerValidacao from '../components/Container/ContainerValidacao/index.jsx';

const CancelamentoAgendamento = () => {
  return (
    <>
    <Cabecalho/>
    <div className='py-[5%]'>
    <ContainerValidacao children={'Agendamento cancelado com sucesso !'} childrenButton1={'Meus Agendamentos'} direction1={'/meus-agendamentos'} childrenButton2={'Voltar a tela inicial'} direction2={'/vacinas'}/>
    </div>
    <Rodape />
    </>
  )
}

export default CancelamentoAgendamento
