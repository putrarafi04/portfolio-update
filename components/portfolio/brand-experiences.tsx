import { Reveal } from "./reveal"

export function BrandExperiences() {
  return (
    <div className="brand-experience-grid" role="group" aria-label="Brand experience achievements">
      <Reveal as="article" className="brand-experience-card brand-experience-card--zena">
        <span className="brand-experience-kicker">Product Marketing &amp; Business Growth</span>
        <h3>ZENA Intelligence</h3>
        <ul>
          <li><strong>15+ B2B clients</strong> acquired.</li>
          <li><strong>IDR 40M+ in monthly sales</strong> generated.</li>
          <li><strong>10,000+ website clicks</strong> generated.</li>
          <li><strong>75+ qualified prospects</strong> secured.</li>
        </ul>
      </Reveal>
      <Reveal as="article" className="brand-experience-card brand-experience-card--dwi" delay={1}>
        <span className="brand-experience-kicker">Full-Stack Web Development</span>
        <h3>PT Dwi Aero Buana</h3>
        <ul>
          <li>Developed and deployed an <strong>18-page corporate website</strong>.</li>
          <li>Integrated the company&apos;s custom domain through <strong>Vercel</strong>.</li>
          <li>Configured DNS while preserving existing corporate email services.</li>
          <li>Maintained access to company email, webmail, and cPanel.</li>
        </ul>
      </Reveal>
    </div>
  )
}
