import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Phone, ShieldCheck, Scale } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import lawyerImage from "../../assets/images/user-3.png";
import "./CTA.css";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".cta-label", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          ".cta-title-line",
          {
            opacity: 0,
            y: 55,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.35",
        )
        .from(
          ".cta-copy",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.45",
        )
        .from(
          ".cta-actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".cta-trust",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
          },
          "-=0.35",
        )
        .from(
          ".cta-image",
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
          ".cta-image-glow",
          {
            opacity: 0,
            scale: 0.7,
            duration: 1.2,
          },
          "-=0.9",
        )
        .from(
          ".cta-badge",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.55",
        );

      /* Subtle floating image */
      gsap.to(".cta-image", {
        y: -10,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Soft glow movement */
      gsap.to(".cta-image-glow", {
        scale: 1.08,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Background orb */
      gsap.to(".cta-orb", {
        x: 30,
        y: -20,
        scale: 1.08,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section">
      {/* Background */}
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-grid" />
        <div className="cta-orb" />
        <div className="cta-watermark">
          <Scale />
        </div>
      </div>

      <div className="cta-container">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div className="cta-content">
          <div className="cta-label">
            <span className="cta-label-line" />
            <span>LEGAL COUNSEL</span>
            <span className="cta-label-dot" />
          </div>

          <h2 className="cta-title">
            <span className="cta-title-line">Your legal matter</span>

            <span className="cta-title-line">
              deserves <em>clarity.</em>
            </span>
          </h2>

          <p className="cta-copy">
            Speak with us to understand your options, receive practical legal
            guidance, and move forward with confidence.
          </p>

          <div className="cta-actions">
            <a href="tel:+918445150766" className="cta-primary">
              <span className="cta-phone">
                <Phone size={16} strokeWidth={1.8} />
              </span>

              <span>Speak With Us</span>

              <ArrowUpRight
                className="cta-action-arrow"
                size={17}
                strokeWidth={1.8}
              />
            </a>

            <a href="#contact" className="cta-secondary">
              Request Consultation
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </a>
          </div>

          <div className="cta-trust">
            <div className="trust-item">
              <ShieldCheck size={15} />
              <span>Confidential consultation</span>
            </div>

            <span className="trust-divider" />

            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>Client focused</span>
            </div>
          </div>

          <div className="cta-bottom-line" />
        </div>

        {/* =========================================
            RIGHT VISUAL
        ========================================= */}
        <div className="cta-visual">
          {/* Soft glow behind transparent image */}
          <div className="cta-image-glow" />

          {/* Decorative circle */}
          <div className="cta-ring cta-ring-one" />
          <div className="cta-ring cta-ring-two" />

          {/* Lawyer */}
          <img
            src={lawyerImage}
            alt="Professional Legal Counsel"
            className="cta-image"
          />

          {/* Small premium badge */}
          <div className="cta-badge">
            <div className="cta-badge-icon">
              <Scale size={17} strokeWidth={1.5} />
            </div>

            <div>
              <strong>Trusted Counsel</strong>
              <span>Strategic legal guidance</span>
            </div>
          </div>

          {/* SKL Branding */}
          <div className="cta-brand">
            <strong>SKL</strong>
            <span>LEGAL COUNSEL</span>
          </div>

          <div className="cta-number">
            <span>01</span>
            <i />
            <span>COUNSEL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
