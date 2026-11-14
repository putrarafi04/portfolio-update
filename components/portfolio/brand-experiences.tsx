import { Reveal } from "./reveal"

export function BrandExperiences() {
  return (
    <section id="brand-experiences" className="brand-experiences-section" aria-labelledby="brand-experiences-title">
      <Reveal as="div" className="brand-experiences-heading">
        <p className="eyebrow">Selected experience</p>
        <h2 id="brand-experiences-title" className="section-title">Brands Experience</h2>
      </Reveal>
      <div className="brand-experience-grid">
        <Reveal as="article" className="brand-experience-card brand-experience-card--zena">
          <span className="brand-experience-kicker">Product Marketing &amp; Business Growth</span>
          <h3>ZENA Intelligence</h3>
          <p className="brand-experience-headline">Acquired 15+ B2B clients and generated IDR 40M+ in monthly sales.</p>
          <p className="brand-experience-description">
            Focused on performance, product marketing, and business growth—building ZENA&apos;s digital presence and connecting customer acquisition to measurable sales.
          </p>
          <ul>
            <li>Launched and scaled ZENA&apos;s digital presence, generating 10,000+ website clicks.</li>
            <li>Generated 75+ qualified prospects and secured 15+ B2B clients.</li>
            <li>Contributed to more than IDR 40 million in monthly product sales.</li>
          </ul>
        </Reveal>
        <Reveal as="article" className="brand-experience-card brand-experience-card--dwi" delay={1}>
          <span className="brand-experience-kicker">Full-Stack Web Development</span>
          <h3>PT Dwi Aero Buana</h3>
          <p className="brand-experience-headline">Developed and deployed an 18-page corporate website with custom domain integration.</p>
          <p className="brand-experience-description">
            Delivered the company&apos;s corporate website and supporting domain and DNS setup while keeping existing corporate email services operational.
          </p>
          <ul>
            <li>Developed and deployed a corporate website with 18 pages.</li>
            <li>Connected the custom domain through Vercel and configured DNS infrastructure.</li>
            <li>Preserved existing corporate email services during domain configuration.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
