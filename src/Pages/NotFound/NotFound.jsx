import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";

import "./NotFound.css";

const NotFound = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".not-found-number", {
        y: 80,
        opacity: 0,
        duration: 0.9,
      })
        .from(
          ".not-found-content",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45",
        )
        .from(
          ".not-found-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
          },
          "-=0.35",
        )
        .from(
          ".not-found-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.25",
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="not-found-page">
      <div className="not-found-bg-shape not-found-bg-shape-one" />
      <div className="not-found-bg-shape not-found-bg-shape-two" />

      <div className="not-found-inner">
        {/* LEFT NUMBER */}
        <div className="not-found-number-wrap">
          <span className="not-found-number">404</span>

          <div className="not-found-small-label">
            <span />
            Page Not Found
          </div>
        </div>

        {/* CONTENT */}
        <div className="not-found-content">
          <p className="not-found-eyebrow">Sarika Kushawaha Law</p>

          <h1>
            This page is
            <br />
            <span>not available.</span>
          </h1>

          <div className="not-found-line" />

          <p className="not-found-description">
            The page you are looking for may have been moved, removed, or is
            currently under development. Please return to our homepage and
            continue exploring.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="not-found-home-btn">
              <span>Back to Home</span>
              <FiArrowUpRight />
            </Link>

            <button
              type="button"
              className="not-found-back-btn"
              onClick={() => window.history.back()}
            >
              <FiArrowLeft />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="not-found-footer-text">
        <span>SK</span>
        <p>Trusted counsel. Strategic advocacy. Client-first representation.</p>
      </div>
    </main>
  );
};

export default NotFound;
