import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import "./ContactDetails.css";

gsap.registerPlugin(ScrollTrigger);

const ContactDetails = () => {
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray(".contact-details-reveal");

      revealItems.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 55,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.from(".contact-page-hero-content > *", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".contact-hero-panel", {
        opacity: 0,
        x: 60,
        duration: 1.1,
        delay: 0.25,
        ease: "power4.out",
      });

      gsap.to(".contact-hero-orb-one", {
        x: 35,
        y: 25,
        scale: 1.08,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-hero-orb-two", {
        x: -25,
        y: -20,
        scale: 1.08,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-page-seal", {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredTime: "",
        message: "",
      });
    }, 100);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  const practiceAreas = [
    "Family Law",
    "Criminal Law",
    "Civil Litigation",
    "Corporate Law",
    "Property Law",
    "Other Legal Matter",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Tell us about your matter",
      text: "Share the essential details of your legal concern through the enquiry form or by contacting our office.",
    },
    {
      number: "02",
      title: "Initial discussion",
      text: "We review the information and discuss the nature of your matter, priorities and possible next steps.",
    },
    {
      number: "03",
      title: "Legal strategy",
      text: "Where appropriate, we develop a clear legal approach based on your circumstances and objectives.",
    },
    {
      number: "04",
      title: "Move forward with confidence",
      text: "You receive clear guidance about the available options and the practical path forward.",
    },
  ];

  const faqs = [
    {
      question: "How do I schedule an initial consultation?",
      answer:
        "You can submit the enquiry form on this page or contact the office directly by phone or email. Our team can then discuss the next available consultation options.",
    },
    {
      question: "What information should I provide?",
      answer:
        "A brief overview of your legal matter, the relevant dates, the parties involved and any immediate concerns is usually helpful. Please avoid sending highly sensitive documents until they are specifically requested.",
    },
    {
      question: "Will my enquiry remain confidential?",
      answer:
        "We treat initial enquiries with discretion and care. Information should still be limited to what is reasonably necessary for us to understand your enquiry.",
    },
    {
      question: "Which areas of law do you handle?",
      answer:
        "Our practice includes family law, criminal law, civil litigation, corporate matters and property-related legal matters, along with other legal concerns depending on the circumstances.",
    },
  ];

  return (
    <main ref={pageRef} className="contact-details-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-page-hero">
        <div className="contact-page-hero-background">
          <div className="contact-hero-orb contact-hero-orb-one" />
          <div className="contact-hero-orb contact-hero-orb-two" />
          <div className="contact-hero-grid" />
        </div>

        <div className="contact-page-container contact-page-hero-grid">
          <div className="contact-page-hero-content">
            <Link to="/" className="contact-back-link">
              <ArrowUpRight size={15} />
              Back to Home
            </Link>

            <div className="contact-page-kicker">
              <span />
              Get In Touch
            </div>

            <h1>
              Let&apos;s begin with a<em> conversation.</em>
            </h1>

            <p className="contact-page-hero-description">
              Whether you are facing a personal legal matter, a dispute,
              property concern or a business issue, the first step is often
              simply understanding your options.
            </p>

            <div className="contact-page-hero-meta">
              <div>
                <strong>25+</strong>
                <span>Years of Experience</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Client-Focused Practice</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Professional Attention</span>
              </div>
            </div>
          </div>

          <div className="contact-hero-panel">
            <div className="contact-hero-panel-top">
              <span>Private &amp; Professional</span>

              <div className="contact-page-seal">
                <span>SK</span>
                <small>LAW</small>
              </div>
            </div>

            <div className="contact-hero-panel-content">
              <span className="contact-panel-label">Start Your Enquiry</span>

              <h2>
                Clear advice.
                <br />
                <em>Confident decisions.</em>
              </h2>

              <p>
                Tell us what you need help with. We will review your enquiry and
                guide you toward the appropriate next step.
              </p>

              <a href="#contact-enquiry" className="contact-panel-button">
                <span>Make an enquiry</span>
                <ArrowDownRight size={18} />
              </a>
            </div>

            <div className="contact-hero-panel-bottom">
              <ShieldCheck size={17} />
              <span>Your information is handled with discretion.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="contact-info-section contact-details-reveal">
        <div className="contact-page-container">
          <div className="contact-section-heading">
            <div className="contact-section-kicker">
              <span />
              Contact Information
            </div>

            <h2>
              Reach us when
              <br />
              <em>it matters.</em>
            </h2>

            <p>
              For general enquiries, consultation requests or questions about
              our legal services, you can contact the office through any of the
              channels below.
            </p>
          </div>

          <div className="contact-info-grid">
            <a href="tel:+918445152222" className="contact-info-card">
              <div className="contact-info-card-top">
                <span className="contact-info-icon">
                  <Phone size={21} strokeWidth={1.5} />
                </span>

                <ArrowUpRight size={18} />
              </div>

              <div>
                <span>Call the office</span>
                <h3>+91 84451 2222</h3>
                <p>For consultation &amp; general enquiries</p>
              </div>
            </a>

            <a
              href="mailto:contact@sarikalaw.com"
              className="contact-info-card"
            >
              <div className="contact-info-card-top">
                <span className="contact-info-icon">
                  <Mail size={21} strokeWidth={1.5} />
                </span>

                <ArrowUpRight size={18} />
              </div>

              <div>
                <span>Email us</span>
                <h3>contact@sarikalaw.com</h3>
                <p>Send us your general enquiry</p>
              </div>
            </a>

            <div className="contact-info-card">
              <div className="contact-info-card-top">
                <span className="contact-info-icon">
                  <MapPin size={21} strokeWidth={1.5} />
                </span>
              </div>

              <div>
                <span>Our office</span>
                <h3>Dehradun</h3>
                <p>Uttarakhand, India</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card-top">
                <span className="contact-info-icon">
                  <Clock3 size={21} strokeWidth={1.5} />
                </span>
              </div>

              <div>
                <span>Office hours</span>
                <h3>Mon — Fri</h3>
                <p>10:00 AM — 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION + FORM
      ===================================================== */}

      <section id="contact-enquiry" className="contact-enquiry-section">
        <div className="contact-page-container contact-enquiry-grid">
          <div className="contact-enquiry-content contact-details-reveal">
            <div className="contact-section-kicker light">
              <span />
              Consultation
            </div>

            <h2>
              Tell us what
              <br />
              <em>you need.</em>
            </h2>

            <p>
              Every legal situation is different. A short, clear description
              allows us to understand your enquiry and determine the most
              appropriate way to assist.
            </p>

            <div className="contact-consultation-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Client-focused initial discussion</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Clear explanation of available options</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Professional and discreet communication</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Practical guidance for the next step</span>
              </div>
            </div>

            <div className="contact-confidentiality">
              <ShieldCheck size={21} />

              <div>
                <strong>Confidentiality matters.</strong>
                <p>
                  Please provide only the information necessary to explain your
                  enquiry. Avoid sending highly sensitive documents unless
                  requested.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-details-form-shell contact-details-reveal">
            <div className="contact-form-heading">
              <div>
                <span>Enquiry Form</span>
                <h3>How can we help?</h3>
              </div>

              <strong>01</strong>
            </div>

            {submitted ? (
              <div className="contact-details-success">
                <div className="contact-success-icon">
                  <CheckCircle2 size={38} strokeWidth={1.4} />
                </div>

                <span>Message Received</span>

                <h3>Thank you for reaching out.</h3>

                <p>
                  Your enquiry has been received. We appreciate you taking the
                  time to contact us.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="contact-success-button"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="contact-details-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-field">
                    <label htmlFor="contact-name">
                      Full Name <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-field">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-field">
                    <label htmlFor="contact-phone">Phone Number</label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form-field">
                    <label htmlFor="contact-service">
                      Legal Service <span>*</span>
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>

                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-time">
                    Preferred Consultation Time
                  </label>

                  <select
                    id="contact-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select preferred time</option>
                    <option value="Morning">Morning — 10 AM to 1 PM</option>
                    <option value="Afternoon">Afternoon — 1 PM to 4 PM</option>
                    <option value="Evening">Evening — 4 PM to 6 PM</option>
                  </select>
                </div>

                <div className="contact-form-field contact-form-message">
                  <label htmlFor="contact-message">
                    Tell Us About Your Matter <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Briefly describe your legal matter, concern or question..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-bottom">
                  <p>
                    <span />
                    Your information will be treated with discretion.
                  </p>

                  <button type="submit" className="contact-details-submit">
                    <span>Send Enquiry</span>

                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </form>
            )}

            <div className="contact-form-footer">
              <Clock3 size={14} />
              <span>
                We aim to respond to general enquiries within one business day.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="contact-process-section">
        <div className="contact-page-container">
          <div className="contact-section-heading centered contact-details-reveal">
            <div className="contact-section-kicker">
              <span />
              What Happens Next
              <span />
            </div>

            <h2>
              A simple path toward
              <br />
              <em>clarity.</em>
            </h2>

            <p>
              Getting legal guidance does not need to feel complicated. Our
              initial process is designed to be clear, focused and
              straightforward.
            </p>
          </div>

          <div className="contact-process-grid">
            {processSteps.map((step) => (
              <article
                className="contact-process-card contact-details-reveal"
                key={step.number}
              >
                <div className="contact-process-number">{step.number}</div>

                <div className="contact-process-line" />

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRACTICE AREAS
      ===================================================== */}

      <section className="contact-practice-section">
        <div className="contact-page-container">
          <div className="contact-practice-layout">
            <div className="contact-details-reveal">
              <div className="contact-section-kicker">
                <span />
                Areas of Practice
              </div>

              <h2>
                Legal guidance
                <br />
                <em>with purpose.</em>
              </h2>

              <p>
                We approach every matter with careful attention to the
                circumstances, objectives and legal issues involved.
              </p>
            </div>

            <div className="contact-practice-list contact-details-reveal">
              {practiceAreas.map((area, index) => (
                <div className="contact-practice-item" key={area}>
                  <span>0{index + 1}</span>
                  <strong>{area}</strong>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="contact-location-section">
        <div className="contact-page-container contact-location-grid">
          <div className="contact-location-map contact-details-reveal">
            <div className="contact-map-grid" />

            <div className="contact-map-pin">
              <MapPin size={25} strokeWidth={1.5} />
            </div>

            <div className="contact-map-label">
              <span>Our Office</span>
              <strong>Dehradun, Uttarakhand</strong>
            </div>

            <div className="contact-map-ring ring-one" />
            <div className="contact-map-ring ring-two" />
          </div>

          <div className="contact-location-content contact-details-reveal">
            <div className="contact-section-kicker">
              <span />
              Visit Our Office
            </div>

            <h2>
              A place for
              <br />
              <em>important conversations.</em>
            </h2>

            <p>
              Our office provides a professional and private setting for
              consultations and discussions concerning your legal matter.
            </p>

            <div className="contact-location-details">
              <div>
                <MapPin size={19} />
                <span>
                  <small>Location</small>
                  <strong>Dehradun, Uttarakhand, India</strong>
                </span>
              </div>

              <div>
                <Clock3 size={19} />
                <span>
                  <small>Office Hours</small>
                  <strong>Monday — Friday · 10 AM — 6 PM</strong>
                </span>
              </div>
            </div>

            <a href="tel:+918445152222" className="contact-location-button">
              <span>Call the office</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="contact-faq-section">
        <div className="contact-page-container">
          <div className="contact-section-heading contact-details-reveal">
            <div className="contact-section-kicker">
              <span />
              Frequently Asked Questions
            </div>

            <h2>
              Before you
              <br />
              <em>reach out.</em>
            </h2>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq, index) => (
              <details
                className="contact-faq-item contact-details-reveal"
                key={faq.question}
              >
                <summary>
                  <span>
                    <small>0{index + 1}</small>
                    {faq.question}
                  </span>

                  <span className="contact-faq-plus">+</span>
                </summary>

                <div className="contact-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final-cta">
        <div className="contact-final-glow" />

        <div className="contact-page-container contact-final-content contact-details-reveal">
          <div className="contact-section-kicker light">
            <span />
            Let&apos;s Talk
            <span />
          </div>

          <h2>
            Sometimes the first
            <br />
            step is simply
            <br />
            <em>asking.</em>
          </h2>

          <p>
            If you have a legal concern and are unsure what to do next, start
            with a conversation.
          </p>

          <div className="contact-final-actions">
            <a href="#contact-enquiry" className="contact-final-primary">
              <span>Make an enquiry</span>
              <ArrowUpRight size={18} />
            </a>

            <Link to="/" className="contact-final-secondary">
              Return to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactDetails;
