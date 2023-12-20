import React, {useState, useEffect} from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import axios from 'axios';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import { Link } from 'react-router-dom';

function FormCadatrarVacina({onSubmit}){
  const { usuario } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const qty = event.target.qty.value;

    try {
      const headers = {
          Authorization: `Bearer ${usuario.token}`,
      };

      const response = await axios.post('http://localhost:3001/vac/create', { name, description, qty, provider:usuario.hospital }, { headers });

      onSubmit(name, description, qty, usuario.hospital);
  } catch (error) {
      console.error('Error creating vaccine: '+ error.response?.data.message);
      alert("Erro ao cadastrar vacina no seu hospital. Detalhes:" + error.response?.data.message)
  }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] flex flex-col justify-center shadow-md">
      <div className="mb-4">
        <LabelForms htmlFor={"name"} children={"Nome:"}/>
        <InputForm type={"text"} id={"name"} name={"name"} placeholder={"ex: Febre Amarela"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"description"} children={"Descrição:"}/>
        <InputForm type={"text"} id={"description"} name={"description"} placeholder={"ex: Febre Amarela"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"qty"} children={"Quantidade:"}/>
        <InputForm type={"number"} id={"qty"} name={"qty"} placeholder={"ex: 10"}/>
      </div>
      <div className="mb-4 pl-[35%]">
        <Button type={"submit"} children={"CRIAR/ATUALIZAR"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
      </div>
      <div className="mb-4 pl-[35%]">
        <Link to={"/home-operator"}>
        <Button children={"CANCELAR"} colorButton={"bg-[#FCFEFF]"} colorText={"text-[#1C99E0]"}/>
        </Link>
      </div>
    </form>
  );
};

export default FormCadatrarVacina;