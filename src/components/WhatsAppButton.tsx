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
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
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
