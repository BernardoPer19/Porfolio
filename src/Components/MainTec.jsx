import React from "react";

import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { usePorfolioContext } from "../Context/ContextPorfolio";
const MainTec = () => {
  const { isDarkMode, theme } = usePorfolioContext();

  return (
    <main
      style={{ background: isDarkMode ? theme.backgroun2D : theme.backL2 }}
    >
      <div className="containerTec container">
        <div className="tecnologias">
          <h1 style={{ color: isDarkMode ? theme.textD : theme.textL }}>
            Mis Tecnologias Actuales:
          </h1>
          <div className="icons">
            <div>
              <FaHtml5 size={35} style={{ color: "#E44D26" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>HTML5</p>
            </div>
            <div>
              <FaCss3Alt size={35} style={{ color: "#1572B6" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>CSS3</p>
            </div>
            <div>
              <IoLogoJavascript size={35} style={{ color: "#F0DB4F" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>Javascript</p>
            </div>
            <div>
              <FaReact size={35} style={{ color: "#61DAFB" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>React</p>
            </div>
            <div>
              <FaGitAlt size={35} style={{ color: "#F05032" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>Git</p>
            </div>
            <div>
              <SiTailwindcss size={35} style={{ color: "#38B2AC" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div className="proximasTecnologias">
          <h1 style={{ color: isDarkMode ? theme.textD : theme.textL }}>
            Mis Proximos Aprendizajes
          </h1>
          <div className="icons">
            <div>
              <IoLogoNodejs size={35} style={{ color: "#339933" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>Node.js</p>
            </div>
            <div>
              <SiMongodb size={35} style={{ color: "#47A248" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>MongoDB</p>
            </div>
            <div>
              <SiExpress size={35} style={{ color: "#000000" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>Express</p>
            </div>
            <div>
              <FaPython size={35} style={{ color: "#3776AB" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>Python</p>
            </div>
            <div>
              <FaJava size={35} style={{ color: "#007396" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>Java</p>
            </div>
            <div>
              <SiMysql size={35} style={{ color: "#4479A1" }} />
              <p style={{ color: isDarkMode ? theme.textD : theme.textl }}>MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainTec;
