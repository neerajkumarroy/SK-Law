import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceHero from "../../assets/images/service-hero.png";

import {
  FaArrowRight,
  FaBalanceScale,
  FaBriefcase,
  FaBuilding,
  FaCheck,
  FaFileContract,
  FaGavel,
  FaHandshake,
  FaHome,
  FaLandmark,
  FaRegLightbulb,
  FaUserShield,
} from "react-icons/fa";

import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    number: "01",
    icon: FaBalanceScale,
    title: "Civil Litigation",
    description:
      "Strategic legal representation in civil disputes, claims, recovery matters, injunctions and related proceedings.",
    points: [
      "Civil disputes",
      "Recovery matters",
      "Injunctions",
      "Court representation",
    ],
  },

  {
    number: "02",
    icon: FaHandshake,
    title: "Family & Matrimonial Law",
    description:
      "Sensitive and practical legal guidance for family and matrimonial matters with a focus on protecting your interests.",
    points: [
      "Divorce matters",
      "Maintenance",
      "Child custody",
      "Matrimonial disputes",
    ],
  },

  {
    number: "03",
    icon: FaGavel,
    title: "Criminal Law",
    description:
      "Professional assistance and representation in criminal proceedings, complaints, bail matters and related disputes.",
    points: [
      "Bail matters",
      "Criminal complaints",
      "Defence representation",
      "Criminal proceedings",
    ],
  },

  {
    number: "04",
    icon: FaHome,
    title: "Property & Real Estate",
    description:
      "Legal support for property transactions, ownership disputes, documentation and real-estate related matters.",
    points: [
      "Property disputes",
      "Title matters",
      "Sale & purchase",
      "Property documentation",
    ],
  },

  {
    number: "05",
    icon: FaBuilding,
    title: "Corporate & Commercial Law",
    description:
      "Legal guidance for businesses and organisations dealing with commercial arrangements, disputes and compliance.",
    points: [
      "Business agreements",
      "Commercial disputes",
      "Corporate advisory",
      "Legal compliance",
    ],
  },

  {
    number: "06",
    icon: FaFileContract,
    title: "Contracts & Agreements",
    description:
      "Drafting, reviewing and advising on agreements designed to clearly define responsibilities and protect your interests.",
    points: [
      "Contract drafting",
      "Agreement review",
      "Legal notices",
      "Risk assessment",
    ],
  },

  {
    number: "07",
    icon: FaRegLightbulb,
    title: "Legal Advisory",
    description:
      "Clear and practical legal advice to help individuals and businesses understand their options before taking action.",
    points: [
      "Legal consultation",
      "Risk evaluation",
      "Strategic advice",
      "Dispute prevention",
    ],
  },

  {
    number: "08",
    icon: FaUserShield,
    title: "Consumer & Personal Matters",
    description:
      "Assistance with personal legal concerns, consumer disputes and matters where your rights require protection.",
    points: [
      "Consumer disputes",
      "Personal claims",
      "Legal representation",
      "Rights protection",
    ],
  },

  {
    number: "09",
    icon: FaLandmark,
    title: "Legal Documentation",
    description:
      "Professional preparation and review of legal documents with attention to clarity, accuracy and practical use.",
    points: [
      "Legal notices",
      "Affidavits",
      "Declarations",
      "Legal documentation",
    ],
  },
];

/* =========================================================
   PROCESS DATA
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding your situation, concerns and legal objectives.",
  },

  {
    number: "02",
    title: "Assess",
    text: "The relevant facts and legal considerations are carefully evaluated.",
  },

  {
    number: "03",
    title: "Strategise",
    text: "We develop a practical legal approach based on your circumstances.",
  },

  {
    number: "04",
    title: "Act",
    text: "Once the approach is clear, we move forward with focused representation.",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const whyChooseUs = [
  "Client-focused legal guidance",
  "Clear communication at every stage",
  "Practical and strategic approach",
  "Thorough preparation",
  "Professional representation",
  "Confidential handling of matters",
];

/* =========================================================
   COMPONENT
========================================================= */

const Services = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return undefined;

    /* =====================================================
       NAVBAR OFFSET
    ===================================================== */

    const updateNavbarOffset = () => {
      const navbar =
        document.querySelector(".navbar") ||
        document.querySelector("header") ||
        document.querySelector("nav");

      if (!navbar) return;

      const navbarHeight = navbar.getBoundingClientRect().height;

      const navbarPosition = window.getComputedStyle(navbar).position;

      const needsOffset =
        navbarPosition === "fixed" || navbarPosition === "absolute";

      page.style.setProperty(
        "--services-navbar-offset",
        needsOffset ? `${navbarHeight}px` : "0px",
      );
    };

    updateNavbarOffset();

    let resizeObserver;

    const navbar =
      document.querySelector(".navbar") ||
      document.querySelector("header") ||
      document.querySelector("nav");

    if (navbar && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(updateNavbarOffset);

      resizeObserver.observe(navbar);
    }

    window.addEventListener("resize", updateNavbarOffset);

    /* =====================================================
       GSAP
    ===================================================== */

    const ctx = gsap.context(() => {
      /* -----------------------------------------------
         HERO
      ------------------------------------------------ */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".services-hero-kicker", {
          y: 25,
          opacity: 0,
          duration: 0.7,
        })

        .from(
          ".services-hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.35",
        )

        .from(
          ".services-hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.5",
        )

        .from(
          ".services-hero-actions",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45",
        )

        .from(
          ".services-hero-stats",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )

        .from(
          ".services-hero-image",
          {
            x: 90,
            opacity: 0,
            scale: 0.92,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.9",
        );

      /* -----------------------------------------------
         HERO IMAGE FLOAT
      ------------------------------------------------ */

      gsap.to(".services-hero-image", {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* -----------------------------------------------
         HERO DECORATION
      ------------------------------------------------ */

      gsap.to(".services-hero-decoration-one", {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".services-hero-decoration-two", {
        rotate: -360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });

      /* -----------------------------------------------
         SECTION HEADINGS
      ------------------------------------------------ */

      gsap.utils.toArray(".services-reveal-heading").forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",

          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });

      /* -----------------------------------------------
         SERVICE CARDS
      ------------------------------------------------ */

      gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: (index % 3) * 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });

      /* -----------------------------------------------
         PROCESS
      ------------------------------------------------ */

      gsap.utils.toArray(".process-card").forEach((card, index) => {
        gsap.from(card, {
          y: 45,
          opacity: 0,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });

      /* -----------------------------------------------
         WHY CHOOSE US
      ------------------------------------------------ */

      gsap.utils.toArray(".why-service-item").forEach((item, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -35 : 35,
          opacity: 0,
          duration: 0.65,
          delay: (index % 2) * 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        });
      });

      /* -----------------------------------------------
         CONSULTATION
      ------------------------------------------------ */

      gsap.from(".consultation-card", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".consultation-card",
          start: "top 85%",
          once: true,
        },
      });

      /* -----------------------------------------------
         FINAL CTA
      ------------------------------------------------ */

      gsap.from(".services-final-cta-inner", {
        y: 55,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".services-final-cta",
          start: "top 82%",
          once: true,
        },
      });
    }, page);

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      ctx.revert();

      window.removeEventListener("resize", updateNavbarOffset);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <main ref={pageRef} className="services-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">
        <div className="services-hero-grid" />

        <div className="services-hero-decoration services-hero-decoration-one" />

        <div className="services-hero-decoration services-hero-decoration-two" />

        <div className="services-container services-hero-container">
          {/* LEFT CONTENT */}

          <div className="services-hero-content">
            <div className="services-hero-kicker">
              <span className="services-kicker-line" />
              <span>Our Legal Services</span>
            </div>

            <h1 className="services-hero-title">
              Legal expertise
              <span>with purpose.</span>
            </h1>

            <p className="services-hero-description">
              Thoughtful legal counsel, strategic representation and
              client-focused solutions for individuals, families and businesses.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact-us" className="services-primary-btn">
                <span>Discuss Your Matter</span>
                <FaArrowRight />
              </Link>

              <a href="#all-services" className="services-text-btn">
                <span>Explore Services</span>
                <strong>↓</strong>
              </a>
            </div>

            <div className="services-hero-stats">
              <div className="services-hero-stat">
                <strong>25+</strong>
                <span>Years of Experience</span>
              </div>

              <div className="services-stat-divider" />

              <div className="services-hero-stat">
                <strong>09</strong>
                <span>Core Practice Areas</span>
              </div>

              <div className="services-stat-divider" />

              <div className="services-hero-stat">
                <strong>01</strong>
                <span>Client-First Approach</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="services-hero-visual">
            <div className="services-image-glow" />

            <div className="services-image-frame">
              <img
                src={serviceHero}
                alt="Legal services"
                className="services-hero-image"
              />
            </div>

            <div className="services-image-label">
              <FaBalanceScale />

              <div>
                <span>Trusted Legal Counsel</span>
                <small>Professional • Strategic • Client Focused</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">
        <div className="services-container">
          <div className="services-intro-layout services-reveal-heading">
            <div className="section-label">
              <span />
              What We Do
            </div>

            <div className="services-intro-copy">
              <h2>
                Legal solutions built around
                <em>your needs.</em>
              </h2>

              <p>
                Every legal matter has its own circumstances. Our approach
                begins with understanding those circumstances before developing
                a clear and practical legal strategy.
              </p>

              <p>
                Whether you need advice, documentation, negotiation or
                representation, our services are designed to help you make
                informed decisions with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL SERVICES
      ===================================================== */}

      <section id="all-services" className="all-services-section">
        <div className="services-container">
          <div className="services-section-heading services-reveal-heading">
            <div>
              <div className="section-label">
                <span />
                Practice Areas
              </div>

              <h2>
                Comprehensive legal
                <em>services.</em>
              </h2>
            </div>

            <p>
              Professional legal support across a broad range of personal,
              civil, commercial and advisory matters.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>

                    <div className="service-icon">
                      <Icon />
                    </div>
                  </div>

                  <div className="service-card-body">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <FaCheck />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-footer">
                    <Link to="/contact-us">
                      <span>Discuss this service</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="services-why">
        <div className="services-why-pattern" />

        <div className="services-container services-why-container">
          <div className="services-why-content services-reveal-heading">
            <div className="section-label section-label-light">
              <span />
              Why Choose Us
            </div>

            <h2>
              Experience matters.
              <em>So does how you use it.</em>
            </h2>

            <p>
              Good legal representation is not only about knowing the law. It is
              about understanding the person, business or situation behind the
              legal matter and developing a thoughtful way forward.
            </p>

            <Link to="/about-us" className="services-outline-btn">
              <span>Learn About Us</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="services-why-list">
            {whyChooseUs.map((item, index) => (
              <div className="why-service-item" key={item}>
                <span className="why-service-number">0{index + 1}</span>

                <span className="why-service-check">
                  <FaCheck />
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="services-process">
        <div className="services-container">
          <div className="services-section-heading services-reveal-heading">
            <div>
              <div className="section-label">
                <span />
                Our Approach
              </div>

              <h2>
                From concern to
                <em>clear action.</em>
              </h2>
            </div>

            <p>
              A structured approach helps us understand your matter, evaluate
              the available options and move forward with purpose.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-card" key={step.number}>
                <div className="process-number">{step.number}</div>

                <div className="process-line" />

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION
      ===================================================== */}

      <section className="services-consultation">
        <div className="services-container">
          <div className="consultation-card">
            <div className="consultation-icon">
              <FaBriefcase />
            </div>

            <div className="consultation-content">
              <span>Need legal guidance?</span>

              <h3>
                Let's understand your matter before deciding the next step.
              </h3>
            </div>

            <Link to="/contact-us" className="consultation-btn">
              <span>Request a Consultation</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="services-final-cta">
        <div className="services-final-glow" />

        <div className="services-container">
          <div className="services-final-cta-inner">
            <div className="section-label section-label-light">
              <span />
              Start a Conversation
            </div>

            <h2>
              Your legal matter deserves
              <em>thoughtful attention.</em>
            </h2>

            <p>
              Tell us a little about your matter and take the first step towards
              understanding your legal options.
            </p>

            <Link to="/contact-us" className="services-primary-btn">
              <span>Contact Our Office</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
