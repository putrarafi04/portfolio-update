"use client"

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Brands", href: "#projects" },
  { label: "Campaigns", href: "#campaign-types" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export function PortfolioHeader({ onProjects }: { onProjects: () => void }) {
  return (
    <header className="pf-header">
      <div className="nav-container">
        <div className="logo">Rafi Fadhila Putra</div>
        <div className="nav-right">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="nav-cta"
            onClick={onProjects}
            aria-label="Go to Project Available section"
          >
            Projects
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
