import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";

import blogs from "../../data/Blogs";

import "./Blogs.css";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HEADER
      ========================================= */

      gsap.from(".home-blog-header", {
        opacity: 0,
        y: 55,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home-blogs-section",
          start: "top 78%",
          once: true,
        },
      });

      /* =========================================
         BLOG CARDS
      ========================================= */

      gsap.from(".home-blog-card", {
        opacity: 0,
        y: 55,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home-blog-grid",
          start: "top 82%",
          once: true,
        },
      });

      /* =========================================
         BOTTOM CTA
      ========================================= */

      gsap.from(".home-blog-bottom", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".home-blog-bottom",
          start: "top 90%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
    Only first 3 blogs will be displayed
    on the Home Page.
  */
  const homeBlogs = blogs.slice(0, 3);

  return (
    <section ref={sectionRef} className="home-blogs-section" id="blogs">
      <div className="home-blogs-container">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="home-blog-header">
          <div className="home-blog-eyebrow">
            <span className="home-blog-eyebrow-line"></span>

            <span>Legal Insights</span>
          </div>

          <h2 className="home-blog-title">
            Knowledge that helps <span>you move forward.</span>
          </h2>

          <p className="home-blog-intro">
            Explore practical legal insights, guidance and perspectives designed
            to help you better understand your rights and make informed
            decisions.
          </p>
        </div>

        {/* =========================================
            BLOG GRID
        ========================================= */}

        <div className="home-blog-grid">
          {homeBlogs.map((blog) => (
            <article className="home-blog-card" key={blog.id}>
              {/* IMAGE */}

              <Link to={`/blog/${blog.slug}`} className="home-blog-image">
                <img src={blog.image} alt={blog.title} loading="lazy" />

                <span className="home-blog-category">{blog.category}</span>

                <span className="home-blog-image-arrow">
                  <FaArrowRight />
                </span>
              </Link>

              {/* CONTENT */}

              <div className="home-blog-content">
                {/* META */}

                <div className="home-blog-meta">
                  <span>
                    <FaCalendarAlt />
                    {blog.date}
                  </span>

                  <span>
                    <FaClock />
                    {blog.readTime || blog.read}
                  </span>
                </div>

                {/* TITLE */}

                <h3>
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                {/* EXCERPT */}

                <p>{blog.excerpt}</p>

                {/* READ */}

                <Link to={`/blog/${blog.slug}`} className="home-blog-read">
                  <span>Read Article</span>

                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="home-blog-bottom">
          <div className="home-blog-bottom-content">
            <span>Our Latest Thinking</span>

            <h3>Explore all legal insights</h3>
          </div>

          <Link to="/blogs" className="home-blog-all-btn">
            <span>View All Insights</span>

            <span className="home-blog-all-arrow">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
