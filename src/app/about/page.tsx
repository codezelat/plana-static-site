import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Plan A",
  description:
    "Meet Plan A, a Sri Lankan event management agency and subsidiary of Codezela Technologies, focused on clear planning and well-directed live experiences.",
  alternates: { canonical: "/about" },
};

const principles = [
  { title: "Clarity", copy: "A useful plan makes the next decision, owner and deadline easy to see." },
  { title: "Context", copy: "The audience, culture, venue and business objective should shape every event choice." },
  { title: "Control", copy: "Schedules, rehearsals and show direction turn a creative idea into a dependable live experience." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="micro-label">About Plan A</span>
            <h1 className="page-title">Events feel effortless when the work behind them is exact.</h1>
          </div>
          <p className="page-lead">
            Plan A is a Sri Lankan event management agency for business, ceremony, culture and
            celebration, backed by the technology and creative capability of Codezela Technologies.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <p className="about-manifesto">
            We believe the best event plan is not the loudest. It is the one where every choice
            has a reason, every team knows the cue, and the audience can stay <span>inside the moment.</span>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-heading">
        <div className="shell">
          <div className="section-heading">
            <div><span className="micro-label">Our working principles</span><h2 id="principles-heading">Simple ideas. Serious execution.</h2></div>
            <p>We reduce uncertainty early, keep the event aligned with its purpose and direct the details as one connected system.</p>
          </div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell parent-company">
          <div>
            <span className="micro-label">Codezela Technologies</span>
            <h2 className="display-title">Built with creative and digital thinking close at hand.</h2>
          </div>
          <div>
            <p>Plan A operates as a subsidiary of Codezela Technologies. This connection supports joined-up thinking across event experience, creative communication and digital touchpoints.</p>
            <a className="button button-secondary" href={siteConfig.parentUrl} target="_blank" rel="noopener noreferrer">Visit Codezela <ArrowUpRight aria-hidden="true" size={18} /></a>
          </div>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="shell closing-cta-inner">
          <h2>Give the idea a plan.</h2>
          <div>
            <p>We are ready to help shape the scope, team and route to showtime.</p>
            <div className="cta-actions"><Link href="/contact" className="button button-primary">Talk to Plan A <ArrowRight aria-hidden="true" size={18} /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
