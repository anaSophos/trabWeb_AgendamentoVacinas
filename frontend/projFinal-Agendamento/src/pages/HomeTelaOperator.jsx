import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import Input from '../components/Inputs/InputPesquisa/index.jsx';
import CardMenuOperator from '../components/Cards/CardMenuOperator/index.jsx';
import CardListOperator from '../components/Cards/CardListVacinaOperator/index.jsx';

const HomeTelaOperator = () => {
  return (
    <>
    <Cabecalho/>
    <div className='pt-[5%] flex flex-wrap flex-row'>
    <CardMenuOperator urlImagem={"/Imagens/iconPeople.svg"} childrenButton={"Cadastrar Operador"}/>
    <CardMenuOperator urlImagem={"/Imagens/iconSchedule.png"} childrenButton={"Agendar Vacina"}/>
    </div>
    <div className='pt-[5%] pb-[2%]'><Input type={'text'} placeholder={"Pesquise a vacina que você deseja encontrar"}/></div>
    <div className='pb-[5%]'>
      <CardListOperator nameVacina={"Covid-19"} nameFabricante={"Astrazenica"} qtdVacina={2}/>
    </div>
    <Rodape />
    </>
  )
}

export default HomeTelaOperator
