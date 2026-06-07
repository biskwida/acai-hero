import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkle } from './Decor.jsx'
import { BUILD } from '../data/menu.js'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion.js'
import './BuildBowl.css'

const BASE = parseFloat(BUILD.base.price)
const STD = parseFloat(BUILD.standardPrice)
const PREM = parseFloat(BUILD.premiumPrice)
const isPremium = (t) => BUILD.premium.includes(t)
const priceOf = (t) => (isPremium(t) ? PREM : STD)

export default function BuildBowl() {
  const [picked, setPicked] = useState(['Vegan granola', 'Banana', 'Strawberries'])
  const toggle = (t) =>
    setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))
  const total = (BASE + picked.reduce((s, t) => s + priceOf(t), 0)).toFixed(2)

  const Chip = (t) => {
    const on = picked.includes(t)
    return (
      <button key={t} className={`chip ${on ? 'is-on' : ''}`} onClick={() => toggle(t)} aria-pressed={on}>
        <span className="chip__plus">{on ? '✓' : '+'}</span>{t}
      </button>
    )
  }

  return (
    <section className="section build" id="build">
      <div className="container build__inner">
        <motion.div className="build__intro" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.p className="eyebrow eyebrow--gold" variants={fadeUp}>Build your own</motion.p>
          <motion.h2 className="build__title" variants={fadeUp}>Your bowl,<br />your rules.</motion.h2>
          <motion.p className="build__lead" variants={fadeUp}>
            Start with a thick Amazon-açaí base (€{BUILD.base.price}), then pile on whatever you love.
          </motion.p>

          <motion.div className="build__group" variants={fadeUp}>
            <span className="build__label">
              Standard toppings <span className="build__hint">€{BUILD.standardPrice} each</span>
            </span>
            <div className="build__toppings">{BUILD.standard.map(Chip)}</div>
          </motion.div>

          <motion.div className="build__group" variants={fadeUp}>
            <span className="build__label">
              Premium toppings <span className="build__hint build__hint--prem">€{BUILD.premiumPrice} each</span>
            </span>
            <div className="build__toppings">{BUILD.premium.map(Chip)}</div>
          </motion.div>
        </motion.div>

        <motion.aside className="build__ticket" variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <div className="ticket">
            <div className="ticket__head">
              <Sparkle className="ticket__spark" />
              <span>Your Hero Bowl</span>
            </div>
            <dl className="ticket__lines">
              <div className="ticket__line">
                <dt>Açaí base</dt>
                <dd className="tnum">{BUILD.base.price}</dd>
              </div>
              <AnimatePresence initial={false}>
                {picked.map((t) => (
                  <motion.div
                    className="ticket__line ticket__line--topping"
                    key={t}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.26 }}
                  >
                    <dt>{t}{isPremium(t) && <span className="ticket__tag">premium</span>}</dt>
                    <dd className="tnum">{priceOf(t).toFixed(2)}</dd>
                  </motion.div>
                ))}
              </AnimatePresence>
              {picked.length === 0 && <p className="ticket__empty">Just the base for now — add some toppings ✨</p>}
            </dl>
            <div className="ticket__total">
              <span>Total</span>
              <span className="ticket__price tnum">{total}<em>€</em></span>
            </div>
            <a className="btn btn--primary btn--lg ticket__cta" href="#visit">Order this bowl</a>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
