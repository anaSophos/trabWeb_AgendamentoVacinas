import React, {useState, useEffect} from 'react';
import InputForm from '../../Inputs/InputForm';
import Button from '../../Button';
import LabelForms from '../../Titulo/labelForms';
import axios from 'axios';

function FormCadastrarOperator({onSubmit}){
  const [passwordMatchError, setPasswordMatchError] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [hospitalInput, setHospitalInput] = useState('');
  const [suggestedHospitals, setSuggestedHospitals] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    const getHospitais = async () => {
      try {
        const response = await axios.get("http://localhost:3001/hosp");
        setHospitals(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHospitais();
  }, []);

  const handleHospitalInputChange = (event) => {
    const inputValue = event.target.value;
    setHospitalInput(inputValue);

    const filteredHospitals = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    setSuggestedHospitals(filteredHospitals);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (selectedHospital) => {
    setHospitalInput(selectedHospital.name);
    setShowSuggestions(false);
    setSelectedHospital(selectedHospital);
  };

  const renderSuggestionList = () => {
    return (
      <ul>
        {suggestedHospitals.map((hospital, index) => (
          <li
            className="lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] bg-[#FFFF]"
            key={hospital.id || index} 
            onClick={() => handleSuggestionClick(hospital)}
          >
            {hospital.name}
          </li>
        ))}
      </ul>
    );
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const name = formData.get('name');
    const password = formData.get('password');
    const passwordConfir = formData.get('passwordConfir');

    if (password !== passwordConfir) {
      setPasswordMatchError('As senhas não coincidem');
      return;
    }

    setPasswordMatchError(null);
    onSubmit(email, name, password, selectedHospital);
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
        <LabelForms htmlFor={"hospital"} children={"Hospital:"}/>
        <input
          type={"text"}
          id={"hospital"}
          name={"hospital"}
          placeholder={"ex: Posto de saúde Barretos"}
          value={hospitalInput}
          onChange={handleHospitalInputChange}
          onFocus={() => setShowSuggestions(true)}
          className='lg:text-[16px] text-[.8em] w-full h-[54px] px-4 py-2 border border-[#9fdfed] rounded-[18px] outline-none'
        />
        {showSuggestions && suggestedHospitals.length > 0 && renderSuggestionList()}
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

export default FormCadastrarOperator;