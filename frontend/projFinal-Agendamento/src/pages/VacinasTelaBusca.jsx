import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import Input from '../components/Inputs/InputPesquisa/index.jsx';
import CardVacina from '../components/Cards/CardVacinaAgendamento/index.jsx';
import { useAuthContext } from '../contexts/AuthContext.jsx';
import { AuthProvider } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const VacinasBusca = () => {
  const navigate = useNavigate();
  const { usuario } = useAuthContext();
  const { idUser } = useParams();
  const [vaccines, setVaccines] = useState([]);
  const [hospitals, setHospitals] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [vaccinesPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAllVaccines = async () => {
      try {
        const response = await axios.get('http://localhost:3001/vac');
        setVaccines(response.data);
        console.log("response data",response.data)

        const hospitalIds = response.data.map((vaccine) => vaccine.provider);
        console.log("hospitalIds", hospitalIds)
        const hospitalDetailsPromises = hospitalIds.map(async (provider) => {
          try {
            const hospitalResponse = await axios.get(`http://localhost:3001/hosp/${provider}`);
            console.log("response ", provider, hospitalResponse.data);
            return { [provider]:hospitalResponse };
          } catch (error) {
            console.error(`Error fetching hospital details for provider ${provider}:`, error);
            return { [provider]: null }; 
          }
        });

        const hospitalDetails = await Promise.all(hospitalDetailsPromises);
        const hospitalsObject = Object.assign({}, ...hospitalDetails);
        setHospitals(hospitalsObject);
        console.log('hospitals', hospitalsObject);
      } catch (error) {
        console.error('Error fetching vaccines:', error);
      }
    };

    fetchAllVaccines();
  }, []);

  const filteredVaccines = vaccines.filter((vaccine) =>
    vaccine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastVaccine = currentPage * vaccinesPerPage;
  const indexOfFirstVaccine = indexOfLastVaccine - vaccinesPerPage;
  const currentVaccines = filteredVaccines.slice(
    indexOfFirstVaccine,
    indexOfLastVaccine
  );

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleInputChange = (value) => {
    setCurrentPage(1);
    setSearchTerm(value);
  };

  const handleAgendarClick = (vaccineId, vaccineName, hospitalName) => {
    const formattedHospitalName = hospitalName.replace(/\s+/g, '_');
    if (usuario && usuario.idUser) {
      navigate(`/confirmar/${usuario.idUser}/${vaccineId}/${vaccineName}/${formattedHospitalName}`);
    } else {
      console.error('ID do usuário está indefinido ou nulo.');
    }
  };
  

  return (
    <>
      <Cabecalho nav1={"Consultar Vacinas"} urlNav1={"/vacinas"} nav2={"Meus Agendamentos"} urlNav2={"/meus-agendamentos"}/>
      <TituloPrincipal children={'Vacinas'} />
      <Input
        type={'text'}
        placeholder={'Pesquise a vacina que você deseja encontrar'}
        onChange={handleInputChange}
      />
      <div className=' w-[90%] m-auto flex-row flex justify-between flex-wrap mb-[5%]'>
      {currentVaccines.length > 0 ? (
        currentVaccines.map((vaccine) => (
          <CardVacina
            key={vaccine._id}
            nameVaccine={vaccine.name}
            qtd={`Quantidade disponível: ${vaccine.qty}`}
            hospitalName={(hospitals[vaccine.provider]?.data.name) || 'Nome do Hospital Desconhecido'}
            onClickbutton={() => handleAgendarClick(vaccine._id, vaccine.name, (hospitals[vaccine.provider]?.data.name) || 'Nome do Hospital Desconhecido')}
            childrenButton={"AGENDAR"}
          />
        ))
      ) : (
        <p>Vacina não encontrada</p>
      )}
        {console.log('hospitals', hospitals)}
      </div>
      {vaccines.length > 0 && currentVaccines.length < vaccines.length && (
        <div className='w-[90%]'>
          <button onClick={handleShowMore} className='bg-transparent text-blue-500 p-2 '>
            Mostrar Mais
          </button>
        </div>
      )}
      <Rodape />
    </>
  );
};

export default VacinasBusca;