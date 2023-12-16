import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import ContainerValidacao from '../components/Container/ContainerValidacao/index.jsx';

const CancelamentoAgendamento = () => {
  return (
    <>
    <Cabecalho/>
    <div className='py-[5%]'>
    <ContainerValidacao children={'Agendamento cancelado com sucesso !'} childrenButton1={'Meus Agendamentos'} childrenButton2={'Voltar a tela inicial'}/>
    </div>
    <Rodape />
    </>
  )
}

export default CancelamentoAgendamento
