import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import lowLady from "../../assets/images/leady.png";

import "./History.css";

gsap.registerPlugin(ScrollTrigger);

const historyData = [
  {
    year: "1995",
    title: "Founded",
    text: "Established with a commitment to provide trusted legal counsel and meaningful representation.",
  },
  {
    year: "2005",
    title: "Expanded",
    text: "Expanded our practice and strengthened our presence across a wider range of legal matters.",
  },
  {
    year: "2015",
    title: "Recognized",
    text: "Recognized for excellence, professionalism, and a consistent commitment to our clients.",
  },
  {
    year: "2025",
    title: "A New Era",
    text: "Continuing to evolve with modern legal solutions while staying grounded in integrity.",
  },
];

const History = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HEADER */

      gsap.from(".history-header", {
        opacity: 0,
        y: 55,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".history-section",
          start: "top 78%",
          once: true,
        },
      });

      /* TIMELINE LINE */

      gsap.from(".history-timeline-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".history-timeline",
          start: "top 82%",
          once: true,
        },
      });

      /* TIMELINE ITEMS */

      gsap.from(".history-timeline-item", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".history-timeline",
          start: "top 80%",
          once: true,
        },
      });

      /* DESKTOP VISUAL */

      gsap.from(".history-circle", {
        opacity: 0,
        scale: 0.65,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".history-visual",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".history-image", {
        opacity: 0,
        y: 100,
        scale: 0.92,
        duration: 1.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".history-visual",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".history-year-badge", {
        opacity: 0,
        x: 45,
        duration: 0.9,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".history-visual",
          start: "top 75%",
          once: true,
        },
      });

      /* BUTTON */

      gsap.from(".history-button", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: 0.35,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".history-button",
          start: "top 90%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="history-section"
      id="history"
      style={{
        "--history-mobile-image": `url(${lowLady})`,
      }}
    >
      <div className="history-container">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="history-content">
          <div className="history-mobile-bg" aria-hidden="true" />

          <div className="history-header">
            <div className="history-eyebrow">
              <span className="history-eyebrow-line"></span>
              <span>Our History</span>
            </div>

            <h2 className="history-title">
              Built on Integrity.
              <br />
              Focused on <span>Success.</span>
            </h2>

            <p className="history-intro">
              For more than two decades, our firm has grown through trust,
              dedication, and an unwavering commitment to protecting the
              interests of every client we serve.
            </p>
          </div>

          {/* =========================================
              TIMELINE
          ========================================= */}

          <div className="history-timeline">
            <div className="history-timeline-line"></div>

            {historyData.map((item, index) => (
              <article className="history-timeline-item" key={item.year}>
                <div className="history-step-top">
                  <span className="history-year">{item.year}</span>

                  <span className="history-step-number">0{index + 1}</span>
                </div>

                <div className="history-step-dot"></div>

                <div className="history-step-content">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          {/* =========================================
              BUTTON
          ========================================= */}

          <a href="#about" className="history-button">
            <span>Discover Our Story</span>

            <span className="history-button-arrow">↗</span>
          </a>
        </div>

        {/* =========================================
            RIGHT DESKTOP VISUAL
        ========================================= */}

        <div className="history-visual">
          <div className="history-glow"></div>

          <div className="history-circle">
            <div className="history-circle-inner"></div>
          </div>

          <img src={lowLady} alt="Lady Justice" className="history-image" />

          <div className="history-year-badge">
            <span className="history-badge-number">25</span>

            <div className="history-badge-content">
              <strong>Years</strong>

              <small>
                of Trusted
                <br />
                Representation
              </small>
            </div>
          </div>

          <div className="history-visual-label">
            <span></span>
            EST. 1995
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
