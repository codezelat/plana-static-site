"use client";

import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "94770000000"; // Placeholder Sri Lankan number
  const defaultMessage = encodeURIComponent(
    "Hi Plan A, I'd like to inquire about your event planning services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn-container"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat with us</span>
        <div className="whatsapp-icon-wrapper">
          <svg
            className="whatsapp-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Standard WhatsApp icon paths for visual precision */}
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </div>
        <div className="whatsapp-pulse"></div>
      </a>

      <style jsx>{`
        .whatsapp-btn-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }

        .whatsapp-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          transition: var(--transition-bounce);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          z-index: 2;
        }

        .whatsapp-svg {
          width: 28px;
          height: 28px;
        }

        .whatsapp-tooltip {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 8px 16px;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: var(--glass-shadow);
          opacity: 0;
          transform: translateX(10px);
          transition: var(--transition-smooth);
          white-space: nowrap;
          pointer-events: none;
          position: relative;
          z-index: 1;
        }

        /* Hover states */
        .whatsapp-btn-container:hover .whatsapp-icon-wrapper {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .whatsapp-btn-container:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        /* Pulse Animation Effect */
        .whatsapp-pulse {
          position: absolute;
          width: 56px;
          height: 56px;
          right: 0;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.4);
          z-index: 0;
          animation: whatsapp-pulse-anim 2s infinite;
          pointer-events: none;
        }

        @keyframes whatsapp-pulse-anim {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .whatsapp-btn-container {
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-icon-wrapper {
            width: 48px;
            height: 48px;
          }
          .whatsapp-svg {
            width: 24px;
            height: 24px;
          }
          .whatsapp-pulse {
            width: 48px;
            height: 48px;
          }
          /* Hide tooltip on mobile to avoid screen crowding */
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
