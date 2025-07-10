import React from "react";
import Particle from "../Particle";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import C from "../../Assets/C image.png";
export default function Skills() {
  return (
    <>
      <div className="Skil">
        <Particle />
        <div className="Dskil">
          <h2>
            Professional{" "}
            <span>
              <b>Skillset</b>
            </span>
          </h2>
        </div>
        <div
          className="row"
          style={{ justifyContent: "center", paddingBottom: "50px" }}
        >
          <div className="tech-icons col-md-2 col-4">
            <FaHtml5 />
            <p className="fs-5">Html</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaCss3 />
            <p className="fs-5">Css</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <IoLogoJavascript />
            <p className="fs-5">Javascript</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaJava />
            <p className="fs-5">Java</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <img
              src={C}
              alt="home pic"
              className="img-fluid"
              style={{ width: "200px", height: "105px" }}
            />
            <p className="fs-5">C</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaBootstrap />
            <p className="fs-5">Bootstrap</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaReact />
            <p className="fs-5">React</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaNodeJs />
            <p className="fs-5">NodeJs</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <SiExpress />
            <p className="fs-5">Express</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <GrMysql />
            <p className="fs-5">Mysql</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <DiMongodb />
            <p className="fs-5">Mongodb</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaGitAlt />
            <p className="fs-5">Git</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaPython />
            <p className="fs-5">Python</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <SiPowerbi />
            <p className="fs-5">Powerbi</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaFigma />
            <p className="fs-5">Figma</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <SiTailwindcss />
            <p className="fs-5">TailwindCss</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaGithub />
            <p className="fs-5">GitHub</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <SiPostman />
            <p className="fs-5">Postman</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <FaAws />
            <p className="fs-5">Amazon Web Services</p>
          </div>
          <div className="tech-icons col-md-2 col-4">
            <SiKotlin />
            <p className="fs-5">Kotlin</p>
          </div>
        </div>
      </div>
    </>
  );
}
