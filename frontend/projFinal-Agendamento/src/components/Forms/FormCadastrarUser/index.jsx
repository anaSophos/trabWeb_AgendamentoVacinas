import React from 'react';

function FormComponent(){
  return (
    <form className="w-[70%] bg-[#E8F1F3] border border-solid border-[#9fdfed] mx-auto p-6 rounded-[18px] shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-xl font-bold mb-2">Login:</label>
        <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" />
      </div>
      {/* Adicione mais campos conforme necessário */}
      <div className="mb-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
      </div>
    </form>
  );
};

export default FormComponent;