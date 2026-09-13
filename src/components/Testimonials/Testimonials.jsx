import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import testimonials from "../../data/Testimonials";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1);

  const currentTestimonial = testimonials[currentIndex];

  /* =========================================================
     SECTION ENTRANCE ANIMATION
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.from(".testimonials-eyebrow", {
        opacity: 0,
        x: -25,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".testimonials-heading",
          {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".testimonials-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".testimonial-feature-card",
          {
            opacity: 0,
            y: 45,
            scale: 0.97,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".testimonial-side-arrow",
          {
            opacity: 0,
            scale: 0.7,
            duration: 0.5,
            stagger: 0.12,
            ease: "back.out(1.7)",
          },
          "-=0.45",
        )
        .from(
          ".testimonial-dots",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.25",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     SLIDE ANIMATION
  ========================================================= */

  const changeTestimonial = (newIndex, newDirection) => {
    if (isAnimating || testimonials.length <= 1) return;

    setIsAnimating(true);
    setDirection(newDirection);

    const card = cardRef.current;

    if (!card) return;

    const exitX = newDirection > 0 ? -70 : 70;

    gsap.to(card, {
      opacity: 0,
      x: exitX,
      scale: 0.97,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(newIndex);

        requestAnimationFrame(() => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: newDirection > 0 ? 70 : -70,
              scale: 0.97,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.65,
              ease: "power3.out",
              onComplete: () => {
                setIsAnimating(false);
              },
            },
          );
        });
      },
    });
  };

  /* =========================================================
     NEXT
  ========================================================= */

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;

    changeTestimonial(nextIndex, 1);
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const previousTestimonial = () => {
    const previousIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;

    changeTestimonial(previousIndex, -1);
  };

  /* =========================================================
     CARD HOVER
  ========================================================= */

  const handleCardEnter = () => {
    if (!cardRef.current) return;

    const image = cardRef.current.querySelector(
      ".testimonial-client-image img",
    );

    const quote = cardRef.current.querySelector(".testimonial-card-quote");

    const goldLine = cardRef.current.querySelector(
      ".testimonial-feature-gold-line",
    );

    gsap.to(cardRef.current, {
      y: -5,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(image, {
      scale: 1.05,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(quote, {
      rotate: 7,
      scale: 1.05,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(goldLine, {
      scaleX: 1,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleCardLeave = () => {
    if (!cardRef.current) return;

    const image = cardRef.current.querySelector(
      ".testimonial-client-image img",
    );

    const quote = cardRef.current.querySelector(".testimonial-card-quote");

    const goldLine = cardRef.current.querySelector(
      ".testimonial-feature-gold-line",
    );

    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(image, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(quote, {
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(goldLine, {
      scaleX: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="testimonials-section"
      id="testimonials"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="testimonials-bg-image" />

      <div className="testimonials-bg-light testimonials-bg-light-one" />
      <div className="testimonials-bg-light testimonials-bg-light-two" />
      <div className="testimonials-bg-circle" />

      <div className="testimonials-container">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="testimonials-header">
          <div className="testimonials-heading-area">
            <div className="testimonials-eyebrow">
              <span className="testimonials-eyebrow-line" />
              <span>Client Testimonials</span>
            </div>

            <h2 className="testimonials-heading">
              Words That
              <br />
              <span>Build Trust.</span>
            </h2>
          </div>

          <div className="testimonials-description">
            <p>
              Real experiences from clients who trusted our legal team with
              important decisions, difficult situations and matters that
              demanded complete attention.
            </p>

            <div className="testimonial-trust">
              <strong>5.0</strong>

              <div className="trust-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={13}
                    fill="currentColor"
                    strokeWidth={1.3}
                  />
                ))}
              </div>

              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            FEATURE TESTIMONIAL
        ===================================================== */}

        <div className="testimonial-feature-wrapper">
          {/* LEFT ARROW */}

          <button
            type="button"
            className="testimonial-side-arrow testimonial-side-arrow-left"
            onClick={previousTestimonial}
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={19} strokeWidth={1.5} />
          </button>

          {/* CARD */}

          <article
            ref={cardRef}
            className="testimonial-feature-card"
            onMouseEnter={handleCardEnter}
            onMouseLeave={handleCardLeave}
          >
            <div className="testimonial-feature-glow" />

            <div className="testimonial-feature-gold-line" />

            {/* =================================================
                IMAGE SIDE
            ================================================= */}

            <div className="testimonial-client-panel">
              <div className="testimonial-client-number">
                {String(currentIndex + 1).padStart(2, "0")}
              </div>

              <div className="testimonial-client-image">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                />
              </div>

              <div className="testimonial-client-panel-bottom">
                <div>
                  <h3>{currentTestimonial.name}</h3>

                  <p>
                    {currentTestimonial.role}

                    {currentTestimonial.location && (
                      <>
                        <span> · </span>
                        {currentTestimonial.location}
                      </>
                    )}
                  </p>
                </div>

                <div className="testimonial-client-badge">
                  <span />
                  Verified Client
                </div>
              </div>
            </div>

            {/* =================================================
                REVIEW SIDE
            ================================================= */}

            <div className="testimonial-review-panel">
              <div className="testimonial-review-top">
                <div className="testimonial-rating">
                  {Array.from({
                    length: currentTestimonial.rating || 5,
                  }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={14}
                      fill="currentColor"
                      strokeWidth={1.2}
                    />
                  ))}
                </div>

                <div className="testimonial-card-quote">
                  <Quote size={20} strokeWidth={1.4} />
                </div>
              </div>

              <div className="testimonial-review-content">
                <span className="testimonial-quote-mark">“</span>

                <p>{currentTestimonial.review}</p>
              </div>

              <div className="testimonial-review-footer">
                <div className="testimonial-footer-client">
                  <div className="testimonial-footer-icon">
                    <ArrowUpRight size={15} strokeWidth={1.5} />
                  </div>

                  <div>
                    <strong>{currentTestimonial.name}</strong>

                    <span>
                      {currentTestimonial.role}
                      {currentTestimonial.location &&
                        ` · ${currentTestimonial.location}`}
                    </span>
                  </div>
                </div>

                <span className="testimonial-review-count">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </article>

          {/* RIGHT ARROW */}

          <button
            type="button"
            className="testimonial-side-arrow testimonial-side-arrow-right"
            onClick={nextTestimonial}
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <ArrowRight size={19} strokeWidth={1.5} />
          </button>
        </div>

        {/* =====================================================
            DOTS ONLY
        ===================================================== */}

        <div className="testimonial-dots">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id || index}
              type="button"
              className={index === currentIndex ? "active" : ""}
              onClick={() => {
                if (index === currentIndex) return;

                changeTestimonial(index, index > currentIndex ? 1 : -1);
              }}
              disabled={isAnimating}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <div className="testimonials-bottom-note">
          <span />

          <p>
            Trust is earned through every conversation, every decision and every
            result.
          </p>

          <span />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
