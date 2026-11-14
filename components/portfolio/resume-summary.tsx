'use client'

import { useState } from 'react'
import { Reveal } from './reveal'

const experience = [
  { role: 'Ecommerce Specialist', company: 'Republik Niaga Sejahtera', date: 'Jan 2026 – Present', detail: 'Led ecommerce campaigns, marketplace reporting, SEO, paid media, and AI-powered workflows. Generated IDR 240M in revenue at 3x ROAS and improved productivity by 50%.' },
  { role: 'Search Engine Marketing Intern', company: 'Seven Retail · Sozo Skin Clinic', date: 'Oct 2025 – Jan 2026', detail: 'Optimized Google Ads, keyword strategy, conversion tracking, and landing-page copy, generating approximately 13,000 leads and improving booking rates by 12%.' },
  { role: 'Performance Marketing Analyst', company: 'Patty Pals · Freelance', date: 'Sep – Dec 2025', detail: 'Delivered competitor intelligence, KOL campaigns, Meta Ads optimization, and CTA testing that contributed to a 20% increase in sales revenue.' },
  { role: 'Media Buyer Intern', company: 'Forest Interactive', date: 'Mar – Jul 2025', detail: 'Managed IDR 20M in ad spend, validated GTM tracking, and generated 2,500+ leads, 1M+ impressions, and 2x ROAS across Google and Meta Ads.' },
]

const achievements = ['3x ROAS and IDR 240M marketplace revenue in 7 months', '13,000+ leads from Google, Meta, and social campaigns', 'IDR 1.5B+ managed advertising budgets', '50% faster planning and reporting with AI workflows']
const skills = ['Ecommerce Operations', 'Performance Marketing', 'Media Buying', 'Marketing Analytics', 'SEO / SEM', 'CRO & Funnel Optimization', 'Excel & Google Sheets', 'Looker Studio', 'Google / Meta / TikTok Ads', 'Shopify & Marketplace Growth']

export function ResumeSummary() {
  const [expanded, setExpanded] = useState(false)
  return (
    <Reveal as="section" id="resume" className="resume-section" aria-labelledby="resume-title">
      <div className="resume-heading-row">
        <div>
          <h2 id="resume-title" className="section-title resume-title">Summary Portfolio</h2>
        </div>
        <a className="btn btn-solid resume-download" href="/Rafi-Fadhila-Putra-Resume.pdf" download>Download resume</a>
      </div>
      <div className="resume-achievements">
        {achievements.map((item) => <div className="achievement-card" key={item}><span className="achievement-mark">+</span><span>{item}</span></div>)}
      </div>
      <div className={`resume-layout ${expanded ? 'is-expanded' : ''}`}>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-top"><span className="experience-date">{item.date}</span><span className="experience-dot" /></div>
              <h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.detail}</p>
            </article>
          ))}
        </div>
        <aside className="resume-sidebar">
          <div className="resume-side-card"><h3>Core toolkit</h3><div className="skill-chips">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
          <div className="resume-side-card"><h3>Education & certifications</h3><p><strong>Bachelor of International Business Management</strong><br />Minor in Entrepreneurship · Universiti Utara Malaysia · 2025</p><ul><li>Google Ads Performance Full Stack</li><li>Full Stack Digital Marketing Bootcamp</li><li>Business English C2 Upper Advanced</li></ul></div>
          <div className="resume-side-card"><h3>Languages</h3><div className="language-row"><span>Bahasa Indonesia</span><b>Native</b></div><div className="language-row"><span>English</span><b>Fluent</b></div><div className="language-row"><span>Malay</span><b>Advanced</b></div></div>
        </aside>
      </div>
      <button type="button" className="resume-toggle" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>{expanded ? 'Show compact view' : 'View full experience'} <span>{expanded ? '−' : '+'}</span></button>
    </Reveal>
  )
}
