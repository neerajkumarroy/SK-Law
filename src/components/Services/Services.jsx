import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  HeartPulse,
  UsersRound,
  BriefcaseBusiness,
  House,
  FileText,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import "./Services.css";
import services from "../../data/services";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  ShieldCheck,
  HeartPulse,
  UsersRound,
  BriefcaseBusiness,
  House,
  FileText,
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const extraCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         INTRO ANIMATION
      ========================================= */

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      intro
        .from(".services-eyebrow", {
          opacity: 0,
          x: -35,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".services-heading",
          {
            opacity: 0,
            y: 45,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .from(
          ".services-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".services-header-action",
          {
            opacity: 0,
            x: 30,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".services-card",
          {
            opacity: 0,
            y: 65,
            scale: 0.96,
            duration: 0.85,
            stagger: 0.13,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .from(
          ".services-bottom-note",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        );

      /* =========================================
         DECORATIVE ELEMENTS
      ========================================= */

      gsap.from(".services-decor-circle", {
        opacity: 0,
        scale: 0.7,
        rotation: -25,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".services-side-mark", {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =========================================
     CARD HOVER ANIMATION
  ========================================= */

  useEffect(() => {
    const cards = gsap.utils.toArray(".services-card");

    const cleanups = [];

    cards.forEach((card) => {
      const image = card.querySelector(".services-card-image");
      const icon = card.querySelector(".services-icon");
      const arrow = card.querySelector(".services-card-arrow");
      const number = card.querySelector(".services-number");
      const line = card.querySelector(".services-gold-line");

      const enter = () => {
        gsap.to(card, {
          y: -8,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(image, {
          scale: 1.08,
          duration: 0.9,
          ease: "power3.out",
        });

        gsap.to(icon, {
          y: -4,
          rotate: 4,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(number, {
          y: -5,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(arrow, {
          x: 5,
          y: -3,
          rotation: 5,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(line, {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(card, {
          y: 0,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(image, {
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        });

        gsap.to(icon, {
          y: 0,
          rotate: 0,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(number, {
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(arrow, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(line, {
          scaleX: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [showAll]);

  /* =========================================
     EXTRA CARDS ANIMATION
  ========================================= */

  useEffect(() => {
    if (!showAll) return;

    const cards = extraCardsRef.current.filter(Boolean);

    if (!cards.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "power4.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      },
    );
  }, [showAll]);

  const handleToggle = () => {
    setShowAll((previous) => !previous);
  };

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section ref={sectionRef} className="services-section" id="services">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="services-bg-orb" />

      <div className="services-bg-grid" />

      <div className="services-decor-circle">
        <span />
      </div>

      <div className="services-side-mark">
        <span>LEGAL</span>
        <span>EXPERTISE</span>
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="services-container">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="services-header">
          <div className="services-heading-area">
            <div className="services-eyebrow">
              <span className="services-eyebrow-line" />
              <span>Our Services</span>
            </div>

            <h2 className="services-heading">
              Comprehensive Legal
              <br />
              Services
              <br />
              <span>Tailored to Your Needs.</span>
            </h2>

            <p className="services-description">
              We provide a wide range of legal services, tailored to your unique
              situation, ensuring expert guidance, strategic advice, and trusted
              representation every step of the way.
            </p>
          </div>

          {/* =========================================
              HEADER ACTION
          ========================================= */}

          <div className="services-header-action">
            <div className="services-action-label">
              <span>Our Expertise</span>
              <small>
                {String(services.length).padStart(2, "0")} Legal Areas
              </small>
            </div>

            <button
              type="button"
              className="services-view-button"
              onClick={handleToggle}
              aria-expanded={showAll}
            >
              <span>{showAll ? "Show Less" : "View All Services"}</span>

              <span className="services-view-icon">
                {showAll ? <ArrowDown size={17} /> : <ArrowRight size={17} />}
              </span>
            </button>
          </div>
        </div>

        {/* =========================================
            SERVICES CARDS
        ========================================= */}

        <div
          className={`services-cards ${
            showAll ? "services-cards-expanded" : ""
          }`}
        >
          {visibleServices.map((service, index) => {
            const Icon = iconMap[service.icon] || ShieldCheck;

            const isFeatured = !showAll ? index === 1 : index % 3 === 1;

            return (
              <article
                key={service.id || index}
                ref={(element) => {
                  if (index < 3) {
                    cardsRef.current[index] = element;
                  } else {
                    extraCardsRef.current[index - 3] = element;
                  }
                }}
                className={`services-card ${
                  isFeatured ? "services-card-featured" : ""
                }`}
              >
                {/* =================================
                    CARD IMAGE
                ================================= */}

                <div className="services-card-visual">
                  <div className="services-card-image" />

                  <div className="services-card-overlay" />

                  <div className="services-card-pattern" />
                </div>

                {/* =================================
                    CARD TOP
                ================================= */}

                <div className="services-card-top">
                  <div className="services-icon">
                    <Icon size={24} strokeWidth={1.35} />
                  </div>

                  <div className="services-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* =================================
                    CARD CONTENT
                ================================= */}

                <div className="services-card-content">
                  <div className="services-card-kicker">Legal Practice</div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                {/* =================================
                    CARD FOOTER
                ================================= */}

                <div className="services-card-footer">
                  <Link to="/services" className="services-learn">
                    <span>Explore Service</span>
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </Link>

                  <div className="services-card-arrow">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </div>

                  <span className="services-gold-line" />
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM EDITORIAL NOTE
        ========================================= */}

        <div className="services-bottom-note">
          <div className="services-note-line" />

          <div className="services-note-center">
            <span className="services-note-dot" />

            <p>
              Every matter deserves clarity, strategy and complete attention.
            </p>

            <span className="services-note-dot" />
          </div>

          <div className="services-note-line" />
        </div>
      </div>
    </section>
  );
};

export default Services;
