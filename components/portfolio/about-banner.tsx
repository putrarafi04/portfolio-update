"use client"

import Image from "next/image"
import { Reveal } from "./reveal"

export function AboutBanner() {
  return (
    <Reveal as="section" className="about-banner-section">
      <Image
        src="/about-banner.png"
        alt="About Me — Rafi Fadhila Putra. 20K+ total generated leads, 8 brands worked with, 3B+ highest revenue in one brand, and 1.3B total handled ad budget. Core skills: sales performance, digital platform management, campaign optimisation, and data analysis. Industry passions: IT, software development and AI, healthcare/beauty, telecommunication and consumer goods. Languages: Indonesian (native), English (upper advanced), Malay (advanced)."
        width={1600}
        height={900}
        priority
        className="about-banner"
      />
    </Reveal>
  )
}
