import { motion } from 'framer-motion'
import { TAGS } from '../data/menu.js'
import { fadeUp } from '../lib/motion.js'

export default function MenuCard({ item }) {
  return (
    <motion.li className="mrow" variants={fadeUp}>
      <div className="mrow__top">
        <h4 className="mrow__name">{item.name}</h4>
        <span className="mrow__leader" aria-hidden="true" />
        <span className="mrow__price tnum">
          {item.price}<em>€</em>
        </span>
      </div>
      <p className="mrow__desc">{item.desc}</p>
      {item.tags.length > 0 && (
        <ul className="mrow__tags">
          {item.tags.map((t) => (
            <li key={t} className="mtag" style={{ '--tag': TAGS[t].color }}>
              {TAGS[t].label}
            </li>
          ))}
        </ul>
      )}
    </motion.li>
  )
}
