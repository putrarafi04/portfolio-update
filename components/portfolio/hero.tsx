"use client"

import { Reveal } from "./reveal"

export function Hero({ onProjects }: { onProjects: () => void }) {
  return (
    <section className="hero">
      <Reveal as="h1">Professional Working Experience</Reveal>
      <Reveal as="p" delay={1}>
        Let&apos;s work together, together we achieve more.
      </Reveal>
      <Reveal className="hero-actions" delay={2}>
        <a href="#campaign-types" className="btn">
          Explore Campaigns
        </a>
        <button type="button" className="btn btn-solid" onClick={onProjects}>
          View Available Projects
        </button>
      </Reveal>
    </section>
  )
}
