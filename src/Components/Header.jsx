import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <header>
      <div className="menu  container">
        <div className="toggle-switch">
          <label className="switch-label">
            <input type="checkbox" className="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <nav>
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
              <a className="contact" href="">
                Contactame!
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-content container">
        <div className="header-txt">
          <h1>Desarollador Frontend <span className="span1">React</span></h1>
          <p>
            ¡Hola! Mi nombre es Bernardo Peredo, tengo 17 años y soy un
            freelancer especializado en desarrollo web. Me apasiona aprender y
            practicar todos los días para ofrecer servicios de alta calidad.
          </p>
          <div className="btns">
            <button className="btn1">Ver CV</button>
            <FaWhatsapp size={30} className="icons1" />
            <FaInstagram size={30} className="icons2" />
          </div>
        </div>
        <div className="imgBernardo">
          <img src="assets/wawaso.jpg" alt="" />
        </div>
      </div>
      {/* <div className="svg" style={{ height: "220px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-1.97,80.44 C119.92,127.80 271.49,-49.98 500.27,93.27 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#f3f3f3" }}
          ></path>
        </svg>
      </div> */}
    </header>
  );
};

export default Header;
