import React, {useState} from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import { Link } from 'react-router-dom';

function FormComponent({onSubmit}){
  const [passwordMatchError, setPasswordMatchError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const name = formData.get('name');
    const cpf = formData.get('cpf');
    const rg = formData.get('rg');
    const phoneNum = formData.get('phoneNum');
    const birth = formData.get('birth');
    const password = formData.get('password');
    const passwordConfir = formData.get('passwordConfir');
    if (password !== passwordConfir) {
      setPasswordMatchError('As senhas não coincidem');
      return;
    }

    setPasswordMatchError(null);
    onSubmit(email, name, cpf, rg, phoneNum, birth, password);
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
        <LabelForms htmlFor={"name"} children={"Nome Completo:"}/>
        <InputForm type={"text"} id={"name"} name={"name"} placeholder={"ex: Maria Beatriz Silva"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"cpf"} children={"CPF:"}/>
        <InputForm type={"number"} id={"cpf"} name={"cpf"} placeholder={"ex: 958.295.958-88"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"rg"} children={"RG:"}/>
        <InputForm type={"number"} id={"rg"} name={"rg"} placeholder={"ex: 45.788.000-25"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"phoneNum"} children={"Telefone:"}/>
        <InputForm type={"number"} id={"phoneNum"} name={"phoneNum"} placeholder={"ex: (98) 99229-1919"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"birth"} children={"Data de Nascimento:"}/>
        <InputForm type={"birth"} id={"birth"} name={"birth"} placeholder={"ex: 15/05/1999"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"password"} children={"Senha:"}/>
        <InputForm type={"password"} id={"password"} name={"password"} placeholder={"ex: Mar.20"}/>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"passwordConfir"} children={"Confirmar Senha:"}/>
        <InputForm type={"password"} id={"passwordConfir"} name={"passwordConfir"} placeholder={"ex: Mar.20"}/>
      </div>
      {passwordMatchError && <p className="text-red-500">{passwordMatchError}</p>}
      <div className="mb-4 pl-[35%]">
        <Button type={"submit"} children={"Criar Conta"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
      </div>
    </form>
  );
};

export default FormComponent;