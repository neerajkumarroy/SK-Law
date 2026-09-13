import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 78%",
          once: true,
        },
      });

      tl.from(".contact-eyebrow", {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".contact-title",
          {
            opacity: 0,
            y: 45,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .from(
          ".contact-intro",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".contact-details",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".contact-form-shell",
          {
            opacity: 0,
            y: 55,
            scale: 0.97,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7",
        );

      gsap.to(".contact-orb-one", {
        x: 35,
        y: 25,
        scale: 1.08,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-orb-two", {
        x: -25,
        y: -20,
        scale: 1.1,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-seal", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

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
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      {/* Background */}
      <div className="contact-background" aria-hidden="true">
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />
        <div className="contact-grid" />
        <div className="contact-glow" />
      </div>

      <div className="contact-container">
        {/* LEFT CONTENT */}
        <div className="contact-content">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            <span>Get In Touch</span>
          </div>

          <h2 className="contact-title">
            Let's Discuss
            <br />
            Your <em>Legal Matter.</em>
          </h2>

          <p className="contact-intro">
            Every legal matter deserves careful attention, clear advice, and a
            strategy built around your best interests. Tell us a little about
            your situation and take the first step toward clarity.
          </p>

          <div className="contact-rule">
            <span />
            <small>Confidential · Professional · Personal</small>
          </div>

          {/* DETAILS */}
          <div className="contact-details">
            <a href="tel:+918445152222" className="contact-detail">
              <span className="contact-detail-icon">
                <Phone size={19} strokeWidth={1.5} />
              </span>

              <span>
                <small>Call Us</small>
                <strong>+91 84451 2222</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <a href="mailto:contact@neerajlaw.com" className="contact-detail">
              <span className="contact-detail-icon">
                <Mail size={19} strokeWidth={1.5} />
              </span>

              <span>
                <small>Email</small>
                <strong>contact@neerajlaw.com</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={19} strokeWidth={1.5} />
              </span>

              <span>
                <small>Office</small>
                <strong>Dehradun, Uttarakhand</strong>
              </span>
            </div>
          </div>

          {/* SMALL TRUST AREA */}
          <div className="contact-trust">
            <div className="contact-seal">
              <span>LAW</span>
              <span>JUSTICE</span>
            </div>

            <div>
              <strong>Your matter. Our commitment.</strong>
              <p>Initial discussions are handled with discretion and care.</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-shell">
          <div className="contact-form-top">
            <div>
              <span className="form-label">Start a Conversation</span>
              <h3>How can we help?</h3>
            </div>

            <span className="form-mark">01</span>
          </div>

          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">
                <CheckCircle2 size={34} strokeWidth={1.4} />
              </div>

              <span>Message Received</span>

              <h3>Thank you for reaching out.</h3>

              <p>
                Your enquiry has been received. We will get back to you as soon
                as possible.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="success-reset"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {/* NAME + EMAIL */}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Your Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* PHONE + SERVICE */}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">
                    Legal Service <span>*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Criminal Law">Criminal Law</option>
                    <option value="Civil Litigation">Civil Litigation</option>
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Property Law">Property Law</option>
                    <option value="Other">Other Legal Matter</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="form-field form-message">
                <label htmlFor="message">
                  Tell Us About Your Matter <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Briefly describe how we can assist you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-bottom">
                <p>
                  <span className="gold-dot" />
                  Your information is treated with complete confidentiality.
                </p>

                <button type="submit" className="contact-submit">
                  <span>Send Enquiry</span>

                  <span className="submit-icon">
                    <ArrowUpRight size={18} strokeWidth={1.7} />
                  </span>
                </button>
              </div>
            </form>
          )}

          <div className="form-footer">
            <Clock3 size={14} strokeWidth={1.5} />
            <span>We usually respond within one business day.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
