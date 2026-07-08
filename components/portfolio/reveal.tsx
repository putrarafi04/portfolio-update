"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
  id?: string
}

export function Reveal({ children, as, className = "", delay = 0, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? ` reveal-delay-${delay}` : ""

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal${visible ? " in-view" : ""}${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
