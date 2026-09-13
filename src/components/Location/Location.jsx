import { useEffect, useRef } from "react";
import { ArrowUpRight, MapPin, Phone, Navigation, Clock3 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Location.css";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".location-kicker", {
        opacity: 0,
        x: -25,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".location-title",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".location-info-item",
          {
            opacity: 0,
            y: 18,
            duration: 0.55,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".location-map-wrap",
          {
            opacity: 0,
            x: 45,
            scale: 0.97,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .from(
          ".location-pin-badge",
          {
            opacity: 0,
            scale: 0.7,
            duration: 0.55,
            ease: "back.out(1.7)",
          },
          "-=0.35",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=District+Court+Dehradun+248001",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section ref={sectionRef} className="location-section" id="location">
      <div className="location-container">
        {/* LEFT */}
        <div className="location-content">
          <div className="location-kicker">
            <span className="location-kicker-line" />
            <span>Visit Our Office</span>
          </div>

          <h2 className="location-title">
            Find us
            <br />
            <span>in Dehradun.</span>
          </h2>

          <p className="location-description">
            Visit our office for a confidential consultation and discuss your
            legal matter with clarity and confidence.
          </p>

          <div className="location-info">
            {/* NAME */}
            <div className="location-info-item">
              <div className="location-icon">
                <MapPin size={17} strokeWidth={1.6} />
              </div>

              <div>
                <span className="location-label">Office</span>
                <strong>Neeraj Kumar</strong>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="location-info-item">
              <div className="location-icon">
                <Navigation size={17} strokeWidth={1.6} />
              </div>

              <div>
                <span className="location-label">Address</span>
                <strong>
                  District Judge,
                  <br />
                  Web Information Manager /
                  <br />
                  District Court Dehradun — 248001
                </strong>
              </div>
            </div>

            {/* PHONE */}
            <div className="location-info-item">
              <div className="location-icon">
                <Phone size={17} strokeWidth={1.6} />
              </div>

              <div>
                <span className="location-label">Contact</span>
                <a href="tel:8445152222">8445152222</a>
              </div>
            </div>
          </div>

          <div className="location-footer">
            <div className="location-availability">
              <Clock3 size={14} strokeWidth={1.6} />
              <span>Available for consultation</span>
            </div>

            <button
              type="button"
              className="location-direction-btn"
              onClick={openMap}
            >
              <span>Get Directions</span>
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="location-map-area">
          <div className="location-map-wrap">
            <iframe
              title="District Court Dehradun Location"
              src="https://www.google.com/maps?q=District%20Court%20Dehradun%20248001&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="location-map-overlay" />

            <button
              type="button"
              className="location-pin-badge"
              onClick={openMap}
              aria-label="Open location in Google Maps"
            >
              <span className="location-pin-icon">
                <MapPin size={18} strokeWidth={1.8} />
              </span>

              <span className="location-pin-text">
                <strong>District Court</strong>
                <small>Dehradun · 248001</small>
              </span>

              <ArrowUpRight
                className="location-pin-arrow"
                size={17}
                strokeWidth={1.7}
              />
            </button>

            <div className="location-map-label">
              <span>30.3165° N</span>
              <i />
              <span>78.0322° E</span>
            </div>
          </div>

          <div className="location-map-corner location-map-corner-tl" />
          <div className="location-map-corner location-map-corner-br" />
        </div>
      </div>
    </section>
  );
};

export default Location;
