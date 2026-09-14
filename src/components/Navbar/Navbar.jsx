import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { FiArrowUpRight, FiMenu, FiX, FiPhone } from "react-icons/fi";

import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /*
  =====================================================
  NAVIGATION LINKS
  =====================================================
  */

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
    {
      label: "Contact",
      path: "/contact-us",
    },
  ];

  /*
  =====================================================
  CHECK ACTIVE PAGE
  =====================================================
  */

  const isActivePage = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  /*
  =====================================================
  NAVBAR INTRO ANIMATION
  =====================================================
  */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".navbar-logo", {
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

    return () => {
      ctx.revert();
    };
  }, []);

  /*
  =====================================================
  SCROLL EFFECT
  =====================================================
  */

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

  /*
  =====================================================
  CLOSE MOBILE MENU WHEN PAGE CHANGES
  =====================================================
  */

  useEffect(() => {
    setIsMenuOpen(false);

    /*
      Every new page starts from top.
    */

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  /*
  =====================================================
  ESCAPE KEY
  =====================================================
  */

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

  /*
  =====================================================
  BODY SCROLL LOCK
  =====================================================
  */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  /*
  =====================================================
  MOBILE MENU ANIMATION
  =====================================================
  */

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;

    const links = menu.querySelectorAll(".mobile-nav-link");

    const footer = menu.querySelector(".mobile-menu-footer");

    if (isMenuOpen) {
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

      if (footer) {
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
      }
    } else {
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

  /*
  =====================================================
  PAGE NAVIGATION
  =====================================================
  */

  const handleNavigation = (event, path) => {
    event.preventDefault();

    setIsMenuOpen(false);

    /*
      If user clicks the current page,
      simply scroll to top.
    */

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    /*
      Navigate to completely separate page.
    */

    navigate(path);
  };

  /*
  =====================================================
  CLOSE MOBILE MENU
  =====================================================
  */

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /*
  =====================================================
  PHONE NUMBER
  =====================================================
  */

  const phoneNumber = "+911234567890";

  /*
  =====================================================
  RENDER
  =====================================================
  */

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

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={(event) => handleNavigation(event, "/")}
          aria-label="Sarika Kushawaha Law - Home"
        >
          <img src={logo} alt="Sarika Kushawaha Law" />
        </NavLink>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="desktop-navigation" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActivePage(link.path);

            return (
              <a
                key={link.path}
                href={link.path}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
                onClick={(event) => handleNavigation(event, link.path)}
              >
                <span>{link.label}</span>

                {active && <span className="nav-active-dot" />}
              </a>
            );
          })}
        </nav>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="navbar-right">
          {/* PHONE */}

          <a
            href={`tel:${phoneNumber}`}
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
            href="/contact"
            className="navbar-consultation"
            onClick={(event) => handleNavigation(event, "/contact-us")}
          >
            <span>Consultation</span>

            <span className="consultation-icon">
              <FiArrowUpRight />
            </span>
          </a>

          {/* MOBILE MENU BUTTON */}

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

            <span className="mobile-menu-count">05</span>
          </div>

          {/* MOBILE LINKS */}

          <nav className="mobile-nav-list" aria-label="Mobile navigation">
            {navLinks.map((link, index) => {
              const active = isActivePage(link.path);

              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`mobile-nav-link ${
                    active ? "mobile-nav-link-active" : ""
                  }`}
                  onClick={(event) => handleNavigation(event, link.path)}
                >
                  <span className="mobile-link-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mobile-link-name">{link.label}</span>

                  <span className="mobile-link-arrow">
                    <FiArrowUpRight />
                  </span>
                </a>
              );
            })}
          </nav>

          {/* MOBILE FOOTER */}

          <div className="mobile-menu-footer">
            <div className="mobile-footer-info">
              <span>PRIVATE & CONFIDENTIAL</span>

              <span className="mobile-footer-dot" />

              <span>LEGAL COUNSEL</span>
            </div>

            <a
              href={`tel:${phoneNumber}`}
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
