"use client"

import { forwardRef, useEffect, useRef } from "react"
import { Reveal } from "./reveal"
import { projectServices, EMAIL } from "./data"

function mailto(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent("Inquiry: " + subject)}&body=${encodeURIComponent(body)}`
}

type Props = {
  open: boolean
  onToggle: () => void
}

export const ProjectAvailable = forwardRef<HTMLElement, Props>(function ProjectAvailable(
  { open, onToggle },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (open) {
      container.style.maxHeight = container.scrollHeight + "px"
    } else {
      container.style.maxHeight = container.scrollHeight + "px"
      requestAnimationFrame(() => {
        container.style.maxHeight = "0px"
      })
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (open && containerRef.current) {
        containerRef.current.style.maxHeight = containerRef.current.scrollHeight + "px"
      }
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [open])

  return (
    <section id="order-details" className="project-available-section" ref={ref}>
      <Reveal as="h2" className="section-title project-available-title">
        Project Available
      </Reveal>
      <Reveal as="p" className="section-subtitle" delay={1}>
        Comprehensive digital marketing frameworks built to scale leads, maximize ROAS, and optimize
        customer journeys. Tap any service to send a ready-made inquiry email.
      </Reveal>

      <div className="explore-btn-wrap">
        <button type="button" className={`explore-btn${open ? " is-open" : ""}`} onClick={onToggle}>
          <span>{open ? "Hide Projects" : "Explore Projects"}</span>
          <span className="explore-count">{projectServices.length}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div className={`projects-grid-container${open ? " is-open" : ""}`} ref={containerRef}>
        <div className="projects-grid">
          {projectServices.map((service) => (
            <a
              key={service.title}
              href={mailto(service.subject, service.body)}
              className="campaign-card-link"
            >
              <div className="campaign-card">
                <div className="card-badge">{service.badge}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
                <div className="card-metrics">
                  {service.metrics.map((m) => (
                    <span className="metric-tag" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
})
