import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import Input from '../components/Inputs/InputPesquisa/index.jsx';
import CardVacina from '../components/Cards/CardVacinaAgendamento/index.jsx';

const VacinasBusca = () => {
  return (
    <>
    <Cabecalho/>
    <TituloPrincipal children={"Vacinas"}/>
    <Input type={'text'} placeholder={"Pesquise a vacina que você deseja encontrar"}/>
    <div className=' w-[90%] m-auto flex-row flex justify-between flex-wrap mb-[5%]'>
        <CardVacina nameVaccine={'Covid-19'} qtd={`Quantidade disponível: ${1}`} hospitalTime={2} childrenButton={'AGENDAR VACINA'}/>
        <CardVacina/>
        <CardVacina/>
        <CardVacina/>
    </div>
    <Rodape />
    </>
  )
}

export default VacinasBusca
