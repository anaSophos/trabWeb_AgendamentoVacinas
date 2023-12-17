import React, { useState } from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import { Link } from 'react-router-dom';

function FormLogin({ onSubmit }) {
  const [userType, setUserType] = useState('user'); // Valor padrão é 'user'

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    onSubmit(email, password, userType);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] flex flex-col justify-center shadow-md">
      <div className="mb-4">
        <LabelForms htmlFor={"email"} children={"Login:"}/>
        <InputForm type={"email"} id={"email"} name={"email"} placeholder={"ex: maria.apare@hotmail.com"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"password"} children={"Senha:"}/>
        <InputForm type={"password"} id={"password"} name={"password"} placeholder={"ex: Mar.20"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"userType"} children={"Entrar como:"}/>
        <select id="userType" name="userType" value={userType} onChange={handleUserTypeChange}
          className='lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] rounded-[18px] outline-none'>
          <option value="user">Usuário Cidadão</option>
          <option value="operator">Usuário Operador</option>
        </select>
      </div>
      <div className="mb-4 pl-[35%]">
        <Button type={"submit"} children={"ACESSAR"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
      </div>
      <div className="mb-4 pl-[35%]">
        <Link to={'/cadastrar-user'}>
          <Button children={"Criar conta"} colorButton={"bg-[#FCFEFF]"} colorText={"text-[#1C99E0]"}/>
        </Link>
      </div>
    </form>
  );
}

export default FormLogin;