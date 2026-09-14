import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import gsap from "gsap";

import heroimage from "../../assets/images/hero-law.png";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".hero-image",
        {
          scale: 1.08,
        },
        {
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
        },
      )
        .fromTo(
          ".hero-eyebrow",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=1.1",
        )
        .fromTo(
          ".hero-title-line",
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.45",
        )
        .fromTo(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-button",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .fromTo(
          ".hero-stat-card",
          {
            opacity: 0,
            x: 30,
            y: 25,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
          },
          "-=0.45",
        )
        .fromTo(
          ".hero-scroll",
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.2",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home">
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div className="hero-background">
        <img
          src={heroimage}
          alt="Professional legal representation"
          className="hero-image"
        />
      </div>

      {/* =========================================
          OVERLAYS
      ========================================== */}
      <div className="hero-overlay" />
      <div className="hero-gradient" />

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <div className="hero-content">
        <div className="hero-left">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>Trusted Legal Representation</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            <span className="hero-title-line">Relentless</span>

            <span className="hero-title-line">Representation.</span>

            <span className="hero-title-line">Proven Results.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Backed by decades of courtroom experience, we deliver strategic,
            relentless advocacy in high-stakes legal matters.
          </p>

          {/* CTA */}
          <a href="#contact" className="hero-button">
            <span>Schedule Consultation</span>
            <FiArrowRight />
          </a>
        </div>

        {/* =========================================
            EXPERIENCE CARD
        ========================================== */}
        <div className="hero-stat-card">
          <div className="hero-stat-people">
            <div className="hero-avatar">
              <FaUserTie />
            </div>

            <div className="hero-avatar">
              <FaUserTie />
            </div>

            <div className="hero-avatar">
              <FaUserTie />
            </div>

            <div className="hero-avatar">
              <FaUserTie />
            </div>
          </div>

          <div className="hero-stat-content">
            <strong>3000+</strong>
            <span>Cases Resolved</span>
          </div>
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
