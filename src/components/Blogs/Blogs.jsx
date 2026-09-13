import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, MoveUpRight, ArrowLeft } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BlogsData from "../../data/Blogs";
import "./Blogs.css";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  // Check whether this is the complete blogs page
  const isBlogsPage = location.pathname === "/blogs";

  // Home = only 3 blogs
  // Blogs page = all blogs
  const visibleBlogs = isBlogsPage ? BlogsData : BlogsData.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".blog-card");

      if (!cards.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".blogs-section",
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".blogs-eyebrow", {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".blogs-title",
          {
            opacity: 0,
            y: 55,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.45",
        )
        .from(
          ".blogs-intro",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".blogs-action",
          {
            opacity: 0,
            x: 30,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          cards,
          {
            opacity: 0,
            y: 80,
            scale: 0.96,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.35",
        );

      // =========================
      // CARD HOVER
      // =========================

      cards.forEach((card) => {
        const image = card.querySelector(".blog-image");
        const imageWrap = card.querySelector(".blog-image-wrapper");
        const arrow = card.querySelector(".blog-card-arrow");
        const line = card.querySelector(".blog-card-gold-line");

        if (!image || !imageWrap || !arrow || !line) return;

        const enter = () => {
          gsap.to(image, {
            scale: 1.08,
            duration: 0.9,
            ease: "power3.out",
          });

          gsap.to(imageWrap, {
            y: -6,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
          });

          gsap.to(line, {
            scaleX: 1,
            duration: 0.55,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          });

          gsap.to(imageWrap, {
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            opacity: 0,
            scale: 0.75,
            rotation: -12,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(line, {
            scaleX: 0,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._enter = enter;
        card._leave = leave;
      });
    }, sectionRef);

    return () => {
      gsap.utils.toArray(".blog-card").forEach((card) => {
        if (card._enter) {
          card.removeEventListener("mouseenter", card._enter);
        }

        if (card._leave) {
          card.removeEventListener("mouseleave", card._leave);
        }
      });

      ctx.revert();
    };
  }, [isBlogsPage]);

  return (
    <section
      ref={sectionRef}
      className={`blogs-section ${isBlogsPage ? "blogs-full-page" : ""}`}
      id="blogs"
    >
      <div className="blogs-container">
        {/* =========================
            HEADER
        ========================= */}

        <div className="blogs-header">
          <div className="blogs-heading-block">
            <div className="blogs-eyebrow">
              <span className="blogs-eyebrow-line" />

              <span>{isBlogsPage ? "Legal Journal" : "Legal Journal"}</span>

              <span className="blogs-eyebrow-dot" />
            </div>

            <h1 className="blogs-title">
              Knowledge That
              <br />
              <span>Protects Your Future.</span>
            </h1>
          </div>

          <div className="blogs-header-right">
            <p className="blogs-intro">
              Explore thoughtful perspectives, practical legal guidance and
              important updates designed to help you make informed decisions
              with greater confidence.
            </p>

            {!isBlogsPage && (
              <Link to="/blogs" className="blogs-action">
                <span>Explore All Articles</span>

                <span className="blogs-action-icon">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            )}
          </div>
        </div>

        {/* =========================
            PAGE META
        ========================= */}

        <div className="blogs-meta">
          <span>INSIGHTS / 2026</span>

          <span className="blogs-meta-center">
            <i />
            Carefully Considered.
            <i />
          </span>

          <span>
            {isBlogsPage ? `${BlogsData.length} ARTICLES` : "SCROLL TO EXPLORE"}
          </span>
        </div>

        {/* =========================
            BLOG GRID
        ========================= */}

        <div className="blogs-grid">
          {visibleBlogs.map((blog, index) => (
            <Link to={`/blog/${blog.slug}`} className="blog-card" key={blog.id}>
              {/* IMAGE */}

              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />

                <div className="blog-image-overlay" />

                <div className="blog-card-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="blog-category">{blog.category}</div>

                <div className="blog-card-arrow">
                  <MoveUpRight size={20} />
                </div>
              </div>

              {/* CONTENT */}

              <div className="blog-card-content">
                <div className="blog-card-top">
                  <span className="blog-date">{blog.date}</span>

                  <span className="blog-read">Read Article</span>
                </div>

                <h3>{blog.title}</h3>

                <p>{blog.excerpt}</p>

                <div className="blog-card-footer">
                  <span className="blog-card-gold-line" />

                  <span className="blog-card-link">
                    Discover Insight
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =========================
            HOME FOOTER
        ========================= */}

        {!isBlogsPage && (
          <div className="blogs-footer">
            <div className="blogs-footer-line" />

            <p>Clear thinking. Stronger decisions. Better legal outcomes.</p>

            <div className="blogs-footer-line" />
          </div>
        )}

        {/* =========================
            FULL BLOG PAGE FOOTER
        ========================= */}

        {isBlogsPage && (
          <div className="blogs-page-bottom">
            <div className="blogs-page-bottom-line" />

            <div className="blogs-page-header">
              <span>SKL / LEGAL JOURNAL</span>

              <p>Clear thinking. Stronger decisions. Better legal outcomes.</p>

              <Link to="/">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </div>

            <div className="blogs-page-bottom-line" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
