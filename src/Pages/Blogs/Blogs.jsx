import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaLongArrowAltRight,
} from "react-icons/fa";

import blogs from "../../data/Blogs";
import blogHero from "../../assets/images/blog-hero.png";

import "./Blogs.css";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const navbar =
        document.querySelector(".navbar") ||
        document.querySelector("header") ||
        document.querySelector("nav");

      const updateOffset = () => {
        if (!navbar) return;

        const styles = window.getComputedStyle(navbar);

        if (styles.position === "fixed" || styles.position === "absolute") {
          document.documentElement.style.setProperty(
            "--blogs-navbar-offset",
            `${navbar.getBoundingClientRect().height}px`,
          );
        } else {
          document.documentElement.style.setProperty(
            "--blogs-navbar-offset",
            "0px",
          );
        }
      };

      updateOffset();

      window.addEventListener("resize", updateOffset);

      let resizeObserver;

      if (navbar && "ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(updateOffset);
        resizeObserver.observe(navbar);
      }

      /* =========================
         HERO
      ========================= */

      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      hero
        .from(".blog-page-kicker", {
          y: 25,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".blog-page-title",
          {
            y: 55,
            opacity: 0,
            duration: 1,
          },
          "-=0.4",
        )
        .from(
          ".blog-page-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".blog-page-stats",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".blog-page-visual",
          {
            x: 70,
            opacity: 0,
            scale: 0.94,
            duration: 1,
          },
          "-=0.8",
        );

      /* =========================
         SECTION REVEALS
      ========================= */

      gsap.utils.toArray(".blog-reveal").forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      /* =========================
         BLOG CARDS
      ========================= */

      gsap.from(".article-card", {
        y: 55,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".articles-grid",
          start: "top 82%",
          once: true,
        },
      });

      /* =========================
         IMAGE HOVER
      ========================= */

      const cards = document.querySelectorAll(".article-card");

      cards.forEach((card) => {
        const image = card.querySelector(".article-image img");
        const arrow = card.querySelector(".article-read-arrow");

        const enter = () => {
          if (image) {
            gsap.to(image, {
              scale: 1.06,
              duration: 0.6,
              ease: "power2.out",
            });
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 5,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        const leave = () => {
          if (image) {
            gsap.to(image, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._blogEnter = enter;
        card._blogLeave = leave;
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        window.removeEventListener("resize", updateOffset);

        if (resizeObserver) {
          resizeObserver.disconnect();
        }

        cards.forEach((card) => {
          card.removeEventListener("mouseenter", card._blogEnter);
          card.removeEventListener("mouseleave", card._blogLeave);
        });
      };
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <main ref={pageRef} className="law-blogs-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="blog-page-hero">
        <div className="blog-page-hero-inner">
          <div className="blog-page-content">
            <div className="blog-page-kicker">
              <span></span>
              <strong>LEGAL JOURNAL</strong>
            </div>

            <h1 className="blog-page-title">
              Insights that help
              <em> you move forward.</em>
            </h1>

            <p className="blog-page-description">
              Practical legal insights, thoughtful perspectives and clear
              guidance to help you understand the law and make informed
              decisions.
            </p>

            <div className="blog-page-stats">
              <div className="blog-stat">
                <strong>{blogs.length}</strong>
                <span>Articles</span>
              </div>

              <div className="blog-stat-line"></div>

              <div className="blog-stat">
                <strong>Practical</strong>
                <span>Legal Guidance</span>
              </div>

              <div className="blog-stat-line"></div>

              <div className="blog-stat">
                <strong>Law</strong>
                <span>Explained Clearly</span>
              </div>
            </div>
          </div>

          <div className="blog-page-visual">
            <div className="blog-visual-frame">
              <span className="visual-line visual-line-one"></span>
              <span className="visual-line visual-line-two"></span>

              <div className="blog-visual-circle"></div>

              <img
                src={blogHero}
                alt="Legal Journal"
                className="blog-page-image"
              />

              <div className="blog-visual-badge">
                <FaBookOpen />

                <div>
                  <strong>Our Journal</strong>
                  <span>Knowledge • Clarity • Law</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="journal-intro blog-reveal">
        <div className="journal-intro-top">
          <div className="journal-label">
            <span></span>
            FROM OUR JOURNAL
          </div>

          <div className="journal-index">01</div>
        </div>

        <div className="journal-intro-grid">
          <h2>
            Legal knowledge,
            <em> made easier to understand.</em>
          </h2>

          <div className="journal-intro-copy">
            <p>
              The law affects everyday decisions — from property and family
              matters to business, contracts and disputes. Our journal brings
              important legal topics into clear, practical language.
            </p>

            <p>
              Whether you are looking for general information or trying to
              understand your legal options, explore our latest articles below.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      {featuredBlog && (
        <section className="featured-section">
          <div className="section-heading blog-reveal">
            <div>
              <span className="section-eyebrow">
                <span></span>
                FEATURED ARTICLE
              </span>

              <h2>Worth reading</h2>
            </div>

            <p>
              Start with one of our latest legal perspectives and explore the
              topic in detail.
            </p>
          </div>

          <Link
            to={`/blog/${featuredBlog.slug}`}
            className="featured-article blog-reveal"
          >
            <div className="featured-image">
              <img src={featuredBlog.image} alt={featuredBlog.title} />

              <span className="featured-category">{featuredBlog.category}</span>
            </div>

            <div className="featured-content">
              <div className="featured-meta">
                <span>
                  <FaCalendarAlt />
                  {featuredBlog.date}
                </span>

                <span>
                  <FaClock />
                  {featuredBlog.readTime || featuredBlog.read}
                </span>
              </div>

              <h3>{featuredBlog.title}</h3>

              <p>{featuredBlog.excerpt}</p>

              <div className="featured-bottom">
                <span className="featured-author">
                  By {featuredBlog.author || "Sarika Kushawaha Law"}
                </span>

                <span className="featured-read">
                  Read full article
                  <FaLongArrowAltRight />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* =====================================================
          ALL ARTICLES
      ===================================================== */}

      <section className="articles-section">
        <div className="articles-heading blog-reveal">
          <div>
            <span className="section-eyebrow">
              <span></span>
              LATEST ARTICLES
            </span>

            <h2>Explore the journal</h2>
          </div>

          <p>
            Browse practical articles covering different areas of law and
            everyday legal concerns.
          </p>
        </div>

        <div className="articles-grid">
          {remainingBlogs.map((blog) => (
            <article className="article-card" key={blog.id}>
              <Link
                to={`/blog/${blog.slug}`}
                className="article-image"
                aria-label={`Read ${blog.title}`}
              >
                <img src={blog.image} alt={blog.title} loading="lazy" />

                <span className="article-category">{blog.category}</span>
              </Link>

              <div className="article-body">
                <div className="article-meta">
                  <span>
                    <FaCalendarAlt />
                    {blog.date}
                  </span>

                  <span>
                    <FaClock />
                    {blog.readTime || blog.read}
                  </span>
                </div>

                <h3>
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                <p>{blog.excerpt}</p>

                <Link to={`/blog/${blog.slug}`} className="article-read">
                  <span>Read article</span>

                  <span className="article-read-arrow">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          CONSULTATION CTA
      ===================================================== */}

      <section className="journal-cta">
        <div className="journal-cta-decoration"></div>

        <div className="journal-cta-inner blog-reveal">
          <div className="journal-cta-number">09</div>

          <div className="journal-cta-content">
            <span className="section-eyebrow light">
              <span></span>
              NEED LEGAL GUIDANCE?
            </span>

            <h2>
              Have a legal question?
              <em> Let's discuss it.</em>
            </h2>

            <p>
              Every legal matter is different. Speak with our team to understand
              your situation and explore the appropriate next steps.
            </p>

            <Link to="/contact-us" className="journal-cta-button">
              <span>Book a Consultation</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
