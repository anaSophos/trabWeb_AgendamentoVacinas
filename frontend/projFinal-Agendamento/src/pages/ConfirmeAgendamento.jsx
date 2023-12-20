import React from 'react';
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import FormAgendamento from '../components/Forms/FormAgendamento/index.jsx';
import { useParams } from 'react-router-dom';

const ConfirmeAgendamento = () => {
  const { idUser, idVac, VacName, hospitalName } = useParams();
  const formattedHospitalName = hospitalName.replace(/_/g, ' ');
  console.log("na confirmação", useParams())
  const handleSubmit = async (idVac, idUser, qty) => {
    try {
      const response = await axios.post('http://localhost:3001/scheduling/create', {
        idVac,
        idUser, 
        qty,
      })
      console.log("confirme agen", response.data)
      if (response.status === 201) {
        alert('Agendamento realizado com sucesso!');
        //navegacao('/login')
      }
    } catch (error) {
      alert('Erro ao agendar vacina. Detalhe: ' + error.response?.data.message)
      console.error(error.response?.data.message)
    }
  }

  return (
    <>
      <Cabecalho nav1={"Consultar Vacinas"} urlNav1={"/vacinas"} nav2={"Meus Agendamentos"} urlNav2={"/meus-agendamentos"}/>
      <div className='py-[5%]'>
        <FormAgendamento onSubmit={handleSubmit} idUser={idUser} vaccineId={idVac} vaccineName={VacName} hospitalName={formattedHospitalName} />
      </div>
      <Rodape />
    </>
  );
};

export default ConfirmeAgendamento;