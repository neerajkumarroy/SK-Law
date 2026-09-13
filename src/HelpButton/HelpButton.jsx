import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import "./HelpButton.css";

const HelpButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    // Entrance animation
    gsap.fromTo(
      button,
      {
        opacity: 0,
        scale: 0.7,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        delay: 1.2,
        ease: "back.out(1.7)",
      },
    );

    // Subtle floating animation
    gsap.to(button, {
      y: -5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2,
    });
  }, []);

  const openWhatsApp = () => {
    const phone = "918445150766";

    const message = encodeURIComponent(
      "Hello, I would like to discuss my legal matter and need a consultation.",
    );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <button
      ref={buttonRef}
      className="help-button"
      onClick={openWhatsApp}
      aria-label="Contact us on WhatsApp"
    >
      {/* Animated glow */}
      <span className="help-glow" />

      {/* Ripple */}
      <span className="help-ripple" />

      {/* Icon */}
      <span className="help-icon">
        <MessageCircle size={21} strokeWidth={1.8} />
      </span>

      {/* Text */}
      <span className="help-content">
        <small>Need Help?</small>
        <strong>Chat With Us</strong>
      </span>

      {/* Arrow */}
      <span className="help-arrow">
        <ArrowUpRight size={16} strokeWidth={1.8} />
      </span>
    </button>
  );
};

export default HelpButton;
