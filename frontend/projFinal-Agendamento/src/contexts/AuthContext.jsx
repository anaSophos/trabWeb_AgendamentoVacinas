import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
  
    const realizarLogin = (dadosUsuario) => {
      setUsuario(dadosUsuario);
    };
    console.log("realizar login", usuario)
  
    const realizarLogout = () => {
      setUsuario(null);
    };
  
    return (
      <AuthContext.Provider value={{ usuario, realizarLogin, realizarLogout }}>
        {children}
      </AuthContext.Provider>
    );
  };

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext deve ser usado dentro de um AuthProvider');
  }
  return context;
};