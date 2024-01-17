import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <header>
      <div className="menu  container">
        <div class="toggle-switch">
          <label class="switch-label">
            <input type="checkbox" class="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
        <nav >
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Sobre Mi</a>
            </li>
            <li>
              <a href="">Mis Proyectos</a>
            </li>
            <li>
              <a href="">Contactame!</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-content ">
        <div className="header-txt">
          <h1>Desarollador Frontend React</h1>
          <p>
            ¡Hola! Mi nombre es Bernardo Peredo, tengo 17 años y soy un
            freelancer especializado en desarrollo web. Me apasiona aprender y
            practicar programación todos los días para mejorar mis habilidades y
            ofrecer servicios de alta calidad.
          </p>
          <div className="btns">
            <button className="btn1">Ver CV</button>
            <FaWhatsapp size={30} className="icons1" />
            <FaInstagram size={30} className="icons2" />
          </div>
        </div>
        <div className="imgBernardo">
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
