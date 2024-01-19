import React from 'react';
import { usePorfolioContext } from '../Context/ContextPorfolio';
import DataModal from '../Data/DataModal.json'

const ModalComponent = ({ projectNumber }) => {
  const { isDarkMode, theme, modalStates, handleProjectModal } = usePorfolioContext();
  const currentProject = DataModal.find(project => project.id === projectNumber);

  if (!currentProject) {
    // Si no se encuentra el proyecto, puedes manejarlo según tus necesidades
    return null;
  }

  

  return (
    <div>
      {modalStates[projectNumber] && (
        <div
          className="modal1"
          style={{
            background: isDarkMode ? theme.backgroun2D : theme.backL2,
          }}
        >
          <button onClick={() => handleProjectModal(projectNumber)}>X</button>
          <div className="megaCOntainer">
            <div className="modalContent">
              <div className="imgModalConteinr">
                <h1 style={{ color: isDarkMode ? theme.detallenos2D : theme.textD }}>
                  {currentProject.title}
                </h1>
                <img src={currentProject.img} alt={currentProject.title} className='imgModal' />
                {/* Agrega más contenido según sea necesario */}
              </div>

              <div className="infoModal">
                <h1 style={{ color: isDarkMode ? theme.detallenos2D : theme.textD }}>
                  Información:
                </h1>
                <p style={{ color: isDarkMode ? theme.textD : theme.textL }}>
                  {currentProject.content}
                </p>
              </div>
            </div>

            <div className="Aprendizaje">
              <h1 style={{ color: isDarkMode ? theme.detallenos2D : theme.textD }}>
                Mi Aprendizaje
              </h1>
              <p style={{ color: isDarkMode ? theme.textD : theme.textL }}>
                {currentProject.aprendizaje}
              </p>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;