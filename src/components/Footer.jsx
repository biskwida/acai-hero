import { VENUE } from '../data/menu.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#top" aria-label="Acai Hero — home">
            <img className="footer__logo-img" src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Acai Hero" />
          </a>
          <p className="footer__tag">Real Amazon açaí, made fresh on bul. Vitosha. Fuel like a hero.</p>
          <a className="footer__ig" href={VENUE.instagram} target="_blank" rel="noreferrer">{VENUE.instagramHandle} ↗</a>
        </div>

        <nav className="footer__col">
          <h4>Explore</h4>
          <a href="#menu">Menu</a>
          <a href="#bowls">Bowls</a>
          <a href="#build">Build your bowl</a>
          <a href="#story">Our story</a>
        </nav>

        <nav className="footer__col">
          <h4>Order</h4>
          <a href={VENUE.order.glovo} target="_blank" rel="noreferrer">Glovo</a>
          <a href={VENUE.order.wolt} target="_blank" rel="noreferrer">Wolt</a>
          <a href={VENUE.order.bolt} target="_blank" rel="noreferrer">Bolt Food</a>
        </nav>

        <div className="footer__col">
          <h4>Visit</h4>
          {VENUE.locations.map((l) => (
            <p key={l.id}>
              {l.name}<br />
              <span className="footer__addr">{l.street}</span><br />
              <span className="footer__addr">{l.hours.replace('Every day · ', '')}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">ACAI HERO</div>

      <div className="container footer__bottom">
        <p>© 2026 Acai Hero Superfoods™ · Made with açaí love in Sofia.</p>
        <p className="footer__credit">Bowls &amp; prices from our live delivery menu.</p>
      </div>
    </footer>
  )
}
