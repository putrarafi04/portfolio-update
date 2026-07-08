"use client"

import { Reveal } from "./reveal"
import { toolCategories } from "./data"

export function Tools() {
  return (
    <section id="tools" className="tools-section">
      <Reveal as="h2" className="section-title">
        Tools &amp; Expert Platforms
      </Reveal>
      <Reveal as="p" className="section-subtitle" delay={1}>
        A breakdown of my software proficiency and multi-platform dynamic capabilities
      </Reveal>

      {toolCategories.map((category) => (
        <div className="tools-category" key={category.title}>
          <Reveal as="div" className="category-title">
            {category.title}
          </Reveal>
          <div className="tools-grid">
            {category.tools.map((tool, i) => (
              <Reveal
                key={tool.name}
                className="tool-card"
                delay={(Math.min(i, 3) as 0 | 1 | 2 | 3)}
              >
                <h4>{tool.name}</h4>
                <p>{tool.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
