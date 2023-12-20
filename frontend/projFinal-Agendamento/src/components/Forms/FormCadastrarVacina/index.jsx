import React, {useState, useEffect} from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import axios from 'axios';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';

function FormCadatrarVacina({onSubmit}){
  const { usuario } = useAuthContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name');
    const description = formData.get('description');
    const qty = formData.get('qty');
    const hospital = usuario.hospital

    onSubmit(name, description, qty, hospital);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
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
      <div className="mb-4">
        <LabelForms htmlFor={"hospital"} children={"Hospital:"}/>
        <input
          type={"text"}
          id={"hospital"}
          name={"hospital"}
          value={usuario.hospital}
          onChange={() => {}}
          className='lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] rounded-[18px] outline-none'
        />
      </div>
      <div className="mb-4 pl-[35%]">
        <Button type={"submit"} children={"CRIAR/ATUALIZAR"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
      </div>
      <div className="mb-4 pl-[35%]">
        <Button children={"CANCELAR"} colorButton={"bg-[#FCFEFF]"} colorText={"text-[#1C99E0]"}/>
      </div>
    </form>
  );
};

export default FormCadatrarVacina;