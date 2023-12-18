import React, { useState } from 'react';

function Input({ type, placeholder, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value); // Chama a função de retorno de chamada com o novo valor do input
  };

  return (
    <div className='p-5 mx-auto rounded-md w-[90%] bg-[#E8F1F3] border border-solid border-[#9fdfed] hover:border-[#016494] justify-between flex flex-row'>
      <input
        type={type}
        placeholder={placeholder}
        className='lg:text-[16px] text-[.8em] bg-transparent w-[70%] outline-none'
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button>
        <img
          src='/Imagens/iconLupa.png'
          alt="Ícone de lupa"
          className="w-[30px]"
        />
      </button>
    </div>
  );
}

export default Input;