import React, { useContext, useState } from "react";
import ModalComponent from "./ModalComponent";
import {
  ButtonProyectComponent,
  ButtonProyectComponent2,
  BoxBtnInsideProyect2,
} from "./ButtonProyectComponent";

import { usePorfolioContext } from "../Context/ContextPorfolio";

const Proyectos = () => {
  const { isDarkMode, theme, modalStates, handleProjectModal } =
    usePorfolioContext();

  return (
    <section
      style={{ background: isDarkMode ? theme.backgrounD : theme.backgroundL }}
    >
      <h1
        className="hunu"
        style={{ color: isDarkMode ? theme.textD : theme.textl }}
      >
        Mira Mis Proyectos!
      </h1>
      <div className="container-proyects container">
        {/* Container 1 */}

        <div className="container1">
          <div className="proyect1 proy">
            <div className="btsP">
              <div className="tituloProyect">
                <h1>
                  Cafeteria Frapucho <br /> <h5>(E-commerce)</h5>
                </h1>
              </div>

              <BoxBtnInsideProyect2 projectNumber={0} />
            </div>
          </div>
          <ButtonProyectComponent2></ButtonProyectComponent2>
          {modalStates[0] && <ModalComponent projectNumber={0} />}
        </div>

        {/* Container 2 */}
        <div className="container2">
          <div className="proyect2 proy">
            <div className="btsP">
              <div className="tituloProyect">
                <h1>Orientando Un Futuro</h1>
              </div>

              <BoxBtnInsideProyect2 projectNumber={1} />
            </div>
          </div>
          <ButtonProyectComponent2></ButtonProyectComponent2>
          {modalStates[1] && <ModalComponent projectNumber={1} />}
        </div>

        {/* Container 3 */}
        <div className="container3">
          <div className="proyect3 proy">
            <div className="btsP">
              <div className="tituloProyect">
                <h1>B&B Labs Web</h1>
              </div>

              <BoxBtnInsideProyect2 projectNumber={2} />
            </div>
          </div>

          <ButtonProyectComponent2></ButtonProyectComponent2>
        </div>
        {modalStates[2] && <ModalComponent projectNumber={2} />}

        {/* Container 4 */}
        <div className="container4">
          <div className="proyect4 proy">
            <div className="btsP">
              <div className="tituloProyect">
                <h1>Buscador De Estudiantes</h1>
              </div>
              <BoxBtnInsideProyect2 projectNumber={3} />
            </div>
          </div>

          <ButtonProyectComponent></ButtonProyectComponent>
        </div>
        {modalStates[3] && <ModalComponent projectNumber={3} />}

        <div className="container5">
          <div className="proyect5 proy">
            <div className="btsP">
              <div className="tituloProyect">
                <h1>E-comerce Con Api/Fetch</h1>
              </div>

              <BoxBtnInsideProyect2 projectNumber={4} />
            </div>
          </div>
          <ButtonProyectComponent></ButtonProyectComponent>
        </div>
        {modalStates[4] && <ModalComponent projectNumber={4} />}

        <div className="container6">
          <div className="proyect6 proy">
            <div className="btsP">
              <div className="tituloProyect">
                <h1>Generador De Colores</h1>
              </div>

              <BoxBtnInsideProyect2 projectNumber={5} />
            </div>
          </div>
          <ButtonProyectComponent></ButtonProyectComponent>
        </div>
        {modalStates[5] && <ModalComponent projectNumber={5} />}
        {/* ... Repite el patrón para el Container 5 y 6 ... */}
      </div>
    </section>
  );
};

export default Proyectos;
