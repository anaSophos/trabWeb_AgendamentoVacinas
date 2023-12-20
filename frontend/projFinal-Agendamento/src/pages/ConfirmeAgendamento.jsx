import React from 'react';
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import FormAgendamento from '../components/Forms/FormAgendamento/index.jsx';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ConfirmeAgendamento = () => {
  const navegate = useNavigate();
  const { idUser, idVac, VacName, hospitalName } = useParams();
  const formattedHospitalName = hospitalName.replace(/_/g, ' ');

  const handleFormSubmit = (idVac, idUser, qty) => {
    console.log('Scheduling created:', { idVac, idUser, qty });
    navegate('/meus-agendamentos')
  };

  return (
    <>
      <Cabecalho nav1={'Consultar Vacinas'} urlNav1={'/vacinas'} nav2={'Meus Agendamentos'} urlNav2={'/meus-agendamentos'} />
      <div className="py-[5%]">
        <FormAgendamento onSubmit={handleFormSubmit} idUser={idUser} vaccineId={idVac} vaccineName={VacName} hospitalName={formattedHospitalName} />
      </div>
      <Rodape />
    </>
  );
};

export default ConfirmeAgendamento;
