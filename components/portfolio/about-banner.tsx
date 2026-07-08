"use client"

import type React from "react"
import { useRef } from "react"
import { Reveal } from "./reveal"

const stats = [
  { value: "20K+", label: "Total generated leads" },
  { value: "8", label: "Brands that I work with" },
  { value: "3B+", label: "Highest revenue in 1 brand" },
  { value: "1.3B", label: "Total handled ad budget" },
]

const coreSkills = [
  "Sales Performance",
  "Digital Platform Management",
  "Campaign Optimisation",
  "Data Analysis and Visualisation",
]

const industryPassions = [
  "IT",
  "Software Development and AI",
  "Healthcare / Beauty",
  "Telecommunication and Consumer goods",
]

const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Upper Advanced" },
  { name: "Malay", level: "Advanced" },
]

/* Card that tilts in 3D following the cursor */
function TiltCard({
  children,
  className = "",
  intensity = 10,
}: {
  children: React.ReactNode
  className?: string
  intensity?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * intensity * 2
    const rotateX = (0.5 - py) * intensity * 2
    el.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`)
    el.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`)
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`)
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      <div className="tilt-card-inner">{children}</div>
    </div>
  )
}

export function AboutBanner() {
  return (
    <Reveal as="section" className="about3d-section" id="about-overview">
      <div className="about3d-header">
        <h2 className="about3d-title">ABOUT ME</h2>
        <TiltCard className="about3d-intro" intensity={5}>
          <p>
            I work across{" "}
            <strong>Performance Marketing, Digital Advertising, Planning and E-commerce</strong>{" "}
            to help brands increase visibility, engage the right audiences, and drive measurable
            business growth. My experience in paid advertising and media buying lets me transform
            creative ideas into data-driven strategies that deliver results, while building
            meaningful connections with audiences through relevant messaging rather than
            hard-selling. I am especially passionate about{" "}
            <strong>Telecommunication, IT software, Healthcare/Beauty, FMCG and AI industries</strong>.
          </p>
        </TiltCard>
      </div>

      <div className="about3d-stats">
        {stats.map((s) => (
          <TiltCard key={s.label} className="stat3d-card" intensity={14}>
            <span className="stat3d-value">{s.value}</span>
            <span className="stat3d-label">{s.label}</span>
          </TiltCard>
        ))}
      </div>

      <div className="about3d-grid">
        <TiltCard className="info3d-card" intensity={9}>
          <h3 className="info3d-title">Core Skills</h3>
          <ul className="info3d-list">
            {coreSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </TiltCard>

        <TiltCard className="info3d-card" intensity={9}>
          <h3 className="info3d-title">Industry Passions</h3>
          <ul className="info3d-list">
            {industryPassions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TiltCard>

        <TiltCard className="info3d-card" intensity={9}>
          <h3 className="info3d-title">Languages</h3>
          <ul className="info3d-list info3d-list--lang">
            {languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span className="lang3d-level">{l.level}</span>
              </li>
            ))}
          </ul>
        </TiltCard>
      </div>
    </Reveal>
  )
}
