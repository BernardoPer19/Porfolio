import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import {usePorfolioContext}  from "../Context/ContextPorfolio";




const ButtonProyectComponent = () => {
   
    
  return (
    <div>
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
  );
};
const BoxBtnInsideProyect2 = ({ projectNumber, projectNumber2 }) => {
    const { handleProjectModal } = usePorfolioContext();
  
    return (
      <>
        <div className="btnsProyectInfo">
         <a className="a" href={projectNumber2}> <button>Ver Proyecto</button></a>
          <button onClick={() => handleProjectModal(projectNumber)}>
            Mira Mi Aprendizaje!
          </button>
        </div>
      </>
    );
  };

const ButtonProyectComponent2 = () => {
  return (
    <div>
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
  );
};

export { ButtonProyectComponent, ButtonProyectComponent2,BoxBtnInsideProyect2 };
