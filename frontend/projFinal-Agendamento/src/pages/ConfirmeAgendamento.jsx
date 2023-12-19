import React from 'react';
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import FormAgendamento from '../components/Forms/FormAgendamento/index.jsx';
import { useParams } from 'react-router-dom';

const ConfirmeAgendamento = () => {
  const { userId, vaccineId, vaccineName, hospitalName } = useParams();

  return (
    <>
      <Cabecalho nav1={"Consultar Vacinas"} urlNav1={"/vacinas"} nav2={"Meus Agendamentos"} urlNav2={"/meus-agendamentos"}/>
      <div className='py-[5%]'>
        <FormAgendamento userId={userId} vaccineId={vaccineId} vaccineName={vaccineName} hospitalName={hospitalName} />
      </div>
      <Rodape />
    </>
  );
};

export default ConfirmeAgendamento;