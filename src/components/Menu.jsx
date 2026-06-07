import { useState } from 'react'
import { motion } from 'framer-motion'
import { MENU } from '../data/menu.js'
import MenuCard from './MenuCard.jsx'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion.js'
import './Menu.css'

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id)
  const cat = MENU.find((c) => c.id === active)

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <motion.header
          className="menu__header"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.p className="eyebrow" variants={fadeUp}>The Menu</motion.p>
          <motion.h2 className="menu__title" variants={fadeUp}>Real açaí, made your way.</motion.h2>
          <motion.p className="menu__sub" variants={fadeUp}>
            Pick a category — everything is blended or pulled fresh to order. Prices in €.
          </motion.p>
        </motion.header>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {MENU.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`menu__tab ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {active === c.id && (
                <motion.span
                  layoutId="tabPill"
                  className="menu__tab-bg"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="menu__tab-label">{c.name}</span>
            </button>
          ))}
        </div>

        <div className="menu__panel">
          <div className="menu__panel-head">
            <h3 className="menu__cat">{cat.name}</h3>
            <p className="menu__tagline">{cat.tagline}</p>
            <span className="menu__count tnum">{cat.items.length} options</span>
          </div>

          <motion.ul
            className="menu__grid"
            key={active}
            variants={stagger(0.045)}
            initial="hidden"
            animate="show"
          >
            {cat.items.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
