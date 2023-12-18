import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import Input from '../components/Inputs/InputPesquisa/index.jsx';
import CardVacina from '../components/Cards/CardVacinaAgendamento/index.jsx';

const VacinasBusca = () => {
    const [vaccines, setVaccines] = useState([]);
    const [hospitals, setHospitals] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [vaccinesPerPage] = useState(12);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      // Função para buscar todas as vacinas do backend
      const fetchAllVaccines = async () => {
        try {
          const response = await axios.get('http://localhost:3001/vac');
          setVaccines(response.data);

              // Coleta os IDs dos hospitais associados às vacinas
              const hospitalIds = response.data.map((vaccine) => vaccine.provider);

              // Para cada ID de hospital, faz uma solicitação para obter os detalhes do hospital
              const hospitalDetailsPromises = hospitalIds.map(async (hospitalId) => {
                  const hospitalResponse = await axios.get(`http://localhost:3001/hosp/${hospitalId}`);
                  return { [hospitalId]: hospitalResponse.data };
              });

              // Aguarda todas as solicitações e atualiza o estado com os detalhes do hospital
              const hospitalDetails = await Promise.all(hospitalDetailsPromises);
              const hospitalsObject = Object.assign({}, ...hospitalDetails);
              setHospitals(hospitalsObject);
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
          setCurrentPage(1); // Reinicia a página ao alterar o termo de pesquisa
          setSearchTerm(value);
        };
      

    return (
        <>
            <Cabecalho />
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
                            hospital={hospitals[vaccine.provider]?.name || 'Nome do Hospital Desconhecido'}
                            childrenButton={'AGENDAR VACINA'}
                        />
                    ))
                ) : (
                    <p>Vacina não encontrada</p>
                )}
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