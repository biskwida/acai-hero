import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BowlArt, Leaf, LeafSprig, AcaiSprig, Sun, Sparkle } from './Decor.jsx'
import { fadeUp, stagger, EASE } from '../lib/motion.js'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBowl = useTransform(scrollYProgress, [0, 1], [0, 90])
  const yLeafA = useTransform(scrollYProgress, [0, 1], [0, 170])
  const yLeafB = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__bg" aria-hidden="true">
        <Sun className="hero__sun" />
        <div className="hero__blob hero__blob--a" />
        <div className="hero__blob hero__blob--b" />
      </div>

      <div className="container hero__inner">
        <motion.div className="hero__copy" variants={stagger(0.12, 0.08)} initial="hidden" animate="show">
          <motion.p className="eyebrow" variants={fadeUp}>Brazilian superfoods · Sofia</motion.p>
          <motion.h1 className="hero__title" variants={fadeUp}>
            Fuel like<br />a <span className="hero__title-accent">hero<Sparkle className="hero__spark" /></span>.
          </motion.h1>
          <motion.p className="hero__lead" variants={fadeUp}>
            Real Amazon açaí, blended thick and made to order on bul. Vitosha — with smoothies,
            ceremonial matcha and organic Brazilian coffee.
          </motion.p>
          <motion.div className="hero__cta" variants={fadeUp}>
            <a className="btn btn--primary btn--lg" href="#menu">See the menu</a>
            <a className="btn btn--ghost btn--lg" href="#visit">
              Order now <span className="btn__arrow">→</span>
            </a>
          </motion.div>
          <motion.ul className="hero__chips" variants={fadeUp}>
            <li><strong>98%</strong> loved on Glovo</li>
            <li><strong>100%</strong> Amazon açaí</li>
            <li>Open <strong>daily</strong> till late</li>
          </motion.ul>
        </motion.div>

        <div className="hero__art">
          <motion.div
            className="hero__bowl"
            style={{ y: yBowl }}
            initial={{ opacity: 0, scale: 0.84, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.05, ease: EASE, delay: 0.12 }}
          >
            <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
              <BowlArt className="hero__bowl-art" />
            </motion.div>
          </motion.div>

          <motion.div className="hero__deco hero__deco--leaf-a" style={{ y: yLeafA }}
            animate={{ rotate: [0, 9, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
            <Leaf />
          </motion.div>
          <motion.div className="hero__deco hero__deco--leaf-b" style={{ y: yLeafB }}
            animate={{ rotate: [0, -11, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}>
            <LeafSprig />
          </motion.div>
          <motion.div className="hero__deco hero__deco--berry"
            animate={{ y: [0, -13, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <AcaiSprig />
          </motion.div>
        </div>
      </div>

      <a className="hero__scroll" href="#menu" aria-label="Scroll to the menu">
        <span />
      </a>
    </section>
  )
}
