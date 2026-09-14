import { useEffect, useRef } from "react";
import { FiArrowRight, FiShield, FiUsers } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutImage from "../../assets/images/about-lawyer.png";
import "./About.css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-image-wrap", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".about-label",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .from(
          ".about-heading-line",
          {
            opacity: 0,
            y: 45,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".about-text",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".about-card",
          {
            opacity: 0,
            y: 25,
            duration: 0.55,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .from(
          ".about-btn",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.25",
        );

      gsap.to(".about-photo", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section" id="about">
      <div className="about-container">
        {/* ================= IMAGE ================= */}

        <div className="about-visual">
          <div className="about-image-wrap">
            <img src={AboutImage} alt="sarika Law" className="about-photo" />

            <div className="about-photo-overlay" />

            <div className="about-image-label">
              <span className="about-image-index">01</span>
              <span>Our Practice</span>
            </div>

            <div className="about-image-frame" />
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="about-content">
          <div className="about-label">
            <span />
            <p>About Us</p>
          </div>

          <h2 className="about-heading">
            <span className="about-heading-line">Experience that</span>

            <span className="about-heading-line">
              <em>protects</em> what matters.
            </span>
          </h2>

          <p className="about-text">
            We provide thoughtful, strategic and client-focused legal
            representation built around your individual circumstances. Every
            matter receives careful attention, clear communication and a focused
            legal strategy.
          </p>

          {/* ================= CARDS ================= */}

          <div className="about-cards">
            <article className="about-card">
              <div className="about-card-top">
                <div className="about-card-icon">
                  <FiShield />
                </div>

                <span>01</span>
              </div>

              <div>
                <h3>Trusted Legal Expertise</h3>

                <p>
                  Practical advice backed by experience, preparation and
                  attention to detail.
                </p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-card-top">
                <div className="about-card-icon">
                  <FiUsers />
                </div>

                <span>02</span>
              </div>

              <div>
                <h3>Personal Client Approach</h3>

                <p>
                  Your concerns stay at the centre of every strategy and legal
                  decision.
                </p>
              </div>
            </article>
          </div>

          <Link to="/about-us" className="about-btn">
            <span>About More</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
