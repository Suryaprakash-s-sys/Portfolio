import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiFiverr } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero" id="hero">
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

          <h1 class="hero__title">
            Hi, I am <br />
            <span class="hero__title-accent" data-text="Surya Prakash">
              Surya Prakash
              <div class="hero__title-accent-sparks"></div>
            </span>
          </h1>

          <div className="hero__subtitle">JAVA • SPRING BOOT • AI SYSTEMS</div>

          <p className="hero__description">
            Java Backend Developer with experience in Spring Boot, MySQL, and
            AI-powered applications. Built scalable web systems and deep
            learning projects focused on real-world impact.
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

          {/* Socials */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <a
              href="https://github.com/Suryaprakash-s-sys"
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--secondary"
              style={{
                padding: ".8rem",
              }}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/surya--prakash-s"
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--secondary"
              style={{
                padding: ".8rem",
              }}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/Surya_Prakash_25"
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--secondary"
              style={{
                padding: ".8rem",
              }}
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.fiverr.com/craftedbysurya"
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--secondary"
              style={{
                padding: ".8rem",
              }}
            >
              <SiFiverr />
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
