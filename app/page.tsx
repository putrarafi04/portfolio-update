"use client"

import { useRef, useState } from "react"
import { PortfolioHeader } from "@/components/portfolio/portfolio-header"
import { Hero } from "@/components/portfolio/hero"
import { AboutBanner } from "@/components/portfolio/about-banner"
import { AboutSlider } from "@/components/portfolio/about-slider"
import { Tools } from "@/components/portfolio/tools"
import { Brands } from "@/components/portfolio/brands"
import { CampaignTicker } from "@/components/portfolio/campaign-ticker"
import { ProjectAvailable } from "@/components/portfolio/project-available"
import { PortfolioResume, Contact, PortfolioFooter } from "@/components/portfolio/contact-footer"

export default function Page() {
  const [projectsOpen, setProjectsOpen] = useState(false)
  const projectRef = useRef<HTMLElement>(null)

  const goToProjects = () => {
    setProjectsOpen(true)
    const section = projectRef.current
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      section.classList.add("just-arrived")
      window.setTimeout(() => section.classList.remove("just-arrived"), 1000)
    }
  }

  return (
    <div className="pf" id="top">
      <PortfolioHeader onProjects={goToProjects} />
      <main>
        <Hero onProjects={goToProjects} />
        <AboutBanner />
        <AboutSlider />
        <Tools />
        <Brands />
        <CampaignTicker />
        <ProjectAvailable
          ref={projectRef}
          open={projectsOpen}
          onToggle={() => setProjectsOpen((o) => !o)}
        />
        <PortfolioResume />
        <Contact />
      </main>
      <PortfolioFooter />
    </div>
  )
}
