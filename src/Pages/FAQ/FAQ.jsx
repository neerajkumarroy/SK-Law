import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Plus, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Faqimage from "../../assets/images/faq.png";

import "./FAQ.css";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    id: "01",
    question: "What types of legal matters do you handle?",
    answer:
      "We provide legal assistance across civil litigation, family and matrimonial matters, criminal law, property disputes, contracts and agreements, corporate and commercial matters, legal advisory, consumer matters, and legal documentation.",
  },
  {
    id: "02",
    question: "How can I schedule a legal consultation?",
    answer:
      "You can schedule a consultation by contacting us directly or by submitting your requirements through our Contact Us page. We will understand your matter and guide you regarding the appropriate next steps.",
  },
  {
    id: "03",
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring any relevant documents connected with your matter, such as agreements, notices, court documents, correspondence, property papers, or other supporting information. These documents help us understand your situation more clearly.",
  },
  {
    id: "04",
    question: "Can I discuss my legal issue before deciding to proceed?",
    answer:
      "Yes. An initial discussion helps us understand the facts and circumstances of your matter. We can then explain the available legal options and the practical course of action based on the information provided.",
  },
  {
    id: "05",
    question: "How long does a legal case usually take?",
    answer:
      "The duration of a legal matter depends on its nature, complexity, evidence, legal procedure, court schedule, and other circumstances. After reviewing your matter, we can provide a practical understanding of the likely process.",
  },
  {
    id: "06",
    question: "Is my legal information kept confidential?",
    answer:
      "Confidentiality and professional discretion are important aspects of legal service. Information shared in connection with your legal matter is handled with appropriate professional care.",
  },
  {
    id: "07",
    question: "Do you help with legal documentation and agreements?",
    answer:
      "Yes. We assist with various legal documents, notices, affidavits, declarations, contracts, agreements, and other documentation depending on the requirements of the matter.",
  },
  {
    id: "08",
    question: "Can you help me understand my legal options?",
    answer:
      "Yes. Understanding your available options is an important part of making an informed decision. We focus on explaining legal matters clearly and identifying practical strategies suited to the circumstances.",
  },
];

const FAQ = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".faq-hero-kicker", {
          opacity: 0,
          y: 20,
          duration: 0.6,
        })
        .from(
          ".faq-hero-title-line",
          {
            opacity: 0,
            y: 55,
            duration: 0.85,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".faq-hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".faq-hero-meta",
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".faq-hero-image",
          {
            opacity: 0,
            x: 80,
            scale: 0.92,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.75",
        )
        .from(
          ".faq-image-brand",
          {
            opacity: 0,
            y: -15,
            duration: 0.5,
          },
          "-=0.6",
        )
        .from(
          ".faq-image-label",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
          },
          "-=0.4",
        );

      gsap.from(".faq-main-header", {
        opacity: 0,
        y: 45,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-main",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".faq-cta", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-cta",
          start: "top 85%",
          once: true,
        },
      });

      /* Subtle transparent image floating */
      gsap.to(".faq-hero-image", {
        y: -8,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Decorative circles */
      gsap.to(".faq-circle-one", {
        rotate: 8,
        scale: 1.04,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".faq-circle-two", {
        rotate: -8,
        scale: 0.96,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <main ref={sectionRef} className="faq-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="faq-hero">
        <div className="faq-hero-bg">
          <div className="faq-hero-grid" />
          <div className="faq-hero-glow" />
          <div className="faq-hero-watermark">
            <Scale />
          </div>
        </div>

        <div className="faq-hero-container">
          {/* LEFT CONTENT */}

          <div className="faq-hero-content">
            <div className="faq-hero-kicker">
              <span className="faq-line" />
              <span>Legal Guidance</span>
            </div>

            <h1 className="faq-hero-title">
              <span className="faq-hero-title-line">Answers to your</span>

              <span className="faq-hero-title-line">
                <em>legal questions.</em>
              </span>
            </h1>

            <p className="faq-hero-description">
              Clear information can make difficult legal matters easier to
              understand. Explore answers to some of the questions our clients
              commonly ask.
            </p>

            <div className="faq-hero-meta">
              <div className="faq-meta-item">
                <span className="faq-meta-check">
                  <Check size={13} />
                </span>

                <span>Clear communication</span>
              </div>

              <span className="faq-meta-divider" />

              <div className="faq-meta-item">
                <span className="faq-meta-check">
                  <Check size={13} />
                </span>

                <span>Client focused</span>
              </div>
            </div>
          </div>

          {/* RIGHT TRANSPARENT IMAGE */}

          <div className="faq-hero-visual">
            <div className="faq-hero-circle faq-circle-one" />
            <div className="faq-hero-circle faq-circle-two" />

            <div className="faq-image-glow" />

            <img
              src={Faqimage}
              alt="Professional Legal Counsel"
              className="faq-hero-image"
            />

            <div className="faq-image-label">
              <span>01</span>
              <i />
              <span>LEGAL COUNSEL</span>
            </div>

            <div className="faq-image-brand">
              <strong>SKL</strong>
              <span>LEGAL COUNSEL</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <section className="faq-main">
        <div className="faq-main-container">
          <div className="faq-main-header">
            <div className="faq-main-kicker">
              <span className="faq-main-line" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="faq-main-title">
              Everything you need to
              <span> know before you begin.</span>
            </h2>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className={`faq-item ${isActive ? "faq-item-active" : ""}`}
                  key={faq.id}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                  >
                    <span className="faq-number">{faq.id}</span>

                    <span className="faq-question-text">{faq.question}</span>

                    <span className="faq-plus">
                      <Plus size={18} strokeWidth={1.5} />
                    </span>
                  </button>

                  <div
                    className="faq-answer-wrapper"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                    }}
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="faq-cta">
        <div className="faq-cta-pattern" />

        <div className="faq-cta-container">
          <div className="faq-cta-content">
            <span className="faq-cta-label">Still have questions?</span>

            <h2>
              Let's discuss your
              <span> legal matter.</span>
            </h2>

            <p>
              Every legal matter is different. Speak with us directly to
              understand your options and the next practical step.
            </p>
          </div>

          <Link to="/contact-us" className="faq-cta-button">
            <span>Request Consultation</span>

            <span className="faq-cta-arrow">
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
