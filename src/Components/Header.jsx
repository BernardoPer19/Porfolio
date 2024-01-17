import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <header>
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
            <a href="">Contactame!</a>
          </li>
        </ul>
      </nav>

      <div className="header-content">
        <div className="header-txt">
          <h1>Bernardo Peredo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            labore exercitationem, enim voluptatem voluptates magni odit harum.
            Neque fugit iure officia iusto ea, voluptatem est, quidem nisi
            repudiandae, magni vero!
          </p>
          <div className="btns">
            <button>Ver CV</button>
            <FaWhatsapp />
            <FaInstagram />
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
