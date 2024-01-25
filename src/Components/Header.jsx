import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { usePorfolioContext } from "../Context/ContextPorfolio";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const { isDarkMode, theme, toggleDarkMode } = usePorfolioContext();
  const [toggleClick, setToggleClick] = useState(false);

  const handleMenu = () => {
    setToggleClick(!toggleClick);
  };
  return (
    <header
      style={{ background: isDarkMode ? theme.backgrounD : theme.backgroundL }}
    >
<div className="cajasPorf container">
<IoMdMenu
        onClick={handleMenu}
        className="muneBtn" // Ajusta la clase aquí
        size={60}
        style={{
          color: isDarkMode ? theme.textD : theme.negro,
        }}
      />
      <div className="boxSwich">
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
      </div>
</div>
     
      {toggleClick && (
        <div className="menu">
          <div className="menuCaja">
            <nav>
              <ul>
                <li></li>
                <li>
                  <a
                    href=""
                    style={{
                      color: isDarkMode ? theme.textD : theme.textD,
                    }}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    style={{
                      color: isDarkMode ? theme.textD : theme.textD,
                    }}
                  >
                    Sobre Mi
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    style={{
                      color: isDarkMode ? theme.textD : theme.textD,
                    }}
                  >
                    Mis Proyectos
                  </a>
                </li>
                <li>
                  <a
                    className="contact"
                    href=""
                    style={{
                      color: isDarkMode ? theme.textD : theme.textD,
                    }}
                  >
                    Contactame!
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <div className="header-content">
        <div className="header-txt">
          <h1
            style={{
              color: isDarkMode ? theme.detallenosD : theme.textD,
            }}
          >
            Desarollador Frontend{" "}
            <span
              className="span1"
              style={{
                color: isDarkMode ? theme.textD : theme.textD,
              }}
            >
              React
            </span>
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
              <a href="https://drive.google.com/file/d/1SFb751QQOSzzKNf2-pChJL92ORb5jOIt/view?usp=sharing" className="a">Ver CV</a>
            </button>

            <div className="btnsRedes">
             
              <a href="https://wa.me/64854829/?text=Hola, me interesó tu porfolio!"> <FaWhatsapp size={30} className="icons1" /></a>
            
              <a href="https://www.instagram.com/b.eww_/">  <FaInstagram size={30} className="icons2" /></a>
            </div>
          </div>
        </div>
        <div className="imgBernardo"></div>
      </div>
    </header>
  );
};

export default Header;
