"use client"

import { Reveal } from "./reveal"

export function PortfolioResume() {
  return (
    <section id="resume" className="contact-section portfolio-resources" aria-label="Portfolio resources">
      <Reveal className="contact-grid portfolio-resource-grid">
        <a
          href="https://drive.google.com/file/d/1LxNAZjNygKWqKSyvkg24a42xHU0VDma9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card portfolio-resource-card"
        >
          <h4>Summary Portfolio</h4>
        </a>
        <a
          href="https://drive.google.com/file/d/1ShpLOoP1WZEijS03B53Au76ZvDoWhjP-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card portfolio-resource-card"
        >
          <h4>Resume</h4>
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
      <Reveal delay={1}>
        <a className="btn btn-solid whatsapp-cta" href="https://wa.me/6281388180032" target="_blank" rel="noopener noreferrer">
          Message on WhatsApp
        </a>
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
