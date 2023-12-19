import React from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import axios from 'axios';

const FormAgendamento = ({ userId, vaccineId, vaccineName, hospitalName }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implemente a lógica de envio do formulário, incluindo os dados necessários (userId, vaccineId, vaccineName, hospitalName)
    try {
      await axios.post('http://localhost:3001/seu-endpoint-de-agendamento', {
        userId,
        vaccineId,
        vaccineName,
        hospitalName,
        // Outros dados do formulário, se houver
      });

      // Lógica de redirecionamento ou feedback de sucesso, se necessário
    } catch (error) {
      // Tratar erros de requisição, se necessário
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] flex flex-col justify-center shadow-md">
      <div className="mb-4">
        <LabelForms htmlFor={"idVac"} children={"Vacina:"}/>
        <InputForm type={"text"} id={"idVac"} name={"idVac"} defaultValue={vaccineId} readOnly />
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"idUser"} children={"Nome Completo:"}/>
        <InputForm type={"text"} id={"idUser"} name={"idUser"} defaultValue={userId} readOnly />
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"qty"} children={"Quantidade:"}/>
        <InputForm type={"number"} id={"qty"} name={"qty"} />
      </div>
      <div className="mb-4 pl-[35%]">
        <Button type={"submit"} children={"AGENDAR"} colorButton={"bg-[#1C99E0]"} colorText={"text-[#FFFFFF]"}/>
      </div>
    </form>
  );
};

export default FormAgendamento;