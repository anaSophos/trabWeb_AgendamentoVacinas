import React from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';

function FormCadastrarOperator(){
  return (
    <form className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] flex flex-col justify-center shadow-md">
      <div className="mb-4">
        <LabelForms htmlFor={"email"} children={"Login:"}/>
        <InputForm type={"email"} id={"email"} name={"email"} placeholder={"ex: maria.apare@hotmail.com"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"name"} children={"Nome Completo:"}/>
        <InputForm type={"text"} id={"name"} name={"name"} placeholder={"ex: Maria Beatriz Silva"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"hospital"} children={"Hospital:"}/>
        <InputForm type={"text"} id={"hospital"} name={"hospital"} placeholder={"ex: Posto de saúde Barretos"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"password"} children={"Senha:"}/>
        <InputForm type={"password"} id={"password"} name={"password"} placeholder={"ex: Mar.20"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"passwordConfir"} children={"Confirmar Senha:"}/>
        <InputForm type={"password"} id={"passwordConfir"} name={"passwordConfir"} placeholder={"ex: Mar.20"}/>
      </div>
      <div className="mb-4 pl-[35%]">
        <Button type={"submit"} children={"Criar Conta"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
      </div>
    </form>
  );
};

export default FormCadastrarOperator;