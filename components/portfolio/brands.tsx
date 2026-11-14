"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Reveal } from "./reveal"
import { brands } from "./data"
import { BrandExperiences } from "./brand-experiences"

export function Brands() {
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [transform, setTransform] = useState(0)
  const [progress, setProgress] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [modal, setModal] = useState<{ name: string; detail: string } | null>(null)

  const render = useCallback(
    (targetIndex: number) => {
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!track || !viewport) return
      const firstCard = track.querySelector<HTMLElement>(".brand-card")
      if (!firstCard) return
      const gap = Number.parseInt(window.getComputedStyle(track).gap) || 0
      const cardWidth = firstCard.offsetWidth + gap
      const maxScroll = Math.max(0, track.scrollWidth - viewport.offsetWidth)
      const maxIndex = Math.max(0, Math.ceil(maxScroll / cardWidth))
      const clamped = Math.min(Math.max(0, targetIndex), maxIndex)
      const targetX = Math.min(clamped * cardWidth, maxScroll)
      setIndex(clamped)
      setTransform(targetX)
      setProgress(maxScroll > 0 ? (targetX / maxScroll) * 100 : 0)
      setAtStart(clamped === 0)
      setAtEnd(targetX >= maxScroll)
    },
    [],
  )

  useLayoutEffect(() => {
    render(0)
  }, [render])

  useEffect(() => {
    const onResize = () => render(index)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [index, render])

  useEffect(() => {
    if (!modal) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [modal])

  return (
    <section id="projects" className="brands-section">
      <Reveal as="h2" className="section-title">
        Brands Experience
      </Reveal>
      <BrandExperiences />

      <Reveal as="p" className="section-subtitle" delay={1}>
        Use arrows to navigate. Click on any brand to view campaign details.
      </Reveal>

      <Reveal delay={2}>
        <div className="brands-slider-container">
          <button
            type="button"
            className="brands-arrow"
            onClick={() => render(index - 1)}
            disabled={atStart}
            aria-label="Previous brand"
          >
            &#10094;
          </button>
          <div className="brands-viewport" ref={viewportRef}>
            <div
              className="brands-track"
              ref={trackRef}
              style={{ transform: `translateX(-${transform}px)` }}
            >
              {brands.map((brand) => (
                <button
                  type="button"
                  className="brand-card"
                  key={brand.name}
                  onClick={() => setModal(brand)}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="brands-arrow"
            onClick={() => render(index + 1)}
            disabled={atEnd}
            aria-label="Next brand"
          >
            &#10095;
          </button>
        </div>
        <div className="brands-progress-container">
          <div className="brands-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </Reveal>

      <div
        className={`modal-overlay${modal ? " active" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModal(null)
        }}
      >
        {modal && (
          <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="brandModalTitle">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setModal(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="modal-title" id="brandModalTitle">
              {modal.name}
            </h3>
            <div className="modal-body">{modal.detail}</div>
          </div>
        )}
      </div>
    </section>
  )
}
