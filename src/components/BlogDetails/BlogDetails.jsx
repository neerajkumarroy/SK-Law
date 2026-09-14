import { useEffect, useMemo, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaLink,
  FaTwitter,
} from "react-icons/fa";

import blogs from "../../data/Blogs";
import "./BlogDetails.css";

gsap.registerPlugin(ScrollTrigger);

const BlogDetails = () => {
  const { slug } = useParams();
  const pageRef = useRef(null);

  const blog = useMemo(() => blogs.find((item) => item.slug === slug), [slug]);

  /*
   * Related blogs:
   * Same category ko priority + baaki blogs
   */
  const relatedBlogs = useMemo(() => {
    if (!blog) return [];

    const sameCategory = blogs.filter(
      (item) => item.slug !== blog.slug && item.category === blog.category,
    );

    const others = blogs.filter(
      (item) => item.slug !== blog.slug && item.category !== blog.category,
    );

    return [...sameCategory, ...others].slice(0, 3);
  }, [blog]);

  useEffect(() => {
    if (!blog) return;

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".blog-details-kicker", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".blog-details-title",
          {
            y: 45,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.35",
        )
        .from(
          ".blog-details-meta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".blog-details-hero-image",
          {
            scale: 1.06,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.5",
        );

      gsap.utils.toArray(".article-reveal").forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.from(".related-blog-card", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".related-blogs-grid",
          start: "top 82%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, [blog]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      console.error("Unable to copy link", error);
    }
  };

  if (!blog) {
    return (
      <main className="blog-not-found">
        <div className="blog-not-found-inner">
          <span>404</span>

          <h1>Article not found</h1>

          <p>
            The article you are looking for may have been moved or is no longer
            available.
          </p>

          <Link to="/blogs" className="blog-back-button">
            <FaArrowLeft />
            <span>Back to Blogs</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main ref={pageRef} className="blog-details-page">
      {/* =========================================
          ARTICLE HERO
      ========================================== */}
      <section className="blog-details-hero">
        <div className="blog-details-hero-inner">
          <div className="blog-details-kicker">
            <span className="kicker-line"></span>
            <span>{blog.category}</span>
          </div>

          <h1 className="blog-details-title">{blog.title}</h1>

          {blog.excerpt && (
            <p className="blog-details-excerpt">{blog.excerpt}</p>
          )}

          <div className="blog-details-meta">
            <div className="blog-meta-item">
              <FaCalendarAlt />
              <span>{blog.date}</span>
            </div>

            <span className="meta-divider"></span>

            <div className="blog-meta-item">
              <FaClock />
              <span>{blog.readTime || blog.read}</span>
            </div>

            {blog.author && (
              <>
                <span className="meta-divider"></span>

                <div className="blog-author">
                  <span className="author-label">Written by</span>
                  <strong>{blog.author}</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURE IMAGE
      ========================================== */}
      <section className="blog-details-image-section">
        <div className="blog-details-image-wrap">
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-details-hero-image"
          />

          <div className="image-category">{blog.category}</div>
        </div>
      </section>

      {/* =========================================
          ARTICLE BODY
      ========================================== */}
      <section className="blog-article-section">
        <div className="blog-article-layout">
          {/* LEFT SHARE */}
          <aside className="article-sidebar">
            <div className="sidebar-sticky">
              <span className="share-label">Share</span>

              <div className="share-buttons">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href,
                  )}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    window.location.href,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy article link"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="blog-article-content">
            <div className="article-intro article-reveal">
              <span className="article-dropcap">{blog.title?.charAt(0)}</span>

              <p>{blog.excerpt}</p>
            </div>

            {Array.isArray(blog.content) ? (
              blog.content.map((section, index) => (
                <div
                  className="article-content-block article-reveal"
                  key={`${section.heading}-${index}`}
                >
                  {section.heading && <h2>{section.heading}</h2>}

                  {Array.isArray(section.paragraphs) ? (
                    section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))
                  ) : section.paragraph ? (
                    <p>{section.paragraph}</p>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="article-content-block article-reveal">
                <p>{blog.content}</p>
              </div>
            )}

            {/* ARTICLE END */}
            <div className="article-ending article-reveal">
              <div className="ending-rule"></div>

              <p>
                For legal guidance tailored to your circumstances, professional
                advice should be considered based on the specific facts of your
                matter.
              </p>
            </div>
          </article>

          {/* RIGHT ARTICLE INFO */}
          <aside className="article-info-sidebar">
            <div className="info-card">
              <span className="info-card-label">Article information</span>

              <div className="info-row">
                <span>Category</span>
                <strong>{blog.category}</strong>
              </div>

              <div className="info-row">
                <span>Published</span>
                <strong>{blog.date}</strong>
              </div>

              <div className="info-row">
                <span>Reading time</span>
                <strong>{blog.readTime || blog.read}</strong>
              </div>

              {blog.author && (
                <div className="info-row">
                  <span>Author</span>
                  <strong>{blog.author}</strong>
                </div>
              )}
            </div>

            <Link to="/contact-us" className="sidebar-consultation">
              <span>
                Need legal
                <br />
                guidance?
              </span>

              <FaArrowRight />
            </Link>
          </aside>
        </div>
      </section>

      {/* =========================================
          BACK TO BLOGS
      ========================================== */}
      <section className="blog-navigation">
        <Link to="/blogs" className="back-to-blogs">
          <span className="back-icon">
            <FaArrowLeft />
          </span>

          <span>
            <small>Explore more</small>
            <strong>Back to all articles</strong>
          </span>
        </Link>
      </section>

      {/* =========================================
          RELATED BLOGS
      ========================================== */}
      {relatedBlogs.length > 0 && (
        <section className="related-blogs">
          <div className="related-blogs-heading">
            <div>
              <span className="section-kicker">Continue reading</span>

              <h2>
                More from the
                <em> journal.</em>
              </h2>
            </div>

            <Link to="/blogs" className="all-articles-link">
              <span>View all articles</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="related-blogs-grid">
            {relatedBlogs.map((relatedBlog) => (
              <Link
                to={`/blog/${relatedBlog.slug}`}
                className="related-blog-card"
                key={relatedBlog.id}
              >
                <div className="related-blog-image">
                  <img src={relatedBlog.image} alt={relatedBlog.title} />

                  <span>{relatedBlog.category}</span>
                </div>

                <div className="related-blog-content">
                  <div className="related-blog-meta">
                    <span>{relatedBlog.date}</span>
                    <span>{relatedBlog.readTime || relatedBlog.read}</span>
                  </div>

                  <h3>{relatedBlog.title}</h3>

                  <div className="related-blog-read">
                    <span>Read article</span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* =========================================
          FINAL CTA
      ========================================== */}
      <section className="blog-details-cta">
        <div className="cta-decoration"></div>

        <div className="blog-details-cta-inner">
          <div>
            <span className="cta-kicker">Need legal assistance?</span>

            <h2>
              Let&apos;s discuss
              <br />
              <em>your matter.</em>
            </h2>
          </div>

          <Link to="/contact-us" className="cta-button">
            <span>Book a consultation</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
