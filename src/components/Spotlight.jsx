import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SPOTLIGHT } from '../data/menu.js'
import { fadeUp, stagger, VIEWPORT, EASE } from '../lib/motion.js'
import './Spotlight.css'

const imgUrl = (img) => `${import.meta.env.BASE_URL}images/${img}`

function SpotCard({ item, index, onOpen }) {
  return (
    <motion.article className="spot" variants={fadeUp}>
      <button type="button" className="spot__media" style={{ '--accent': item.accent }} onClick={() => onOpen(item)} aria-label={`View ${item.name} larger`}>
        <span className="spot__rank">{String(index + 1).padStart(2, '0')}</span>
        <img className="spot__img" src={imgUrl(item.img)} alt={item.name} loading="lazy" onError={(e) => e.currentTarget.remove()} />
        <span className="spot__zoom" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
          </svg>
        </span>
      </button>
      <div className="spot__body">
        <div className="spot__row">
          <h3 className="spot__name">{item.name}</h3>
          <span className="spot__price tnum">{item.price}<em>€</em></span>
        </div>
        <p className="spot__desc">{item.desc}</p>
      </div>
    </motion.article>
  )
}

export default function Spotlight() {
  const [zoomed, setZoomed] = useState(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!zoomed) return
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') setZoomed(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoomed])

  return (
    <section className="section spotlight" id="bowls">
      <div className="container">
        <motion.header className="spotlight__header" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.p className="eyebrow eyebrow--coral" variants={fadeUp}>Most loved</motion.p>
          <motion.h2 className="spotlight__title" variants={fadeUp}>The bowls everyone<br />comes back for.</motion.h2>
        </motion.header>

        <motion.div className="spotlight__grid" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          {SPOTLIGHT.map((item, i) => (
            <SpotCard key={item.name} item={item} index={i} onOpen={setZoomed} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="lightbox"
            onClick={() => setZoomed(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.figure
              className="lightbox__inner"
              role="dialog"
              aria-modal="true"
              aria-label={zoomed.name}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ duration: 0.34, ease: EASE }}
            >
              <button ref={closeRef} className="lightbox__close" onClick={() => setZoomed(null)} aria-label="Close">×</button>
              <img className="lightbox__img" src={imgUrl(zoomed.img)} alt={zoomed.name} />
              <figcaption className="lightbox__cap">
                <div className="lightbox__text">
                  <h3>{zoomed.name}</h3>
                  <p>{zoomed.desc}</p>
                </div>
                <span className="lightbox__price tnum">{zoomed.price}<em>€</em></span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
