import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AcaiSprig } from './Decor.jsx'
import { EASE } from '../lib/motion.js'
import './Nav.css'

// Order mirrors the section order in App.jsx (top to bottom).
const LINKS = [
  { href: '#bowls', label: 'Bowls' },
  { href: '#menu', label: 'Menu' },
  { href: '#build', label: 'Build' },
  { href: '#story', label: 'Story' },
  { href: '#visit', label: 'Visit' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)} aria-label="Acai Hero — home">
          {logoOk ? (
            <img
              className="nav__logo"
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Acai Hero"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <>
              <AcaiSprig className="nav__mark" />
              <span className="nav__word">Açaí<span className="nav__word-accent">Hero</span></span>
            </>
          )}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary nav__order" href="#visit">Order now</a>
          <button
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className="nav__overlay" onClick={() => setOpen(false)}>
        <nav className="nav__overlay-links" aria-label="Mobile" onClick={(e) => e.stopPropagation()}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn--primary btn--lg" href="#visit" onClick={() => setOpen(false)}>Order now</a>
        </nav>
      </div>
    </motion.header>
  )
}
