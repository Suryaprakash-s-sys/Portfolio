import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiInstagram } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Fixed Left Column Social Sidebar */}
      <div className="hero__socials">
        <a
          href="https://github.com/Suryaprakash-s-sys"
          target="_blank"
          rel="noreferrer"
          className="hero__social-link"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/surya--prakash-s"
          target="_blank"
          rel="noreferrer"
          className="hero__social-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/Surya_Prakash_25"
          target="_blank"
          rel="noreferrer"
          className="hero__social-link"
          aria-label="LeetCode"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://www.instagram.com/s_u_r_y_a_.25"
          target="_blank"
          rel="noreferrer"
          className="hero__social-link"
          aria-label="Instagram"
        >
          <SiInstagram />
        </a>
      </div>

      {/* Moon */}
      <div className="hero__moon"></div>

      {/* Smoke */}
      <div className="hero__smoke">
        <div className="hero__smoke-particle"></div>
        <div className="hero__smoke-particle"></div>
        <div className="hero__smoke-particle"></div>
        <div className="hero__smoke-particle"></div>
        <div className="hero__smoke-particle"></div>
      </div>

      {/* Sakura Petals */}
      <div className="hero__petals">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="hero__petal"></div>
        ))}
      </div>

      {/* Kanji */}
      <div className="hero__kanji hero__kanji--1">忍</div>
      <div className="hero__kanji hero__kanji--2">影</div>

      {/* Main Layout */}
      <div className="hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-line"></div>
            <span className="hero__eyebrow-text">Full Stack Developer</span>
          </div>

          <h1 className="hero__title">
            Hi, I am <br />
            <span className="hero__title-accent" data-text="Surya Prakash">
              Surya Prakash
              <div className="hero__title-accent-sparks"></div>
            </span>
          </h1>

          <div className="hero__subtitle">JAVA • SPRING BOOT • AI SYSTEMS</div>

          <p className="hero__description">
            Java Backend Developer with experience in Spring Boot, MySQL, and
            AWS. Skilled in building scalable RESTful web applications and
            AI-powered solutions, with a focus on performance, cloud deployment,
            and real-world problem solving.
          </p>

          {/* Buttons */}
          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              <span>View Work</span>
            </a>

            <a href="/resume.pdf" className="hero__btn hero__btn--secondary">
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__image-wrap">
          <div className="hero__image-frame">
            <div className="hero__image-corner"></div>
            <div className="hero__image-corner"></div>
            <div className="hero__image-corner"></div>
            <div className="hero__image-corner"></div>

            <img src={heroImg} alt="Surya Prakash" className="hero__image" />

            <div className="hero__image-shadow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line"></div>
      </a>
    </section>
  );
};

export default Hero;
