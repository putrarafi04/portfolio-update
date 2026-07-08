"use client"

import { Fragment, useState } from "react"
import { Reveal } from "./reveal"
import { aboutSlides } from "./data"

/** Renders text with **bold** markers as <strong>. */
function renderRich(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export function AboutSlider() {
  const [current, setCurrent] = useState(0)
  const total = aboutSlides.length

  const move = (dir: number) => {
    setCurrent((prev) => (prev + dir + total) % total)
  }

  return (
    <section id="about" className="about-section">
      <Reveal as="h2" className="section-title">
        About me
      </Reveal>
      <Reveal as="p" className="section-subtitle" delay={1}>
        Use controls to browse my professional profiles
      </Reveal>

      <Reveal delay={2}>
        <div className="slider-nav">
          <button
            type="button"
            className="slider-arrow"
            onClick={() => move(-1)}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <div className="slider-dots">
            {aboutSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="slider-arrow"
            onClick={() => move(1)}
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>

        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${current * 50}%)` }}
          >
            {aboutSlides.map((slide, i) => (
              <div className="about-slide" key={i}>
                {slide.map((para, j) => (
                  <p key={j}>{renderRich(para)}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
