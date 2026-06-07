// Shared framer-motion variants and helpers.
// MotionConfig reducedMotion="user" (set in App) makes framer honor the OS
// "reduce motion" setting automatically, so these are safe to use everywhere.

export const EASE = [0.22, 1, 0.36, 1] // ease-out-quint — natural deceleration

export const VIEWPORT = { once: true, amount: 0.25 }

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
}

// Parent that staggers its direct children that use `fadeUp` etc.
export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})
