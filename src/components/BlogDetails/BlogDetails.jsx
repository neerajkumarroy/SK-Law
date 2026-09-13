import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../Navbar/Navbar";
import BlogsData from "../../data/Blogs";

import "./BlogDetails.css";

gsap.registerPlugin(ScrollTrigger);

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const blog = BlogsData.find((item) => item.slug === slug);

  /* =========================================
     GO BACK TO BLOG SECTION
  ========================================= */

  const goToBlogSection = (e) => {
    e.preventDefault();

    navigate("/");

    setTimeout(() => {
      const blogSection = document.getElementById("blogs");

      if (blogSection) {
        window.scrollTo({
          top: blogSection.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }, 250);
  };

  /* =========================================
     GSAP
  ========================================= */

  useEffect(() => {
    if (!blog) return;

    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".blog-detail-image-wrap", {
        opacity: 0,
        y: 50,
        scale: 0.97,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".blog-detail-back",
          {
            opacity: 0,
            x: -25,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".blog-detail-category",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .from(
          ".blog-detail-title",
          {
            opacity: 0,
            y: 55,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .from(
          ".blog-detail-excerpt",
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".blog-detail-meta",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        );

      gsap.to(".blog-detail-image-wrap img", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".blog-detail-image-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray(".blog-content-block").forEach((block) => {
        gsap.from(block, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 82%",
          },
        });
      });

      gsap.from(".blog-bottom-navigation", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".blog-bottom-navigation",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, [blog]);

  /* =========================================
     404
  ========================================= */

  if (!blog) {
    return (
      <>
        <Navbar />

        <main className="blog-not-found">
          <span>404</span>

          <h1>Article Not Found</h1>

          <p>The article you are looking for may have been moved or removed.</p>

          <button
            type="button"
            onClick={goToBlogSection}
            className="not-found-link"
          >
            <ArrowLeft size={17} />
            Back to Articles
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main ref={pageRef} className="blog-details-page">
        {/* =========================================
            FEATURE IMAGE — FIRST
        ========================================= */}

        <section className="blog-detail-image-section">
          <div className="blog-detail-wide">
            <div className="blog-detail-image-wrap">
              <img src={blog.image} alt={blog.title} />

              <div className="blog-image-overlay" />

              <div className="blog-image-top-info">
                <span>SKL</span>
                <span>LEGAL INSIGHTS</span>
              </div>

              <div className="blog-image-number">
                {String(blog.id).padStart(2, "0")}
              </div>

              <div className="image-corner image-corner-tl" />
              <div className="image-corner image-corner-tr" />
              <div className="image-corner image-corner-bl" />
              <div className="image-corner image-corner-br" />
            </div>
          </div>
        </section>

        {/* =========================================
            ARTICLE INTRO
        ========================================= */}

        <section className="blog-detail-intro">
          <div className="blog-detail-container">
            {/* ONLY TOP BACK BUTTON */}

            <button
              type="button"
              onClick={goToBlogSection}
              className="blog-detail-back"
            >
              <ArrowLeft size={16} />
              <span>Back to Articles</span>
            </button>

            <div className="blog-detail-category">
              <span className="category-line" />

              <span>{blog.category}</span>

              <span className="category-line" />
            </div>

            <h1 className="blog-detail-title">{blog.title}</h1>

            <p className="blog-detail-excerpt">{blog.excerpt}</p>

            <div className="blog-detail-meta">
              <div>
                <CalendarDays size={15} />
                <span>{blog.date}</span>
              </div>

              <span className="meta-divider" />

              <div>
                <Clock3 size={15} />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CONTENT
        ========================================= */}

        <section className="blog-content-section">
          <div className="blog-content-layout">
            {/* SIDEBAR */}

            <aside className="blog-detail-sidebar">
              <div className="sidebar-sticky">
                <span className="sidebar-label">ARTICLE</span>

                <div className="sidebar-number">
                  {String(blog.id).padStart(2, "0")}
                </div>

                <div className="sidebar-line" />

                <span className="sidebar-reading">5 MIN READ</span>
              </div>
            </aside>

            {/* ARTICLE */}

            <article className="blog-content">
              {blog.content.map((section, index) => (
                <div className="blog-content-block" key={index}>
                  <div className="content-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="content-text">
                    <h2>{section.heading}</h2>

                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* =====================================
                  BOTTOM MESSAGE
              ===================================== */}

              <div className="blog-detail-share">
                <div>
                  <span>LEGAL INSIGHT</span>

                  <strong>Knowledge creates confidence.</strong>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <section className="blog-detail-cta">
          <div className="blog-detail-cta-inner">
            <div className="cta-content">
              <span className="cta-small">CONTINUE READING</span>

              <h2>
                Explore More
                <br />
                <span>Legal Insights.</span>
              </h2>
            </div>

            {/* ONLY BOTTOM BUTTON */}

            <button
              type="button"
              onClick={goToBlogSection}
              className="cta-button"
            >
              <span>Back to Articles</span>
              <ArrowUpRight size={19} />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetails;
