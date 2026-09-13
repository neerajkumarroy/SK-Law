import { useEffect, useRef } from "react";
import {
  MessageCircle,
  ClipboardList,
  Scale,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HowItWorks.css";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Initial Consultation",
    description:
      "We listen carefully, understand your situation, and identify the legal issues that matter most.",
    tag: "UNDERSTAND",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Strategic Planning",
    description:
      "We build a clear legal strategy designed around your goals, circumstances, and best interests.",
    tag: "STRATEGIZE",
  },
  {
    number: "03",
    icon: Scale,
    title: "Case Resolution",
    description:
      "We stand by your side throughout the process and work toward a strong and meaningful resolution.",
    tag: "RESOLVE",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* -----------------------------------------
         HEADER ANIMATION
      ----------------------------------------- */

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".how-section",
            start: "top 72%",
            once: true,
          },
        })
        .from(".how-eyebrow", {
          opacity: 0,
          x: -25,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".how-heading",
          {
            opacity: 0,
            y: 35,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .from(
          ".how-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        );

      /* -----------------------------------------
         GHOST NUMERALS + STEP CONTENT REVEAL
      ----------------------------------------- */

      gsap.from(".how-step-ghost", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-process",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(
        ".how-step-meta, .how-icon, .how-step-content, .how-step-arrow",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".how-process",
            start: "top 78%",
            once: true,
          },
        },
      );

      /* -----------------------------------------
         MARKERS POP IN
      ----------------------------------------- */

      gsap.from(".how-marker", {
        opacity: 0,
        scale: 0.4,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".how-process",
          start: "top 78%",
          once: true,
        },
      });

      /* -----------------------------------------
         THE JOURNEY LINE — a single scroll-linked
         moment: the gold thread draws itself across
         the three stages as you scroll past them,
         lighting each marker as it arrives.
      ----------------------------------------- */

      const markers = gsap.utils.toArray(".how-marker");

      gsap.to(".how-progress-fill", {
        scaleX: 1,
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".how-process",
          start: "top 65%",
          end: "bottom 60%",
          scrub: 0.6,
          onUpdate: (self) => {
            markers.forEach((marker, i) => {
              const threshold = (i + 0.5) / markers.length;
              marker.classList.toggle("is-reached", self.progress >= threshold);
            });
          },
        },
      });

      /* -----------------------------------------
         BOTTOM CTA
      ----------------------------------------- */

      gsap.from(".how-bottom", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-bottom",
          start: "top 88%",
          once: true,
        },
      });

      /* -----------------------------------------
         PARALLAX BACKGROUND
      ----------------------------------------- */

      gsap.to(".how-bg-image", {
        yPercent: 6,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".how-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* -----------------------------------------
         AMBIENT LIGHT
      ----------------------------------------- */

      gsap.to(".how-light-one", {
        x: 30,
        y: 20,
        scale: 1.08,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".how-light-two", {
        x: -25,
        y: -20,
        scale: 1.1,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* -----------------------------------------
         STEP HOVER
      ----------------------------------------- */

      const steps = gsap.utils.toArray(".how-step");

      steps.forEach((step) => {
        const marker = step.querySelector(".how-marker");
        const icon = step.querySelector(".how-icon");
        const arrow = step.querySelector(".how-step-arrow");
        const ghost = step.querySelector(".how-step-ghost");

        const enter = () => {
          gsap.to(marker, {
            scale: 1.16,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(icon, {
            y: -5,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(ghost, {
            y: -6,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 5,
            y: -5,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(marker, {
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(icon, {
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(ghost, {
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        step.addEventListener("mouseenter", enter);
        step.addEventListener("mouseleave", leave);

        step._enter = enter;
        step._leave = leave;
      });

      return () => {
        steps.forEach((step) => {
          if (step._enter) {
            step.removeEventListener("mouseenter", step._enter);
          }

          if (step._leave) {
            step.removeEventListener("mouseleave", step._leave);
          }
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="how-section" id="how-it-works">
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="how-background" aria-hidden="true">
        <img className="how-bg-image" src="/images/legal-bg.jpg" alt="" />

        <div className="how-bg-overlay" />

        <div className="how-light how-light-one" />
        <div className="how-light how-light-two" />

        <div className="how-grid" />
        <div className="how-noise" />

        <div className="how-corner how-corner-top" />
        <div className="how-corner how-corner-bottom" />
      </div>

      <div className="how-container">
        {/* =========================================
            HEADER
        ========================================== */}

        <header className="how-header">
          <div className="how-eyebrow">
            <span className="how-eyebrow-line" />
            <span>How It Works</span>
          </div>

          <div className="how-heading-row">
            <h2 className="how-heading">
              A Clear Path From
              <em>Concern to Resolution.</em>
            </h2>

            <div className="how-description-wrap">
              <span className="how-description-index">03</span>

              <p className="how-description">
                Legal matters can feel complicated. Our process keeps everything
                clear, structured, and focused on achieving the best possible
                outcome for you.
              </p>
            </div>
          </div>
        </header>

        {/* =========================================
            PREMIUM PROCESS
        ========================================== */}

        <div className="how-process">
          {/* horizontal / vertical journey line */}
          <div className="how-progress" aria-hidden="true">
            <span className="how-progress-base" />
            <span className="how-progress-fill" />
          </div>

          <div className="how-steps">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="how-step" key={step.number}>
                  {/* GHOST NUMERAL — the numbering itself is the
                      typographic moment for this section */}
                  <span className="how-step-ghost" aria-hidden="true">
                    {step.number}
                  </span>

                  {/* META */}

                  <div className="how-step-meta">
                    <span className="how-step-tag">{step.tag}</span>
                  </div>

                  {/* MARKER */}

                  <div className="how-marker">
                    <div className="how-marker-inner">
                      <span />
                    </div>
                  </div>

                  {/* ICON */}

                  <div className="how-icon">
                    <Icon size={24} strokeWidth={1.35} />
                  </div>

                  {/* CONTENT */}

                  <div className="how-step-content">
                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                  {/* ARROW */}

                  <div className="how-step-arrow">
                    <ArrowDownRight size={18} strokeWidth={1.4} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div className="how-bottom">
          <div className="how-bottom-left">
            <span className="how-bottom-number">04</span>

            <div className="how-bottom-copy">
              <span>YOUR NEXT STEP</span>

              <strong>Start with a conversation.</strong>
            </div>
          </div>

          <a href="#contact" className="how-button">
            <span>Book a Consultation</span>

            <span className="how-button-icon">
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
