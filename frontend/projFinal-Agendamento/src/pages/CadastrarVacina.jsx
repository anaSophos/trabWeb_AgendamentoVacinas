import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormCadatrarVacina from '../components/Forms/FormCadastrarVacina/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext.jsx';

const CadastrarVacina = () => {
  const { usuario } = useAuthContext();
  const navegacao = useNavigate();
  const handleSubmit = async(name, description, qty, hospital) => {
    try{
      const response = await axios.post('http://localhost:3001/vac/create', {
        name, 
        description,
        qty,
        hospital:usuario.hospital,
      })
      console.log(response)
      if (response.status === 201) {
        alert('Vacina cadastrada com sucesso!');
        navegacao('/cadastrar-vacina')
      }
    } catch (error){
      alert('Erro ao cadastrar vacina. Detalhe: ' + error.response?.data.message)
    }
  }

  return (
    <>
    <Cabecalho inicio={"Menu"} urlInicio={"/home-operator"} nav1={"Cadastrar Operador"} urlNav1={"/cadastrar-operator"} nav2={"Cadastrar Vacina"} urlNav2={"/cadastrar-vacina"}/>
    <TituloPrincipal children={"Cadastrar Vacina"}/>
    <div className='pb-[5%]'>
      <FormCadatrarVacina onSubmit={handleSubmit}/>
    </div>
      <Rodape />
    </>
  )
}

export default CadastrarVacina
