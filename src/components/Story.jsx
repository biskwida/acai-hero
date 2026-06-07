import { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, LeafSprig, AcaiSprig, Sun, Sparkle } from './Decor.jsx'
import { fadeUp, stagger, VIEWPORT } from '../lib/motion.js'
import './Story.css'

const BENEFITS = [
  { k: 'Antioxidant-rich', d: 'Açaí is one of the most antioxidant-dense fruits on earth.' },
  { k: 'Clean energy', d: 'Guaraná and good fats for a lift without the crash.' },
  { k: 'Made to order', d: 'Blended fresh the moment you order — never pre-scooped.' },
  { k: 'Plant-powered', d: 'Vegan bases, real fruit, and none of the artificial junk.' },
]

export default function Story() {
  const [imgOk, setImgOk] = useState(true)
  return (
    <section className="section story" id="story">
      <div className="story__decor" aria-hidden="true">
        <Sun className="story__sun" />
        <Leaf className="story__leaf story__leaf--a" />
        <LeafSprig className="story__leaf story__leaf--b" />
      </div>

      <div className="container story__inner">
        <motion.div className="story__copy" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.p className="eyebrow eyebrow--cream" variants={fadeUp}>Our story</motion.p>
          <motion.h2 className="story__title" variants={fadeUp}>From the Amazon<br />to Vitosha.</motion.h2>
          <motion.p className="story__text" variants={fadeUp}>
            Açaí grows wild on palms deep in the Brazilian Amazon, where it has fueled daily life for
            generations. We bring that same berry — real, deep-purple and unsweetened — straight to the
            heart of Sofia.
          </motion.p>
          <motion.p className="story__text" variants={fadeUp}>
            Every bowl is blended thick and built to order on bul. Vitosha. No syrups, no shortcuts —
            just superfruit, honest toppings and a little Brazilian sunshine.
          </motion.p>
        </motion.div>

        <motion.div className="story__media" variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <div className="story__photo">
            <AcaiSprig className="story__photo-art" />
            {imgOk && <img src={`${import.meta.env.BASE_URL}images/story.jpg`} alt="Acai Hero in Sofia" loading="lazy" onError={() => setImgOk(false)} />}
            <span className="story__badge"><strong>100%</strong>Amazon açaí</span>
          </div>
        </motion.div>
      </div>

      <motion.ul className="container story__benefits" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
        {BENEFITS.map((b) => (
          <motion.li key={b.k} className="benefit" variants={fadeUp}>
            <Sparkle className="benefit__icon" />
            <h3 className="benefit__title">{b.k}</h3>
            <p className="benefit__desc">{b.d}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
