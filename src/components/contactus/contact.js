import React from "react";
import { FaGithub, FaEnvelope, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef, SiGmail } from "react-icons/si"; 
import Particle from "../Particle";
export default function ContactUs() {
  return (
    <div className="contact">
      <Particle />
      <div className="row" style={{ margin: "20px 0" }}>
        <div className="home-about-social col-md-12">
          <h2 className="h1d">Coding Profiles</h2>
          <ul className="home-about-social-links">
            <li className="icon-color social-icons">
              <a
                href="https://github.com/Manish1808"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaGithub />
              </a>
            </li>
            <li className="icon-color social-icons">
              <a
                href="https://leetcode.com/u/pandirisaimanish/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="icon-color social-icons">
              <a
                href="https://www.hackerrank.com/profile/pandirisaimanis1"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiHackerrank />
              </a>
            </li>
            <li className="icon-color social-icons">
              <a
                href="https://www.codechef.com/users/saimanish2004"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiCodechef />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="home-about-social col-md-12">
          <h2 className="h1d">Social Profiles</h2>
          <ul className="home-about-social-links">
            <li className="icon-color social-icons">
              <a
                href="mailto:saimanishpandiri@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiGmail />
              </a>
            </li>
            <li className="icon-color social-icons">
              <a
                href="https://x.com/PandiriM14082"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaTwitter /> {/* ✅ Fixed: Using FaTwitter instead of FaXTwitter */}
              </a>
            </li>
            <li className="icon-color social-icons">
              <a
                href="https://www.linkedin.com/in/pandiri-sai-manish-597157290/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="icon-color social-icons">
              <a
                href="https://www.instagram.com/_manish_1808/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
