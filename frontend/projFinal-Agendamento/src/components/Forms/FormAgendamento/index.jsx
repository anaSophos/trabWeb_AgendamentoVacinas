import React, { useState } from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import axios from 'axios';

const FormAgendamento = ({onSubmit, idUser, vaccineId, vaccineName, hospitalName }) => {
    const [qty, setQty] = useState(1); // Adicionamos estado para a quantidade

    const handleSubmit = (event) => {
      event.preventDefault();
      // Passamos idVac, idUser e qty diretamente
      onSubmit(vaccineId, idUser, qty);
    };

    const handleQtyChange = (event) => {
      // Atualizamos o estado quando a quantidade muda
      setQty(event.target.value);
    };

  return (
    <form onSubmit={handleSubmit} className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] flex flex-col justify-center shadow-md">
      <h2 className="lg:text-[30px] sm:text-[20px] text-[16px] font-bold text-[#13293D] mt-auto mr-auto text-center mx-auto">
        Nome da Vacina: {vaccineName}
      </h2>
      <h2 className="lg:text-[30px] sm:text-[20px] text-[16px] font-bold text-[#13293D] mt-auto mr-auto text-center mx-auto">
        Posto de saúde: {hospitalName}
      </h2>
      <div className="mb-4">
        <LabelForms htmlFor={"idVac"} children={"Vacina:"}/>
        <input type='text' id='idVac' name='idVac'
            className='lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] rounded-[18px] outline-none'
            defaultValue={vaccineId} readOnly
        ></input>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"idUser"} children={"Usuário:"}/>
        <input type='text' id='idUser' name='idUser'
            className='lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] rounded-[18px] outline-none'
            defaultValue={idUser} readOnly
        ></input>
      </div>
      <div className="mb-4">
        <LabelForms htmlFor={"qty"} children={"Quantidade:"} />
        {/* Usamos o componente controlado para a entrada de quantidade */}
        <InputForm
          type={"number"}
          id={"qty"}
          name={"qty"}
          value={qty}
          onChange={handleQtyChange}
        />
      </div>
      <div className="mb-4 pl-[35%]">
        <Button
          type={"submit"}
          children={"AGENDAR"}
          colorButton={"bg-[#1C99E0]"}
          colorText={"text-[#FFFFFF]"}
        />
      </div>
    </form>
  );
};

export default FormAgendamento;