import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import CardVacina from '../components/Cards/CardVacinaAgendamento/index.jsx';

const MyAgendamentos = () => {
  return (
    <>
    <Cabecalho/>
    <TituloPrincipal children={"Meus Agendamentos"}/>
    <div className=' w-[90%] m-auto flex-row flex justify-between flex-wrap mb-[5%]'>
        <CardVacina nameVaccine={'Covid-19'} qtd={`Quantidade agendada: ${1}`} hospitalTime={2} childrenButton={'CANCELAR'}/>
    </div>
    <Rodape />
    </>
  )
}

export default MyAgendamentos
