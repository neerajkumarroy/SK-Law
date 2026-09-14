import { useEffect, useRef } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiCheck,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutImage from "../../assets/images/about-lawyer.png";
import "./AboutDetails.css";

gsap.registerPlugin(ScrollTrigger);

const AboutDetails = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // HERO CONTENT
      // ==========================================

      gsap.from(".about-details-hero-content > *", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // ==========================================
      // HERO IMAGE
      // ==========================================

      gsap.from(".about-details-hero-visual", {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      });

      // ==========================================
      // SCROLL REVEAL
      // ==========================================

      gsap.utils.toArray(".about-detail-reveal").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 45,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ==========================================
      // VALUE CARDS
      // ==========================================

      gsap.utils.toArray(".about-detail-card").forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 35,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ==========================================
      // HERO IMAGE PARALLAX
      // ==========================================

      gsap.to(".about-details-photo", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-details-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="about-details-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-details-hero">
        <div className="about-details-hero-bg" />

        <div className="about-details-container about-details-hero-grid">
          {/* LEFT CONTENT */}

          <div className="about-details-hero-content">
            <Link to="/" className="about-back-link">
              <FiArrowLeft />
              <span>Back to Home</span>
            </Link>

            <div className="about-details-kicker">
              <span />
              <p>About Us</p>
            </div>

            <h1>
              Law with
              <em> purpose.</em>
              <br />
              Advocacy with
              <em> integrity.</em>
            </h1>

            <p className="about-details-intro">
              At Sarika Kushawaha Law, we believe that meaningful legal
              representation begins with understanding people, their concerns
              and the circumstances behind every matter.
            </p>

            <div className="about-details-hero-meta">
              <div>
                <strong>25+</strong>
                <span>Years of experience</span>
              </div>

              <div className="about-meta-line" />

              <div>
                <strong>01</strong>
                <span>Client-focused practice</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="about-details-hero-visual">
            <div className="about-details-hero-image">
              <img
                src={AboutImage}
                alt="Sarika - Legal Professional"
                className="about-details-photo"
              />

              <div className="about-details-image-shade" />

              <div className="about-details-image-label">
                <span>01</span>
                <p>Our Story</p>
              </div>

              <div className="about-details-image-frame" />
            </div>

            <div className="about-details-floating-card">
              <FiShield />

              <div>
                <strong>Trusted Counsel</strong>
                <span>Built around your interests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-details-introduction">
        <div className="about-details-container">
          <div className="about-details-section-heading about-detail-reveal">
            <div className="about-details-kicker">
              <span />
              <p>Who We Are</p>
            </div>

            <h2>
              A legal practice built around
              <em> people, not paperwork.</em>
            </h2>
          </div>

          <div className="about-details-intro-grid">
            <div className="about-details-big-number about-detail-reveal">
              01
            </div>

            <div className="about-details-rich-text about-detail-reveal">
              <p className="large">
                Legal problems can affect every part of a person's life. That is
                why our approach goes beyond simply understanding the law.
              </p>

              <p>
                We take time to understand the facts, listen carefully to our
                clients and identify the legal path that best serves their
                interests. Our focus is on clear advice, thoughtful strategy and
                representation that is both professional and personal.
              </p>

              <p>
                Every case is different. Every client brings a different story.
                Our role is to bring experience, preparation and perspective to
                that story while keeping the client's goals at the centre of the
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFILE
      ===================================================== */}

      <section className="about-details-profile">
        <div className="about-details-container about-details-profile-grid">
          <div className="about-details-profile-image about-detail-reveal">
            <img src={AboutImage} alt="Sarika" />

            <div className="profile-image-border" />

            <span className="profile-index">02</span>
          </div>

          <div className="about-details-profile-content about-detail-reveal">
            <div className="about-details-kicker">
              <span />
              <p>Our Professional</p>
            </div>

            <h2>
              Meet <em>Sarika Kushwaha.</em>
            </h2>

            <p className="profile-lead">
              A professional approach grounded in preparation, responsibility
              and a genuine commitment to helping clients navigate difficult
              legal situations.
            </p>

            <p>
              Sarika believes that good legal representation is not only about
              knowing the law. It is about listening carefully, communicating
              honestly and preparing every matter with discipline and attention
              to detail.
            </p>

            <p>
              His approach is centred on understanding the client's objectives,
              assessing the available legal options and developing a practical
              strategy that responds to the realities of each individual matter.
            </p>

            <div className="profile-signature">
              <span />

              <div>
                <strong>Sarika</strong>
                <small>Legal Professional</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-details-values">
        <div className="about-details-container">
          <div className="about-details-section-heading centered about-detail-reveal">
            <div className="about-details-kicker">
              <span />
              <p>Our Values</p>
            </div>

            <h2>
              Principles that guide
              <em> every matter.</em>
            </h2>

            <p>
              The way we work is shaped by a few principles that remain
              constant, regardless of the complexity of the matter.
            </p>
          </div>

          <div className="about-details-value-grid">
            <article className="about-detail-card">
              <div className="about-card-number">01</div>

              <div className="about-value-icon">
                <FiShield />
              </div>

              <h3>Integrity</h3>

              <p>
                Honest communication and professional responsibility form the
                foundation of every client relationship.
              </p>
            </article>

            <article className="about-detail-card">
              <div className="about-card-number">02</div>

              <div className="about-value-icon">
                <FiUsers />
              </div>

              <h3>Client First</h3>

              <p>
                We listen before we advise and keep the client's interests at
                the centre of every legal decision.
              </p>
            </article>

            <article className="about-detail-card">
              <div className="about-card-number">03</div>

              <div className="about-value-icon">
                <FiTarget />
              </div>

              <h3>Strategy</h3>

              <p>
                Every matter deserves careful preparation, clear objectives and
                a considered legal strategy.
              </p>
            </article>

            <article className="about-detail-card">
              <div className="about-card-number">04</div>

              <div className="about-value-icon">
                <FiAward />
              </div>

              <h3>Excellence</h3>

              <p>
                We continually pursue a high standard of preparation,
                representation and professional service.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="about-details-approach">
        <div className="about-details-container">
          <div className="about-details-approach-grid">
            <div className="about-details-approach-heading about-detail-reveal">
              <div className="about-details-kicker">
                <span />
                <p>Our Approach</p>
              </div>

              <h2>
                Clear thinking.
                <br />
                <em>Careful action.</em>
              </h2>
            </div>

            <div className="about-details-process about-detail-reveal">
              <div className="process-item">
                <span>01</span>

                <div>
                  <h3>Listen & Understand</h3>

                  <p>
                    We begin by understanding your circumstances, concerns and
                    objectives.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>02</span>

                <div>
                  <h3>Assess & Advise</h3>

                  <p>
                    We examine the relevant facts and explain your legal
                    position and available options clearly.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>03</span>

                <div>
                  <h3>Plan & Represent</h3>

                  <p>
                    We develop a focused strategy and work towards protecting
                    your interests throughout the matter.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>04</span>

                <div>
                  <h3>Communicate</h3>

                  <p>
                    You remain informed throughout the process, with clear and
                    timely communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="about-details-why">
        <div className="about-details-container">
          <div className="about-details-why-grid">
            <div className="about-detail-reveal">
              <div className="about-details-kicker">
                <span />
                <p>Why Choose Us</p>
              </div>

              <h2>
                Experience that
                <br />
                <em>makes a difference.</em>
              </h2>
            </div>

            <div className="about-details-check-list about-detail-reveal">
              <div>
                <FiCheck />
                <span>Personalised legal attention</span>
              </div>

              <div>
                <FiCheck />
                <span>Clear and practical communication</span>
              </div>

              <div>
                <FiCheck />
                <span>Careful preparation and strategy</span>
              </div>

              <div>
                <FiCheck />
                <span>Professional and ethical representation</span>
              </div>

              <div>
                <FiCheck />
                <span>Focused attention to every matter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-details-final">
        <div className="about-details-final-glow" />

        <div className="about-details-container">
          <div className="about-details-final-content about-detail-reveal">
            <div className="about-details-kicker">
              <span />
              <p>Let's Talk</p>
            </div>

            <h2>
              Your concerns deserve
              <br />
              <em>careful attention.</em>
            </h2>

            <p>
              If you are looking for thoughtful legal guidance and
              client-focused representation, we are here to understand your
              situation.
            </p>

            <div className="about-details-final-actions">
              <Link to="/#contact" className="about-details-primary-btn">
                <span>Contact Us</span>
                <FiArrowRight />
              </Link>

              <Link to="/" className="about-details-secondary-btn">
                <FiArrowLeft />
                <span>Back Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutDetails;
