"use client";

import React, { useState } from "react";
import Link from "next/link";

interface EventProject {
  id: number;
  title: string;
  category: string;
  categoryName: string;
  location: string;
  guests: string;
  solution: string;
  metric: string;
  metricLabel: string;
  image: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "corporate", name: "Corporate" },
    { id: "convocation", name: "Convocations" },
    { id: "awards", name: "Awards" },
    { id: "wedding", name: "Weddings" },
    { id: "concert", name: "Concerts" },
  ];

  const projects: EventProject[] = [
    {
      id: 1,
      title: "National Tech Summit 2025",
      category: "corporate",
      categoryName: "Conference",
      location: "Colombo Convention Centre",
      guests: "2,500 Delegates",
      solution: "Three-day multi-hall conference with curved LED walls, live streaming to 12 satellite venues, and a custom delegate engagement app with real-time polling.",
      metric: "3 Days",
      metricLabel: "Multi-Hall Execution",
      image: "/images/conference.png",
    },
    {
      id: 2,
      title: "University of Colombo Convocation",
      category: "convocation",
      categoryName: "Convocation",
      location: "BMICH, Colombo",
      guests: "3,000 Graduates",
      solution: "Full ceremonial staging with processional coordination, live projection for 5,000+ attendees, VIP protocol management, and commemorative media production.",
      metric: "3,000",
      metricLabel: "Graduates Staged",
      image: "/images/convocation.png",
    },
    {
      id: 3,
      title: "National Excellence Awards Gala",
      category: "awards",
      categoryName: "Awards Ceremony",
      location: "Shangri-La Colombo",
      guests: "800 Executives",
      solution: "Black-tie awards ceremony with custom stage design, LED backdrop walls, live entertainment, and seamless VIP arrival coordination across three ballrooms.",
      metric: "800",
      metricLabel: "Awardees & VIPs",
      image: "/images/awards.png",
    },
    {
      id: 4,
      title: "Bentota Corporate Retreat",
      category: "corporate",
      categoryName: "Corporate Retreat",
      location: "Bentota Beach Resort",
      guests: "300 Executives",
      solution: "Three-day leadership retreat with team-building activities, executive dinner galas, keynote staging, and coordinated multi-point resort transfers.",
      metric: "3",
      metricLabel: "Days of Programming",
      image: "/images/seminar.png",
    },
    {
      id: 5,
      title: "Galle Fort Sunset Wedding",
      category: "wedding",
      categoryName: "Wedding",
      location: "Galle Fort Beachfront",
      guests: "150 Guests",
      solution: "Bespoke glass pavilion on the ramparts with warm ambient lighting, offshore fireworks, and a curated seven-course dining experience.",
      metric: "100%",
      metricLabel: "Timeline Adherence",
      image: "/images/wedding.png",
    },
    {
      id: 6,
      title: "Negombo Soundwave Festival",
      category: "concert",
      categoryName: "Concert",
      location: "Negombo Beach Shorefront",
      guests: "4,000+ Fans",
      solution: "Weatherproof sound structures, crowd safety buffer lines, synchronised ocean-facing laser arrays, and artist lounge coordination.",
      metric: "0",
      metricLabel: "Logistical Incidents",
      image: "/images/concert.png",
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section className="portfolio-hero">
        <div className="container">
          <span className="section-tag">CASE STUDIES</span>
          <h1 className="portfolio-title">
            Architecting <span className="gradient-text">Experiences.</span>
          </h1>
          <p className="portfolio-subtitle">
            Browse our portfolio of corporate conferences, convocations, awards ceremonies, and premium events across Sri Lanka.
          </p>

          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="grid-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`project-card glass-card ${project.category}`}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="card-header">
                  <span className="project-tag-badge">{project.categoryName}</span>
                  <span className="project-location-text">{project.location}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.solution}</p>
                
                <div className="project-metric-block">
                  <span className="project-metric-value gradient-text">{project.metric}</span>
                  <span className="project-metric-label">{project.metricLabel}</span>
                </div>

                <div className="project-detail-list">
                  <span className="detail-pill">Guests: {project.guests}</span>
                </div>

                <div className="project-actions">
                  <Link href="/contact" className="glow-btn-outline project-link">
                    Replicate This Setup
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p>No projects found in this category. We are working on adding case studies soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Callout Section */}
      <section className="portfolio-cta-section">
        <div className="container cta-box glass-card">
          <h2>Ready to plan your next corporate event?</h2>
          <p>Connect with our event directors in Colombo to discuss venue options, staging concepts, and timeline parameters.</p>
          <Link href="/contact" className="glow-btn">
            Start Planning
          </Link>
        </div>
      </section>

      <style jsx>{`
        .portfolio-hero {
          padding: 8rem 0 4rem;
          text-align: center;
          position: relative;
        }

        .portfolio-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .portfolio-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-tab {
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 0.6rem 1.5rem;
          border-radius: 4px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .filter-tab:hover,
        .filter-tab.active {
          color: var(--text-primary);
          border-color: var(--color-powder);
          background: rgba(143, 217, 217, 0.1);
          box-shadow: 0 0 10px rgba(143, 217, 217, 0.2);
        }

        .portfolio-grid-section {
          padding: 2rem 0 6rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          position: relative;
          overflow: hidden;
          padding: 2.5rem;
          border-radius: 6px;
          background-clip: padding-box; /* Clip background to prevent leaking out */
          border: 1px solid var(--glass-border) !important;
          transition: var(--transition-smooth);
        }

        /* Hover lights for card borders based on category */
        .project-card.wedding:hover,
        .project-card.birthday:hover {
          border-color: rgba(255, 107, 107, 0.45) !important;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.15);
        }

        .project-card.corporate:hover,
        .project-card.concert:hover {
          border-color: rgba(0, 240, 255, 0.45) !important;
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.15);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(var(--overlay-dark-1), var(--overlay-dark-2));
          transition: opacity 0.5s ease;
          z-index: 0;
          opacity: 1;
        }

        .project-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.5s ease;
          z-index: 0;
          opacity: 0;
        }

        /* Category specific hover sunset/cyan gradients */
        .project-card.wedding::after,
        .project-card.birthday::after {
          background: linear-gradient(135deg, rgba(11, 15, 25, 0.9) 0%, rgba(255, 107, 107, 0.45) 60%, rgba(245, 158, 11, 0.65) 100%);
        }

        .project-card.corporate::after,
        .project-card.concert::after {
          background: linear-gradient(135deg, rgba(11, 15, 25, 0.9) 0%, rgba(29, 78, 216, 0.45) 60%, rgba(0, 240, 255, 0.6) 100%);
        }

        .project-card:hover::after {
          opacity: 1;
        }

        .project-card > * {
          position: relative;
          z-index: 1;
        }

        .project-desc, .project-location-text, .project-metric-label, .project-title {
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-desc {
          color: var(--text-primary);
        }

        .project-card:hover .project-location-text {
          color: #e2e8f0;
        }

        .project-card:hover .project-metric-label {
          color: #cbd5e1;
        }

        /* Title color transitions on hover */
        .project-card.wedding:hover .project-title,
        .project-card.birthday:hover .project-title {
          color: var(--color-sunset-gold);
        }

        .project-card.corporate:hover .project-title,
        .project-card.concert:hover .project-title {
          color: var(--color-aqua);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          margin-bottom: 1.25rem;
          gap: 1rem;
        }

        .project-tag-badge {
          background: var(--badge-bg);
          color: var(--color-powder);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.7rem;
          border: 1px solid var(--badge-border);
          text-transform: uppercase;
        }

        .project-location-text {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .project-title {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-metric-block {
          display: flex;
          flex-direction: column;
          border-left: 2px solid var(--color-aqua);
          padding-left: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-metric-value {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 900;
        }

        .project-metric-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .project-detail-list {
          margin-bottom: 2rem;
        }

        .detail-pill {
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .project-actions {
          width: 100%;
        }

        .project-link {
          width: 100%;
          text-align: center;
          padding: 0.8rem;
          font-size: 0.8rem;
        }

        .empty-state {
          text-align: center;
          padding: 4rem;
          color: var(--text-secondary);
        }

        .portfolio-cta-section {
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
          .portfolio-title {
            font-size: 2.75rem;
          }
          .filter-tabs {
            gap: 0.5rem;
          }
          .filter-tab {
            padding: 0.5rem 1.25rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
