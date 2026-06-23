"use client";

import React from "react";
import Link from "next/link";

interface ValueItem {
  title: string;
  desc: string;
  icon: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export default function About() {
  const values: ValueItem[] = [
    {
      title: "Operational Rigor",
      desc: "A corporate event is only as good as its weakest logistical link. We draft granular run sheets, safety calculations, speaker schedules, and weather contingencies before a single vendor mobilises.",
      icon: "📋",
    },
    {
      title: "Brand-Aligned Design",
      desc: "Every staging element, LED backdrop, and attendee touchpoint is engineered around your corporate identity. No templates, no generic setups—just experiences that reinforce your brand.",
      icon: "✨",
    },
    {
      title: "Enterprise Network",
      desc: "Our strategic partnerships with Sri Lanka's premier convention centres, AV production houses, five-star hotels, and transfer services ensure flawless onsite execution with contractual accountability.",
      icon: "♾️",
    },
    {
      title: "Precision Timing",
      desc: "Corporate events move fast. Our onsite directors manage speaker schedules, AV cues, ceremonial processions, and VIP movements with absolute structural precision.",
      icon: "⏱️",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Kasun Jayasinghe",
      role: "Director of Corporate Events",
      bio: "Kasun has managed logistics for international conferences, multi-day summits, and large-scale convocations across Sri Lanka, specializing in multi-venue coordination and delegate flow operations.",
      avatar: "⚓",
    },
    {
      name: "Minoli Perera",
      role: "Creative & Brand Director",
      bio: "Minoli designs corporate staging, LED environments, and branded event experiences, bridging the gap between corporate identity and immersive attendee atmospheres.",
      avatar: "🎨",
    },
    {
      name: "Rohan Goonetilleke",
      role: "Technical Production Lead",
      bio: "With over 12 years in large-scale production, Rohan oversees conference AV systems, ceremonial staging, live streaming infrastructure, and multi-hall technical coordination.",
      avatar: "🔊",
    },
    {
      name: "Sanduni Fernando",
      role: "VIP & Client Relations Director",
      bio: "Sanduni coordinates corporate client consultations, VIP protocol management, five-star hotel partnerships, and multi-point executive transfer logistics across Colombo and beyond.",
      avatar: "⭐",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">About Us</span>
          <h1 className="hero-title">
            The people behind <span className="gradient-text">the&nbsp;plan.</span>
          </h1>
          <p className="hero-subtitle">
            We are a team of event strategists, production specialists, and logistics coordinators who believe every corporate event should build your brand, not just fill a calendar.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container grid-2 align-center">
          <div className="philosophy-content">
            <span className="section-tag">Our Approach</span>
            <h2 className="philosophy-title">Three loops. One seamless event.</h2>
            <p className="philosophy-desc">
              Planning a corporate event is an exercise in complex logistics. A single failed coordination point—a delayed speaker transfer, an AV glitch, a seating misalignment—can undermine months of preparation and brand investment.
            </p>
            <p className="philosophy-desc">
              Our visual symbol represents three interconnected circles: the <strong>Client Brief</strong>, the <strong>Operational Planning</strong>, and the <strong>Vendor Network</strong>. When these circles intersect perfectly, every conference, convocation, and gala delivers on its promise.
            </p>
            <p className="philosophy-desc">
              We operate coordination centers in Colombo to serve corporate clients locally and internationally, deploying teams directly to convention centres, five-star hotels, university campuses, and stadiums across Sri Lanka.
            </p>
          </div>
          <div className="philosophy-card glass-card">
            <h3 className="card-highlight gradient-text">3 Loops</h3>
            <p className="card-tagline">Client Brief, Operational Planning, and Vendor alignment. The formula behind Colombo&apos;s largest conferences and Sri Lanka&apos;s most prestigious convocations.</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Standards</h2>
            <p className="section-desc">The principles that govern our corporate event delivery and vendor partnerships.</p>
          </div>

          <div className="grid-2">
            {values.map((value, idx) => (
              <div key={idx} className="value-card glass-card">
                <span className="value-icon">{value.icon}</span>
                <div className="value-text-block">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-desc">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">Meet the Directors</h2>
            <p className="section-desc">Our directors bring decades of combined experience in corporate event management, conference production, and ceremonial staging.</p>
          </div>

          <div className="grid-4">
            {team.map((member, idx) => (
              <div key={idx} className="team-card glass-card">
                <div className="team-avatar-wrap">
                  <span className="team-avatar-emoji">{member.avatar}</span>
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="about-cta-section">
        <div className="container cta-box glass-card">
          <h2>Let&apos;s work together</h2>
          <p>Tell us about your next conference, convocation, or corporate event. We&apos;ll put together a plan.</p>
          <Link href="/contact" className="glow-btn">
            Get a Proposal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .philosophy-section {
          padding: 6rem 0;
          border-top: 1px solid var(--glass-border);
          background: var(--section-bg);
        }

        .philosophy-title {
          font-size: 2.25rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .philosophy-desc {
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
        }

        .philosophy-card {
          text-align: center;
          padding: 4rem 3rem;
          background: linear-gradient(135deg, var(--section-bg-subtle) 0%, var(--card-icon-bg) 100%);
          border-color: var(--glass-border);
        }

        .card-highlight {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .card-tagline {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .align-center {
          align-items: center;
        }

        /* Values styles */
        .values-section {
          padding: 8rem 0;
        }

        .value-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .value-icon {
          font-size: 2rem;
          padding: 0.75rem;
          background: var(--card-icon-bg);
          border-radius: 4px;
          border: 1px solid var(--glass-border);
        }

        .value-text-block {
          flex-grow: 1;
        }

        .value-title {
          font-size: 1.3rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .value-desc {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Team Section styles */
        .team-section {
          padding: 8rem 0;
          background: var(--section-bg-alt);
          border-top: 1px solid var(--glass-border);
        }

        .team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          padding: 2.5rem 1.5rem;
        }

        .team-avatar-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--card-icon-bg);
          border: 2px dashed var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: var(--transition-bounce);
        }

        .team-card:hover .team-avatar-wrap {
          transform: rotate(15deg) scale(1.1);
          border-color: var(--color-powder);
          background: rgba(143, 217, 217, 0.1);
        }

        .team-avatar-emoji {
          font-size: 2.5rem;
        }

        .team-member-name {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .team-member-role {
          font-size: 0.85rem;
          color: var(--color-powder);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .team-member-bio {
          font-size: 0.85rem;
          line-height: 1.5;
        }

        /* CTA box */
        .about-cta-section {
          padding: 4rem 0 8rem;
        }

        .cta-box {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .cta-box h2 {
          font-size: 2.25rem;
        }

        .cta-box p {
          max-width: 500px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.75rem;
          }
        }
      `}</style>
    </>
  );
}
