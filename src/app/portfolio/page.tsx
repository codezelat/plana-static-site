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

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  caption: string;
  location: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Work" },
    { id: "corporate", name: "Corporate" },
    { id: "convocation", name: "Convocations" },
    { id: "awards", name: "Awards" },
    { id: "wedding", name: "Weddings" },
    { id: "concert", name: "Concerts" },
  ];

  const galleryCategories = [
    { id: "all", name: "All Photos" },
    { id: "corporate", name: "Corporate" },
    { id: "convocation", name: "Convocations" },
    { id: "awards", name: "Awards" },
    { id: "wedding", name: "Weddings" },
    { id: "concert", name: "Concerts" },
  ];

  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/images/gallery/IMG_4644.JPG", category: "corporate", caption: "Tech Conference Main Stage", location: "Colombo Convention Centre" },
    { id: 2, src: "/images/gallery/IMG_4645.JPG", category: "corporate", caption: "Executive Panel Discussion", location: "Shangri-La Colombo" },
    { id: 3, src: "/images/gallery/IMG_4647.PNG", category: "convocation", caption: "Graduation Procession Ceremony", location: "BMICH, Colombo" },
    { id: 4, src: "/images/gallery/IMG_4648.jpg", category: "awards", caption: "Business Excellence Awards Stage", location: "Hilton Colombo" },
    { id: 5, src: "/images/gallery/IMG_4649.JPG", category: "concert", caption: "Beachfront Soundwave Festival Stage", location: "Negombo Beach Shorefront" },
    { id: 6, src: "/images/gallery/IMG_4650.JPG", category: "wedding", caption: "Sunset Beach Pavilion Reception", location: "Bentota Resort Beachfront" },
    { id: 7, src: "/images/gallery/IMG_4651.JPG", category: "corporate", caption: "Corporate Leadership Summit", location: "Colombo Convention Centre" },
    { id: 8, src: "/images/gallery/IMG_4652.JPG", category: "awards", caption: "VIP Banquet Seating Setup", location: "Cinnamon Grand Colombo" },
    { id: 9, src: "/images/gallery/IMG_4653.JPG", category: "convocation", caption: "Ceremonial Stage Setup", location: "BMICH, Colombo" },
    { id: 10, src: "/images/gallery/IMG_4654.JPG", category: "concert", caption: "Outdoor Laser Show & Concert Arena", location: "Negombo Beach Shorefront" },
    { id: 11, src: "/images/gallery/IMG_4655.JPG", category: "wedding", caption: "Floral Walkway Installation", location: "Galle Fort Ramparts" },
    { id: 12, src: "/images/gallery/IMG_4658.JPG", category: "corporate", caption: "Product Launch Experience Center", location: "Colombo Convention Centre" },
    { id: 13, src: "/images/gallery/IMG_4659.JPG", category: "corporate", caption: "Keynote Presentation Setup", location: "Shangri-La Colombo" },
    { id: 14, src: "/images/gallery/IMG_4660.PNG", category: "convocation", caption: "Main Hall Audience View", location: "BMICH, Colombo" },
    { id: 15, src: "/images/gallery/IMG_4663.JPG", category: "awards", caption: "Grand Trophy Display & Lighting", location: "Shangri-La Colombo" },
    { id: 16, src: "/images/gallery/IMG_4664.JPG", category: "concert", caption: "Live Sound & AV Control Station", location: "Negombo Beach Shorefront" },
    { id: 17, src: "/images/gallery/IMG_4665.JPG", category: "wedding", caption: "Intimate Dinner Banquet Setup", location: "Galle Fort Beachfront" },
    { id: 18, src: "/images/gallery/IMG_4666.JPG", category: "corporate", caption: "Exhibition Booths & Networking Zone", location: "Colombo Convention Centre" },
    { id: 19, src: "/images/gallery/IMG_4667.JPG", category: "awards", caption: "Pre-Event VIP Lounge", location: "Cinnamon Lakeside Colombo" },
    { id: 20, src: "/images/gallery/IMG_4669.JPG", category: "concert", caption: "Main Stage Light Arrays", location: "Negombo Beach Shorefront" },
    { id: 21, src: "/images/gallery/IMG_4670.JPG", category: "wedding", caption: "Beach Ceremony Walkway", location: "Bentota Beach Resort" },
    { id: 22, src: "/images/gallery/IMG_4671.JPG", category: "corporate", caption: "Panel Q&A Interactive Setup", location: "Colombo Convention Centre" },
    { id: 23, src: "/images/gallery/IMG_4672.JPG", category: "awards", caption: "Red Carpet VIP Backdrop", location: "Shangri-La Colombo" },
    { id: 24, src: "/images/gallery/IMG_4673.JPG", category: "convocation", caption: "Graduates Seating Arrangement", location: "BMICH, Colombo" },
    { id: 25, src: "/images/gallery/IMG_4674.JPG", category: "concert", caption: "Stage Rigging & Sound Check", location: "Negombo Beach Shorefront" },
    { id: 26, src: "/images/gallery/IMG_4675.PNG", category: "wedding", caption: "Oceanfront Sunset Reception Set", location: "Galle Beachfront" },
    { id: 27, src: "/images/gallery/IMG_4676.PNG", category: "corporate", caption: "Corporate Annual Dinner Staging", location: "Shangri-La Colombo" },
    { id: 28, src: "/images/gallery/IMG_4677.PNG", category: "awards", caption: "Award Ceremony Stage Setup", location: "BMICH, Colombo" },
    { id: 29, src: "/images/gallery/IMG_4678.PNG", category: "concert", caption: "Night Concert Stage Lighting", location: "Negombo Beach Shorefront" },
  ];

  const filteredGalleryImages = activeGalleryCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeGalleryCategory);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => 
          prev !== null ? (prev + 1) % filteredGalleryImages.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => 
          prev !== null ? (prev - 1 + filteredGalleryImages.length) % filteredGalleryImages.length : null
        );
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredGalleryImages.length]);

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
          <span className="section-tag">Our Work</span>
          <h1 className="portfolio-title">
            Events that <span className="gradient-text">speak for themselves.</span>
          </h1>
          <p className="portfolio-subtitle">
            Corporate conferences, university convocations, awards galas, and celebrations we&apos;ve brought to life across Sri&nbsp;Lanka.
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

      {/* Photo Gallery Section */}
      <section className="portfolio-gallery-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Visual Archive</span>
            <h2 className="gallery-section-title">Moments from <span className="gradient-text">the field.</span></h2>
            <p className="gallery-section-subtitle">
              A behind-the-scenes look at the staging, production, and atmospheres we&apos;ve crafted.
            </p>
          </div>

          <div className="gallery-filter-tabs">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                className={`gallery-filter-tab ${activeGalleryCategory === cat.id ? "active" : ""}`}
                onClick={() => {
                  setActiveGalleryCategory(cat.id);
                  setSelectedImageIndex(null);
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGalleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item-card glass-card"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="gallery-image-container">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-tag">{image.category}</span>
                    <h4 className="gallery-item-caption">{image.caption}</h4>
                    <span className="gallery-item-location">📍 {image.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGalleryImages.length === 0 && (
            <div className="empty-state">
              <p>No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImageIndex(null)}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            
            <button
              className="lightbox-nav-btn prev"
              onClick={() =>
                setSelectedImageIndex(
                  (selectedImageIndex - 1 + filteredGalleryImages.length) %
                    filteredGalleryImages.length
                )
              }
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="lightbox-image-wrapper">
              <img
                src={filteredGalleryImages[selectedImageIndex].src}
                alt={filteredGalleryImages[selectedImageIndex].caption}
                className="lightbox-main-image"
              />
            </div>

            <button
              className="lightbox-nav-btn next"
              onClick={() =>
                setSelectedImageIndex((selectedImageIndex + 1) % filteredGalleryImages.length)
              }
              aria-label="Next image"
            >
              ›
            </button>

            <div className="lightbox-caption-panel">
              <div className="lightbox-meta">
                <span className="lightbox-tag">{filteredGalleryImages[selectedImageIndex].category}</span>
                <span className="lightbox-location">📍 {filteredGalleryImages[selectedImageIndex].location}</span>
              </div>
              <h3 className="lightbox-caption-text">{filteredGalleryImages[selectedImageIndex].caption}</h3>
              <span className="lightbox-counter">
                {selectedImageIndex + 1} / {filteredGalleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Stats Callout Section */}
      <section className="portfolio-cta-section">
        <div className="container cta-box glass-card">
          <h2>Want results like these?</h2>
          <p>Tell us about your next event. We&apos;ll put together a tailored proposal within 24 hours.</p>
          <Link href="/contact" className="glow-btn">
            Get a Proposal
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

        .portfolio-gallery-section {
          padding: 6rem 0;
          background: var(--section-bg-alt);
          position: relative;
        }

        .gallery-section-title {
          font-size: 2.75rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .gallery-section-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .gallery-filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .gallery-filter-tab {
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

        .gallery-filter-tab:hover,
        .gallery-filter-tab.active {
          color: var(--text-primary);
          border-color: var(--color-powder);
          background: rgba(143, 217, 217, 0.1);
          box-shadow: 0 0 10px rgba(143, 217, 217, 0.2);
        }

        .gallery-grid {
          column-count: 3;
          column-gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .gallery-item-card {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
          cursor: pointer;
          border: 1px solid var(--glass-border) !important;
          padding: 0 !important;
          transition: var(--transition-smooth);
          break-inside: avoid;
          margin-bottom: 1.5rem;
          display: block;
        }

        .gallery-item-card:hover {
          border-color: var(--glass-border-hover) !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(34, 211, 238, 0.15);
        }

        .gallery-image-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: var(--transition-smooth);
          display: block;
        }

        .gallery-item-card:hover .gallery-image {
          transform: scale(1.05);
        }

        .gallery-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(8, 12, 24, 0.95) 0%, rgba(8, 12, 24, 0.4) 70%, transparent 100%);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          opacity: 0;
          transition: var(--transition-smooth);
          z-index: 2;
        }

        .gallery-item-card:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-item-tag {
          font-family: var(--font-display);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-aqua);
          letter-spacing: 0.05em;
        }

        .gallery-item-caption {
          font-size: 1.05rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .gallery-item-location {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Lightbox CSS */
        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(8, 12, 24, 0.92);
          backdrop-filter: blur(15px);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease forwards;
        }
        
        .lightbox-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 1rem 1rem 0 1rem;
          box-shadow: var(--glass-shadow);
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .lightbox-close-btn {
          position: absolute;
          top: -2.5rem;
          right: 0;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.75rem;
          cursor: pointer;
          transition: var(--transition-smooth);
          z-index: 10001;
        }
        
        .lightbox-close-btn:hover {
          color: var(--color-aqua);
          transform: scale(1.1);
        }
        
        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(15, 22, 41, 0.5);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          font-size: 2.5rem;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          z-index: 10000;
        }
        
        .lightbox-nav-btn:hover {
          background: var(--bg-tertiary);
          border-color: var(--color-aqua);
          color: var(--color-aqua);
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
        }
        
        .lightbox-nav-btn.prev {
          left: -5rem;
        }
        
        .lightbox-nav-btn.next {
          right: -5rem;
        }
        
        .lightbox-image-wrapper {
          max-width: 100%;
          max-height: 60vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
        }
        
        .lightbox-main-image {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
          border-radius: 4px;
        }
        
        .lightbox-caption-panel {
          width: 100%;
          padding: 1.5rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
        }
        
        .lightbox-meta {
          display: flex;
          justify-content: center;
          gap: 1rem;
          align-items: center;
        }
        
        .lightbox-tag {
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          color: var(--color-powder);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 700;
        }
        
        .lightbox-location {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        
        .lightbox-caption-text {
          font-size: 1.25rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        
        .lightbox-counter {
          position: absolute;
          right: 1rem;
          bottom: 1.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-display);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @media (max-width: 968px) {
          .gallery-grid {
            column-count: 2;
          }
          .gallery-filter-tabs {
            gap: 0.5rem;
          }
          .gallery-filter-tab {
            padding: 0.5rem 1.25rem;
            font-size: 0.75rem;
          }
          .lightbox-nav-btn {
            width: 3rem;
            height: 3rem;
            font-size: 2rem;
          }
          .lightbox-nav-btn.prev {
            left: 1rem;
          }
          .lightbox-nav-btn.next {
            right: 1rem;
          }
          .lightbox-modal-content {
            max-width: 95vw;
            padding-top: 1rem;
          }
          .lightbox-close-btn {
            top: 0.5rem;
            right: 0.5rem;
            background: rgba(15, 22, 41, 0.8);
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--glass-border);
          }
        }

        @media (max-width: 640px) {
          .gallery-grid {
            column-count: 1;
          }
          .gallery-section-title {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </>
  );
}
