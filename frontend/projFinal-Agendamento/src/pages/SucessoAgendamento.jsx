import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import ContainerValidacao from '../components/Container/ContainerValidacao/index.jsx';

const SucessoAgendamento = () => {
  return (
    <>
    <Cabecalho nav1={"Consultar Vacinas"} urlNav1={"/vacinas"} nav2={"Meus Agendamentos"} urlNav2={"/meus-agendamentos"}/>
    <div className='py-[5%]'>
    <ContainerValidacao children={'Vacina agendada com sucesso !'} childrenButton1={'Meus Agendamentos'} childrenButton2={'Voltar a tela inicial'}/>
    </div>
    <Rodape />
    </>
  )
}

export default SucessoAgendamento
