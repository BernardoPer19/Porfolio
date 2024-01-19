import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { usePorfolioContext } from "../Context/ContextPorfolio";

const Header = () => {
  const { isDarkMode, theme, toggleDarkMode } = usePorfolioContext();

  return (
    <header style={{ background: isDarkMode ? theme.backgrounD : theme.backgroundL }}>
      <div className="menu  container">
        <div className="toggle-switch">
          <label className="switch-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
        </div>
        <nav>
          <ul>
            <li>
              <a href=""  style={{ color: isDarkMode ? theme.textD : theme.textL }}>Inicio</a>
            </li>
            <li>
              <a href=""  style={{ color: isDarkMode ? theme.textD : theme.textL }}>Sobre Mi</a>
            </li>
            <li>
              <a href=""  style={{ color: isDarkMode ? theme.textD : theme.textL }}>Mis Proyectos</a>
            </li>
            <li>
              <a className="contact" href=""  style={{
                color: isDarkMode ? theme.textD : theme.textD,
              }}>
                Contactame!
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-content container">
        <div className="header-txt">
          <h1 style={{
                color: isDarkMode ? theme.detallenosD : theme.textD,
              }}>
            Desarollador Frontend <span className="span1" style={{
                color: isDarkMode ? theme.textD : theme.textD,
              }}>React</span>
          </h1>
          <p style={{ color: isDarkMode ? theme.textD : theme.textL }}>
            ¡Hola! Mi nombre es Bernardo Peredo, tengo 17 años y soy un
            freelancer especializado en desarrollo web. Me apasiona aprender y
            practicar todos los días para ofrecer servicios de alta calidad.
          </p>
          <div className="btns">
            <button
              className="btn1"
              style={{
                background: isDarkMode ? theme.botonesD : theme.botones2L,
              }}
            >
              Ver CV
            </button>

            <FaWhatsapp size={30} className="icons1" />
            <FaInstagram size={30} className="icons2" />
          </div>
        </div>
        <div className="imgBernardo">
          <img src="" alt=""   />
        </div>
      </div>
    </header>
  );
};

export default Header;
