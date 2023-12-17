import React from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';

function FormLogin(){
  return (
    <form className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] flex flex-col justify-center shadow-md">
      <div className="mb-4">
        <LabelForms htmlFor={"email"} children={"Login:"}/>
        <InputForm type={"email"} id={"email"} name={"email"} placeholder={"ex: maria.apare@hotmail.com"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"password"} children={"Senha:"}/>
        <InputForm type={"password"} id={"password"} name={"password"} placeholder={"ex: Mar.20"}/>
      </div>
      <div className="mb-4 pl-[35%]">
        <Button type={"submit"} children={"ACESSAR"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
      </div>
      <div className="mb-4 pl-[35%]">
        <Button children={"Criar conta"} colorButton={"bg-[#FCFEFF]"} colorText={"text-[#1C99E0]"}/>
      </div>
    </form>
  );
};

export default FormLogin;