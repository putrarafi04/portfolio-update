"use client"

import { useEffect, useRef } from "react"
import { Reveal } from "./reveal"
import { tickerCards } from "./data"

export function CampaignTicker() {
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let position = 0
    let raf = 0
    const speed = 0.6

    const getLoopWidth = () => {
      const gap = Number.parseInt(window.getComputedStyle(track).gap) || 0
      // half of children because the list is duplicated
      const half = track.children.length / 2
      let total = 0
      for (let i = 0; i < half; i++) {
        total += (track.children[i] as HTMLElement).offsetWidth + gap
      }
      return total
    }

    const tick = () => {
      if (!pausedRef.current) {
        position -= speed
        if (Math.abs(position) >= getLoopWidth()) position = 0
        track.style.transform = `translateX(${position}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // duplicate cards for a seamless infinite loop
  const loopCards = [...tickerCards, ...tickerCards]

  return (
    <section id="campaign-types" className="campaign-types-section">
      <Reveal as="h2" className="section-title">
        Campaign Type Projects
      </Reveal>
      <Reveal as="p" className="section-subtitle" delay={1}>
        Comprehensive digital marketing frameworks focused on driving qualified traffic, improving
        conversion rates, maximizing advertising efficiency, and enhancing the customer journey.
      </Reveal>

      <Reveal delay={2}>
        <div
          className="ticker-wrapper"
          ref={wrapperRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="ticker-track" ref={trackRef}>
            {loopCards.map((card, i) => (
              <div className="ticker-card" key={`${card.title}-${i}`} aria-hidden={i >= tickerCards.length}>
                <div className="ticker-badge">{card.badge}</div>
                <h3 className="ticker-title">{card.title}</h3>
                <p className="ticker-desc">{card.desc}</p>
                <div className="ticker-metrics">
                  {card.metrics.map((m) => (
                    <span className="ticker-metric-tag" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
