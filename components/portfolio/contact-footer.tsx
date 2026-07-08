"use client"

import { Reveal } from "./reveal"

export function PortfolioResume() {
  return (
    <section id="portfolio" className="contact-section">
      <Reveal as="h2" className="section-title">
        Summary Portfolio and Resume
      </Reveal>
      <Reveal as="p" className="section-subtitle" delay={1}>
        View portfolio resources and download formal updates below
      </Reveal>
      <Reveal className="contact-grid" delay={2}>
        <a
          href="https://drive.google.com/file/d/1LxNAZjNygKWqKSyvkg24a42xHU0VDma9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <h4>Canva Portfolio</h4>
          <p>Click Button</p>
        </a>
        <a
          href="https://drive.google.com/file/d/1ShpLOoP1WZEijS03B53Au76ZvDoWhjP-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <h4>Resume</h4>
          <p>Click Button</p>
        </a>
      </Reveal>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Reveal as="h2" className="section-title">
        Let&apos;s Connect
      </Reveal>
      <Reveal as="p" className="section-subtitle" delay={1}>
        Reach out through any professional network channel below
      </Reveal>
      <Reveal className="contact-grid" delay={2}>
        <a
          href="https://www.linkedin.com/in/rafifadhilaputra/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <h4>LinkedIn</h4>
          <p>Click Button</p>
        </a>
        <a href="mailto:rafifadhilaputra@gmail.com" className="contact-card">
          <h4>Email</h4>
          <p>Click Button</p>
        </a>
      </Reveal>
    </section>
  )
}

export function PortfolioFooter() {
  return (
    <footer className="pf-footer">
      <p>&copy; 2026 Rafi Fadhila Putra Website Portfolio. All rights reserved.</p>
    </footer>
  )
}
