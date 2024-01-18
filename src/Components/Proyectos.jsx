import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";

const Proyectos = () => {
  return (
    <section>
      <h1 className="hunu">Mira Mis Proyectos!</h1>
      <div className="container-proyects container">
        {/* Container 1 */}
        <div className="container1">
          <div className="proyect1 proy">
          <div className="btsP">
            <div className="tituloProyect">
            <h1>Cafeteria Frapucho <br /> <h5>(E-comerce)</h5></h1>
            </div>
             <div className="btnsProyectInfo">
             <button>Ver Proyecto</button>
              <button>Mira Mi Aprendizaje!</button>
             </div>
            </div>
          </div>
          <div className="btnsProyectsTec">
            <button className="button1">
              <FaHtml5 size={15} style={{ color: "#E44D26" }} />{" "}
              <span className="lable1">HTML </span>
            </button>
            <button className="button2">
              <FaCss3Alt size={15} style={{ color: "#1572B6" }} />
              <span className="lable2">CSS</span>
            </button>
            <button className="button3">
              <IoLogoJavascript size={15} style={{ color: "#F0DB4F" }} />
              <span className="lable3">JS</span>
            </button>
          </div>
        </div>

        {/* Container 2 */}
        <div className="container2">
          <div className="proyect2 proy">
            <div className="btsP">
            <div className="tituloProyect">
            <h1>Orientando Un Futuro</h1>
            </div>
             <div className="btnsProyectInfo">
             <button>Ver Proyecto</button>
              <button>Mira Mi Aprendizaje!</button>
             </div>
            </div>
          </div>
          <div className="btnsProyectsTec">
            <button className="button1">
              <FaHtml5 size={15} style={{ color: "#E44D26" }} />{" "}
              <span className="lable1">HTML </span>
            </button>
            <button className="button2">
              <FaCss3Alt size={15} style={{ color: "#1572B6" }} />
              <span className="lable2">CSS</span>
            </button>
            <button className="button3">
              <IoLogoJavascript size={15} style={{ color: "#F0DB4F" }} />{" "}
              <span className="lable3">JS</span>
            </button>
          </div>
        </div>

        {/* Container 3 */}
        <div className="container3">
          <div className="proyect3 proy">
          <div className="btsP">
            <div className="tituloProyect">
            <h1>B&B Labs Web</h1>
            </div>
             <div className="btnsProyectInfo">
             <button>Ver Proyecto</button>
              <button>Mira Mi Aprendizaje!</button>
             </div>
            </div>
          </div>
          <div className="btnsProyectsTec">
          <button className="button1">
              <FaHtml5 size={15} style={{ color: "#E44D26" }} />{" "}
              <span className="lable1">HTML </span>
            </button>
            <button className="button2">
              <span className="lable2">CSS</span>
            </button>
            <button className="button3">
              <IoLogoJavascript size={15} style={{ color: "#F0DB4F" }} />
              <span className="lable3">JS</span>
            </button>
          </div>
        </div>

        {/* Container 4 */}
        <div className="container4">
          <div className="proyect4 proy">
          <div className="btsP">
            <div className="tituloProyect">
            <h1>Buscador De Estudiantes</h1>
            </div>
             <div className="btnsProyectInfo">
             <button>Ver Proyecto</button>
              <button>Mira Mi Aprendizaje!</button>
             </div>
            </div>
          </div>
          <div className="btnsProyectsTec">
            <button className="button1">
              <FaHtml5 size={15} style={{ color: "#E44D26" }} />{" "}
              <span className="lable1">HTML </span>
            </button>
            <button className="button2">
              <FaCss3Alt size={15} style={{ color: "#1572B6" }} />
              <span className="lable2">CSS</span>
            </button>
            <button className="button4">
              <FaReact size={15} style={{ color: "#61DAFB" }} />
              <span className="lable4">REACT</span>
            </button>
          </div>
        </div>

        <div className="container5">
          <div className="proyect5 proy">
          <div className="btsP">
            <div className="tituloProyect">
            <h1>E-comerce Con Api/Fetch</h1>
            </div>
             <div className="btnsProyectInfo">
             <button>Ver Proyecto</button>
              <button>Mira Mi Aprendizaje!</button>
             </div>
            </div>
          </div>
          <div className="btnsProyectsTec">
            <button className="button1">
              <FaHtml5 size={15} style={{ color: "#E44D26" }} />{" "}
              <span className="lable1">HTML </span>
            </button>
            <button className="button2">
              <FaCss3Alt size={15} style={{ color: "#1572B6" }} />
              <span className="lable2">CSS</span>
            </button>
            <button className="button4">
              <FaReact size={15} style={{ color: "#61DAFB" }} />{" "}
              <span className="lable4">REACT</span>
            </button>
          </div>
        </div>

        <div className="container6">
          <div className="proyect6 proy">
          <div className="btsP">
            <div className="tituloProyect">
            <h1>Generador De Colores</h1>
            </div>
             <div className="btnsProyectInfo">
             <button>Ver Proyecto</button>
              <button>Mira Mi Aprendizaje!</button>
             </div>
            </div>
          </div>
          <div className="btnsProyectsTec">
            <button className="button1">
              <FaHtml5 size={15} style={{ color: "#E44D26" }} />{" "}
              <span className="lable1">HTML </span>
            </button>
            <button className="button2">
              <FaCss3Alt size={15} style={{ color: "#1572B6" }} />
              <span className="lable2">CSS</span>
            </button>
            <button className="button4">
              <FaReact size={15} style={{ color: "#61DAFB" }} />{" "}
              <span className="lable4">REACT</span>
            </button>
          </div>
        </div>

        {/* ... Repite el patrón para el Container 5 y 6 ... */}
      </div>
    </section>
  );
};

export default Proyectos;
