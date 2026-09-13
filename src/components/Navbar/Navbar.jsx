import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";

import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    {
      label: "Home",
      href: "#home",
      id: "home",
    },
    {
      label: "About Us",
      href: "#about",
      id: "about",
    },
    {
      label: "Services",
      href: "#services",
      id: "services",
    },

    {
      label: "Blog",
      href: "#blogs",
      id: "blogs",
    },
    {
      label: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  /* =====================================================
     NAVBAR INTRO
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".navbar-logo", {
        opacity: 0,
        x: -25,
        duration: 0.8,
      })
        .from(
          ".nav-link",
          {
            opacity: 0,
            y: -12,
            duration: 0.45,
            stagger: 0.07,
          },
          "-=0.5",
        )
        .from(
          ".navbar-contact",
          {
            opacity: 0,
            x: 20,
            duration: 0.55,
          },
          "-=0.4",
        )
        .from(
          ".navbar-consultation",
          {
            opacity: 0,
            x: 20,
            duration: 0.55,
          },
          "-=0.35",
        );
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU ON ESC
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =====================================================
     MOBILE MENU ANIMATION
  ===================================================== */

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;
    const links = menu.querySelectorAll(".mobile-nav-link");
    const footer = menu.querySelector(".mobile-menu-footer");

    if (isMenuOpen) {
      document.body.classList.add("menu-open");

      gsap.set(menu, {
        display: "block",
      });

      gsap.to(menu, {
        height: "calc(100vh - 76px)",
        opacity: 1,
        duration: 0.55,
        ease: "power4.out",
      });

      gsap.fromTo(
        links,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.07,
          delay: 0.12,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        footer,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          delay: 0.35,
          ease: "power3.out",
        },
      );
    } else {
      document.body.classList.remove("menu-open");

      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(menu, {
            display: "none",
          });
        },
      });
    }
  }, [isMenuOpen]);

  /* =====================================================
     SMOOTH NAVIGATION
  ===================================================== */

  const handleNavigation = (event, href, id) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    setActiveSection(id);
    setIsMenuOpen(false);

    const navbarHeight = navbarRef.current?.offsetHeight || 80;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
    >
      {/* =================================================
          TOP GOLD ACCENT
      ================================================= */}

      <div className="navbar-accent" />

      <div className="navbar-inner">
        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={(event) => handleNavigation(event, "#home", "home")}
          aria-label="Sarika Kushawaha Law - Home"
        >
          <img src={logo} alt="Sarika Kushawaha Law" />
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="desktop-navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${
                activeSection === link.id ? "nav-link-active" : ""
              }`}
              onClick={(event) => handleNavigation(event, link.href, link.id)}
            >
              <span>{link.label}</span>

              {activeSection === link.id && <span className="nav-active-dot" />}
            </a>
          ))}
        </nav>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="navbar-right">
          {/* PHONE */}

          <a
            href="tel:+911234567890"
            className="navbar-contact"
            aria-label="Call Sarika Kushawaha Law"
          >
            <span className="navbar-phone-icon">
              <FiPhone />
            </span>

            <span className="navbar-phone-content">
              <small>CALL US</small>
              <strong>+91 12345 67890</strong>
            </span>
          </a>

          {/* CONSULTATION */}

          <a
            href="#contact"
            className="navbar-consultation"
            onClick={(event) => handleNavigation(event, "#contact", "contact")}
          >
            <span>Consultation</span>

            <span className="consultation-icon">
              <FiArrowUpRight />
            </span>
          </a>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            className={`menu-button ${isMenuOpen ? "menu-button-open" : ""}`}
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div ref={mobileMenuRef} className="mobile-navigation">
        <div className="mobile-navigation-inner">
          {/* MOBILE MENU HEADER */}

          <div className="mobile-menu-heading">
            <span className="mobile-menu-label">NAVIGATION</span>

            <span className="mobile-menu-line" />

            <span className="mobile-menu-count">06</span>
          </div>

          {/* MOBILE LINKS */}

          <nav className="mobile-nav-list" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${
                  activeSection === link.id ? "mobile-nav-link-active" : ""
                }`}
                onClick={(event) => handleNavigation(event, link.href, link.id)}
              >
                <span className="mobile-link-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-link-name">{link.label}</span>

                <span className="mobile-link-arrow">
                  <FiArrowUpRight />
                </span>
              </a>
            ))}
          </nav>

          {/* MOBILE FOOTER */}

          <div className="mobile-menu-footer">
            <div className="mobile-footer-info">
              <span>PRIVATE & CONFIDENTIAL</span>

              <span className="mobile-footer-dot" />

              <span>LEGAL COUNSEL</span>
            </div>

            <a
              href="tel:+911234567890"
              className="mobile-call"
              onClick={closeMenu}
            >
              <span className="mobile-call-icon">
                <FiPhone />
              </span>

              <span>
                <small>Speak With Us</small>
                <strong>+91 12345 67890</strong>
              </span>

              <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
