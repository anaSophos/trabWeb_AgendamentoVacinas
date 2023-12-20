import React, { useState } from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import axios from 'axios';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';

const FormAgendamento = ({ onSubmit, idUser, vaccineId, vaccineName, hospitalName }) => {
  const { usuario } = useAuthContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const qty = event.target.qty.value;

    try {
        const headers = {
            Authorization: `Bearer ${usuario.token}`,
        };

        await axios.post('http://localhost:3001/scheduling/create', { idUser, idVac: vaccineId, qty }, { headers });

        onSubmit(vaccineId, idUser, qty);
    } catch (error) {
        console.error('Error creating scheduling:', error);
    }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] flex flex-col justify-center shadow-md"
    >
      <h2 className="lg:text-[30px] sm:text-[20px] text-[16px] font-bold text-[#13293D] mt-auto mr-auto text-center mx-auto">
        Nome da Vacina: {vaccineName}
      </h2>
      <h2 className="lg:text-[30px] sm:text-[20px] text-[16px] font-bold text-[#13293D] mt-auto mr-auto text-center mx-auto">
        Posto de saúde: {hospitalName}
      </h2>
      <div className="mb-4">
        <LabelForms htmlFor={'qty'} children={'Quantidade:'} />
        <input
          type="number"
          id="qty"
          name="qty" 
          className="lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] rounded-[18px] outline-none"
        ></input>
      </div>
      <div className="mb-4 pl-[35%]">
        <Button
          type={'submit'}
          children={'AGENDAR'}
          colorButton={'bg-[#1C99E0]'}
          colorText={'text-[#FFFFFF]'}
        />
      </div>
    </form>
  );
};

export default FormAgendamento;