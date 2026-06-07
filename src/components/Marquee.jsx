import { Sparkle } from './Decor.jsx'
import './Marquee.css'

const ITEMS = [
  'Amazon Açaí', 'Guaraná', 'Ceremonial Matcha', 'Omega-3', 'Coconut',
  'Passion Fruit', 'Pitaya', 'Blue Spirulina', 'Pecans', 'Brazilian Coffee',
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((label, i) => (
          <span className="marquee__item" key={i}>
            {label}
            <Sparkle className="marquee__star" />
          </span>
        ))}
      </div>
    </div>
  )
}
