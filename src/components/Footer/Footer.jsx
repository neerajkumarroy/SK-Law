import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="skl-footer">
      <div className="skl-footer-inner">
        {/* ================= TOP FOOTER ================= */}
        <div className="skl-footer-top">
          {/* BRAND */}
          <div className="skl-footer-brand">
            <Link to="/" className="skl-footer-logo">
              <img src={logo} alt="Sarika Kushawaha Law" />
            </Link>

            <p className="skl-footer-description">
              Clear legal guidance, strategic representation and trusted counsel
              built around your rights and interests.
            </p>

            <div className="skl-footer-location">
              <MapPin size={17} strokeWidth={1.5} />
              <span>Dehradun, Uttarakhand, India</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="skl-footer-column">
            <span className="skl-footer-label">Quick Links</span>

            <nav className="skl-footer-links">
              <Link to="/">Home</Link>
              <Link to="/#about">About Us</Link>
              <Link to="/#services">Services</Link>
              <Link to="/#blogs">Legal Journal</Link>
              <Link to="/#contact">Contact</Link>
            </nav>
          </div>

          {/* PRACTICE AREAS */}
          <div className="skl-footer-column">
            <span className="skl-footer-label">Practice Areas</span>

            <nav className="skl-footer-links">
              <a href="/#services">Civil Litigation</a>
              <a href="/#services">Criminal Law</a>
              <a href="/#services">Family Law</a>
              <a href="/#services">Property Law</a>
              <a href="/#services">Corporate Law</a>
            </nav>
          </div>

          {/* CONTACT */}
          <div className="skl-footer-column skl-footer-contact">
            <span className="skl-footer-label">Contact Info</span>

            <a href="tel:+918445150766" className="skl-contact-item">
              <span className="skl-contact-icon">
                <Phone size={16} strokeWidth={1.6} />
              </span>

              <span>+91 84451 50766</span>
            </a>

            <a
              href="mailto:info@sarikakushawahalaw.com"
              className="skl-contact-item"
            >
              <span className="skl-contact-icon">
                <Mail size={16} strokeWidth={1.6} />
              </span>

              <span>info@sarikakushawahalaw.com</span>
            </a>

            <div className="skl-contact-item">
              <span className="skl-contact-icon">
                <MapPin size={16} strokeWidth={1.6} />
              </span>

              <span>Dehradun, Uttarakhand</span>
            </div>
          </div>
        </div>

        {/* ================= GOLD LINE ================= */}
        <div className="skl-footer-divider">
          <span />
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="skl-footer-bottom">
          <p>© {currentYear} Sarika Kushawaha Law. All rights reserved.</p>

          <div className="skl-footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          <button
            type="button"
            className="skl-footer-top-btn"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
