'use client'

import { useState, type FormEvent } from 'react'

const links = [
  ['About', '#about'], ['Tools', '#tools'], ['Brands', '#projects'], ['Campaigns', '#campaign-types'], ['Resume', '#resume'], ['Contact', '#contact'],
]

export function PortfolioHeader({ onProjects }: { onProjects: () => void }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const goTo = (target: string) => { document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setOpen(false) }
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = query.trim().toLowerCase()
    if (!value) return
    const match = links.find(([label]) => label.toLowerCase().includes(value))
    if (match) goTo(match[1])
  }
  return (
    <header className="pf-header">
      <div className="nav-container">
        <a className="logo" href="#top" onClick={(event) => { event.preventDefault(); goTo('#top') }}>Rafi Fadhila Putra</a>
        <div className="nav-right">
          <form className="nav-search" role="search" onSubmit={handleSearch}>
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></svg><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sections" aria-label="Search portfolio sections" /><kbd>↵</kbd>
          </form>
          <nav className={open ? 'nav-links is-open' : 'nav-links'} id="primary-navigation" aria-label="Primary navigation">
            {links.map(([label, target]) => <a href={target} key={target} onClick={(event) => { event.preventDefault(); goTo(target) }}>{label}</a>)}
          </nav>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}><span /><span /><span /><span className="sr-only">Toggle menu</span></button>
          <button className="nav-cta" type="button" onClick={onProjects}>Projects <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </header>
  )
}
