import { useEffect, useRef } from "react";

import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../../assets/images/team-1.jpg";
import Image2 from "../../assets/images/team-2.jpg";
import Image3 from "../../assets/images/team-3.jpg";
import Image4 from "../../assets/images/team-4.jpg";

import "./OurTeam.css";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: "01",
    name: "Jessica Lee",
    role: "Senior Attorney",
    image: Image1,
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: "02",
    name: "Michael Brown",
    role: "Litigation Expert",
    image: Image2,
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: "03",
    name: "Emily Davis",
    role: "Family Law Specialist",
    image: Image3,
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: "04",
    name: "David Wilson",
    role: "Corporate Attorney",
    image: Image4,
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

const OurTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealItems = [
        ".team-eyebrow",
        ".team-heading",
        ".team-description",
        ".team-view-all",
        ".team-card",
      ];

      gsap.set(revealItems, {
        opacity: 0,
      });

      gsap.fromTo(
        ".team-eyebrow",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".team-heading",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".team-description",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-header",
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".team-view-all",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-header",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".team-card",
        {
          opacity: 0,
          y: 65,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 84%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="team-section" id="team">
      <div className="team-corner" aria-hidden="true" />

      <div className="team-container">
        {/* ================= HEADER ================= */}

        <div className="team-header">
          <div className="team-heading-area">
            <div className="team-eyebrow">
              <span className="team-eyebrow-line" />
              <span>OUR TEAM</span>
            </div>

            <h2 className="team-heading">
              Meet The People
              <br />
              Behind Our <em>Success.</em>
            </h2>

            <p className="team-description">
              Our team combines experience, dedication, and a deep understanding
              of the law to deliver thoughtful legal solutions tailored to every
              client.
            </p>
          </div>

          <a href="#attorneys" className="team-view-all">
            <span>All Attorneys</span>

            <span className="team-view-icon">
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </span>
          </a>
        </div>

        {/* ================= TEAM GRID ================= */}

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.id}>
              {/* IMAGE */}

              <div className="team-image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                  loading="lazy"
                />

                <div className="team-image-overlay" />

                <span className="team-card-tick tl" aria-hidden="true" />
                <span className="team-card-tick br" aria-hidden="true" />

                <span className="team-number" aria-hidden="true">
                  {member.id}
                </span>

                <div className="team-image-label">
                  <span>LEGAL PROFESSIONAL</span>
                </div>
              </div>

              {/* INFO */}

              <div className="team-info">
                <div className="team-person">
                  <h3>{member.name}</h3>

                  <p>{member.role}</p>
                </div>

                {/* SOCIAL ICONS */}

                <div className="team-socials">
                  <a
                    href={member.social.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    className="team-social linkedin"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href={member.social.instagram}
                    aria-label={`${member.name} Instagram`}
                    className="team-social instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href={member.social.twitter}
                    aria-label={`${member.name} Twitter`}
                    className="team-social twitter"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
