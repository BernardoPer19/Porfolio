import React, { createContext, useState } from 'react';

export const ContextPorfolio = createContext();

export const ContextPorfolioProvider = ({ children }) => {
  const [modalIsTrue, setModalIsTrue] = useState(false);

  return (
    <ContextPorfolio.Provider value={{ modalIsTrue, setModalIsTrue }}>
      {children}
    </ContextPorfolio.Provider>
  );
};
