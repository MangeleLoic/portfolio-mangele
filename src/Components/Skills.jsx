import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa'; 
import { DiBootstrap, DiJava, DiPostgresql } from 'react-icons/di'; 
import { IoDiamond } from "react-icons/io5";
import { SiSpringboot, SiSpringsecurity } from 'react-icons/si';
import './HoleCss.css';  
function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Competenze</h2>
        <div className="row">
          <div className="col-4 text-center icon">
            <FaHtml5 size={50} />
            <h4>HTML</h4>
          </div>
          <div className="col-4 text-center icon">
            <FaCss3Alt size={50} />
            <h4>CSS</h4>
          </div>
          <div className="col-4 text-center icon">
            <DiBootstrap size={50} />
            <h4>Bootstrap</h4>
          </div>
          <div className="col-4 text-center icon">
            <FaJs size={50} />
            <h4>JavaScript</h4>
          </div>
          <div className="col-4 text-center icon">
            <FaReact size={50} />
            <h4>React</h4>
          </div>
          <div className="col-4 text-center icon">
            <IoDiamond size={50} />
            <h4>Redux</h4>
          </div>
          <div className="col-4 text-center icon">
            <DiJava size={50} />
            <h4>Java</h4>
          </div>
          <div className="col-4 text-center icon">
            <SiSpringboot size={50} />
            <h4>Spring Boot</h4>
          </div>
          <div className="col-4 text-center icon">
            <SiSpringsecurity size={50} />
            <h4>Spring Security</h4>
          </div>
          <div className="col-4 text-center icon">
            <DiPostgresql size={50} />
            <h4>PostgreSQL</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
