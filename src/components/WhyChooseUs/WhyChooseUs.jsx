import { useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyhoseImage from "../../assets/images/why-choose-us.jpg";

import "./WhyChooseUs.css";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-image-wrap", {
        opacity: 0,
        x: -70,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 78%",
        },
      });

      gsap.from(".why-content", {
        opacity: 0,
        x: 70,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 78%",
        },
      });

      gsap.from(".why-point", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-points",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-section" id="why-choose-us">
      <div className="why-container">
        {/* =========================================
            IMAGE
        ========================================= */}

        <div className="why-image-wrap">
          <div className="why-image-frame">
            <img
              src={WhyhoseImage}
              alt="Legal courthouse"
              className="why-image"
            />

            <div className="why-image-overlay" />

            <div className="why-image-number">
              <span>25+</span>
              <small>
                Years of
                <br />
                Experience
              </small>
            </div>
          </div>
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="why-content">
          <div className="why-eyebrow">
            <span className="why-eyebrow-line" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="why-heading">
            Why Clients Trust Our
            <br />
            <span>Legal Expertise.</span>
          </h2>

          <p className="why-description">
            With decades of experience, we deliver trusted legal guidance
            focused solely on achieving the best outcomes for our clients.
          </p>

          {/* =========================================
              POINTS
          ========================================= */}

          <div className="why-points">
            <div className="why-point">
              <div className="why-check">
                <Check size={15} strokeWidth={2} />
              </div>

              <div>
                <h3>Decades of Experience</h3>

                <p>
                  Proven legal knowledge backed by years of courtroom and
                  advisory experience.
                </p>
              </div>
            </div>

            <div className="why-point">
              <div className="why-check">
                <Check size={15} strokeWidth={2} />
              </div>

              <div>
                <h3>Client-Focused Approach</h3>

                <p>
                  Personalized strategies designed around your goals,
                  circumstances, and interests.
                </p>
              </div>
            </div>

            <div className="why-point">
              <div className="why-check">
                <Check size={15} strokeWidth={2} />
              </div>

              <div>
                <h3>Award-Winning Legal Team</h3>

                <p>
                  Dedicated professionals committed to delivering exceptional
                  legal representation.
                </p>
              </div>
            </div>

            <div className="why-point">
              <div className="why-check">
                <Check size={15} strokeWidth={2} />
              </div>

              <div>
                <h3>Transparent Communication</h3>

                <p>
                  Clear advice, honest communication, and practical guidance at
                  every stage.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              BUTTON
          ========================================= */}

          <a href="#contact" className="why-button">
            <span>Contact Us Today</span>

            <span className="why-button-icon">
              <ArrowRight size={17} strokeWidth={1.8} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
