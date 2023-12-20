import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import CardVacina from '../components/Cards/CardVacinaAgendamento/index.jsx';
import { useAuthContext } from '../contexts/AuthContext.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyAgendamentos = () => {
    const navegate = useNavigate();
    const { usuario } = useAuthContext();
    const [meusAgendamentos, setMeusAgendamentos] = useState([]);
    const [vacs, setVacs] = useState({});
    const [hospitals, setHospitals] = useState({});

    console.log(usuario)
    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/scheduling/user/${usuario.idUser}`, {
                headers: {
                    Authorization: `Bearer ${usuario.token}`,
                },
            });
            setMeusAgendamentos(response.data);

            const vacIds = response.data.map((vac) => vac.idVac);
            const vacDetailsPromises = vacIds.map(async (vac) => {
              try {
                const vacResponse = await axios.get(`http://localhost:3001/vac/${vac}`);
                return { [vac]:vacResponse };
              } catch (error) {
                console.error(`Error fetching hospital details for provider ${vac}:`, error);
                return { [vac]: null }; 
              }
            });

            const vacDetails = await Promise.all(vacDetailsPromises);
            const vacsObject = Object.assign({}, ...vacDetails);
            setVacs(vacsObject);

            const hospitalIds = Object.values(vacsObject).map((vaccine) => vaccine.provider);
                console.log("hospitalIds", hospitalIds);

                const hospitalDetailsPromises = hospitalIds.map(async (hospitalId) => {
                    try {
                        const hospitalResponse = await axios.get(`http://localhost:3001/hosp/${hospitalId}`);
                        return { [hospitalId]: hospitalResponse.data };
                    } catch (error) {
                        console.error(`Error fetching hospital details for ${hospitalId}:`, error);
                        return { [hospitalId]: null };
                    }
                });

                const hospitalDetails = await Promise.all(hospitalDetailsPromises);
                const hospitalsObject = Object.assign({}, ...hospitalDetails);
                setHospitals(hospitalsObject);
        } catch (error) {
            console.error('Erro ao buscar agendamentos:', error);
        }
    };

        fetchData();
    }, [usuario.idUser]);

    const handleCancel = async (agendamentoId) => {
      try {
        await axios.delete(`http://localhost:3001/scheduling/delete/${agendamentoId}`, {
          headers: {
            Authorization: `Bearer ${usuario.token}`,
          },
        });

        const updatedAgendamentos = meusAgendamentos.filter((agendamento) => agendamento._id !== agendamentoId);
        navegate('/meus-agendamentos/cancelado')
        setMeusAgendamentos(updatedAgendamentos);
      } catch (error) {
        console.error('Erro ao cancelar agendamento:', error);
      }
    };

    return (
        <>
            <Cabecalho nav1={"Consultar Vacinas"} urlNav1={"/vacinas"} nav2={"Meus Agendamentos"} urlNav2={"/meus-agendamentos"}/>
            <TituloPrincipal children={"Meus Agendamentos"}/>
             <div className=' w-[90%] m-auto flex-row flex justify-between flex-wrap mb-[5%]'>
                {meusAgendamentos.map(agendamento => (
                    <CardVacina key={agendamento._id} 
                                nameVaccine={(vacs[agendamento.idVac]?.data.name) || 'Nome do Hospital Desconhecido'} 
                                qtd={`Quantidade agendada: ${agendamento.qty}`} 
                                hospitalName={(hospitals[vacs[agendamento.idVac]?.provider]?.name) || 'Nome do Hospital Desconhecido'} 
                                childrenButton={'CANCELAR'} onClickbutton={() => handleCancel(agendamento._id)}/>
                ))}
            </div>
            <Rodape />
        </>
    );
}

export default MyAgendamentos;