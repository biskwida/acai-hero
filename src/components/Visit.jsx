import { useState } from 'react'
import { motion } from 'framer-motion'
import { VENUE } from '../data/menu.js'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion.js'
import './Visit.css'

const ORDER = [
  { id: 'glovo', name: 'Glovo', note: 'Free delivery', href: VENUE.order.glovo, dot: 'var(--gold)' },
  { id: 'wolt', name: 'Wolt', note: 'Fast in the centre', href: VENUE.order.wolt, dot: 'var(--acai-bright)' },
  { id: 'bolt', name: 'Bolt Food', note: '4.7★ rated', href: VENUE.order.bolt, dot: 'var(--leaf)' },
]

// Keyless OpenStreetMap embed — renders reliably with no API key or cookie wall.
// (Google's keyless embed 302-redirects to a consent page in the EU and frames blank.)
function mapSrc(loc) {
  const dLat = 0.0042
  const dLon = 0.011
  const bbox = [
    (loc.lng - dLon).toFixed(5),
    (loc.lat - dLat).toFixed(5),
    (loc.lng + dLon).toFixed(5),
    (loc.lat + dLat).toFixed(5),
  ].join(',')
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${loc.lat},${loc.lng}`
}

function Clock() {
  return (
    <svg className="visit__clock" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.2V12l3.4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Visit() {
  const [activeId, setActiveId] = useState(VENUE.locations[0].id)
  const active = VENUE.locations.find((l) => l.id === activeId) || VENUE.locations[0]

  return (
    <section className="section visit" id="visit">
      <div className="container">
        <motion.header className="visit__header" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.p className="eyebrow" variants={fadeUp}>Visit &amp; order</motion.p>
          <motion.h2 className="visit__title" variants={fadeUp}>Two spots in Sofia.</motion.h2>
        </motion.header>

        <div className="visit__grid">
          <motion.div className="visit__card visit__come" variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <div className="visit__mapwrap">
              <iframe
                key={active.id}
                className="visit__map-frame"
                title={`Map — Acai Hero, ${active.name}`}
                src={mapSrc(active)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="visit__map-flag">📍 {active.name}</span>
            </div>

            <div className="visit__details">
              <ul className="visit__locs">
                {VENUE.locations.map((loc) => (
                  <li key={loc.id} className={`visit__loc ${loc.id === activeId ? 'is-active' : ''}`}>
                    <button
                      type="button"
                      className="visit__loc-main"
                      onClick={() => setActiveId(loc.id)}
                      aria-pressed={loc.id === activeId}
                    >
                      <span className="visit__loc-head">
                        <span className="visit__loc-name">{loc.name}</span>
                        <span className="visit__loc-state">{loc.id === activeId ? 'On map' : 'Show on map'}</span>
                      </span>
                      <span className="visit__loc-addr">{loc.street} · {loc.area}</span>
                      <span className="visit__loc-hours"><Clock />{loc.hours}</span>
                    </button>
                    <a className="visit__loc-dir" href={loc.maps} target="_blank" rel="noreferrer">
                      Directions <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="visit__social">
                Say hi on Instagram <a href={VENUE.instagram} target="_blank" rel="noreferrer">{VENUE.instagramHandle}</a>
              </p>
            </div>
          </motion.div>

          <motion.div className="visit__card visit__order" variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <h3 className="visit__order-title">Order in</h3>
            <p className="visit__order-sub">Delivered across Sofia in minutes.</p>
            <ul className="visit__platforms">
              {ORDER.map((o) => (
                <li key={o.id}>
                  <a className="platform" href={o.href} target="_blank" rel="noreferrer" style={{ '--dot': o.dot }}>
                    <span className="platform__dot" />
                    <span className="platform__text">
                      <span className="platform__name">{o.name}</span>
                      <span className="platform__note">{o.note}</span>
                    </span>
                    <span className="platform__arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
