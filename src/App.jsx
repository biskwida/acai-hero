import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Spotlight from './components/Spotlight.jsx'
import Menu from './components/Menu.jsx'
import BuildBowl from './components/BuildBowl.jsx'
import Story from './components/Story.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Spotlight />
        <Menu />
        <BuildBowl />
        <Story />
        <Visit />
      </main>
      <Footer />
    </MotionConfig>
  )
}
