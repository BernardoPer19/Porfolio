import React, { createContext, useState, useEffect, useContext } from "react";

const ContextPorfolio = createContext();

export const usePorfolioContext = () => useContext(ContextPorfolio);

export const ContextPorfolioProvider = ({ children }) => {

  const lightTheme = {
    backgroundL: "#F3EEEA",
    textL: "#776B5D",
    botonesL: "#B0A695",
    botones2L: "#90794f",
    DestacadosL: "#776B5D",
    backL2: "#f5f5f5",
    yo1: "assets/wawaso.jpg"
    
    // Agrega otros colores según sea necesario
  };
  
  const darkTheme = {
    backgrounD: "#292929",
    backgroun2D: "#383838",
    textD: "#F3EEEA",
    detallenosD: "#776B5D",
    botonesD: "#B0A695",
    detallenos2D: "#a38f77",
    yo2:"assets/wawasoNegro.jpg"
    // Agrega otros colores según sea necesario
  };



  const [modalIsTrue, setModalIsTrue] = useState(false);

  const handleModal = () => {
    setModalIsTrue((prevState) => !prevState);
  };

  const [modalStates, setModalStates] = useState([false, false, false, false, false, false]);

  const handleProjectModal = (index) => {
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = !updatedModalStates[index];
    setModalStates(updatedModalStates);
  };





  /*!THE MODE*/ 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(storedDarkMode === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);


  const contextValues = {
    modalIsTrue,
    setModalIsTrue,
    modalStates,
    setModalStates,
    toggleDarkMode,
    isDarkMode,handleProjectModal,handleModal,
    theme: isDarkMode ? darkTheme : lightTheme,
  };

  return (
    <ContextPorfolio.Provider value={contextValues}>
      {children}
    </ContextPorfolio.Provider>
  );
};
