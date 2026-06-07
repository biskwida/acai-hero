// ============================================================
// ACAI HERO — hand-drawn SVG art. Everything here is scalable,
// themeable and animatable. No raster assets required.
// ============================================================

/* The star of the show: a top-down açaí bowl, fully illustrated. */
export function BowlArt({ className, ...props }) {
  const bananas = [
    [150, 130], [198, 114], [246, 126], [126, 178], [292, 156],
  ]
  const blueberries = [
    [300, 252], [320, 234], [298, 280], [334, 264], [314, 292], [284, 238],
  ]
  const granola = [
    [182, 176, 18], [216, 208, -24], [254, 192, 12], [176, 234, 40],
    [300, 198, 8], [150, 152, -30], [266, 252, 24], [206, 258, -14], [238, 232, 33],
  ]

  const Straw = ({ x, y, r }) => (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M0 -17 C 15 -17, 18 4, 0 19 C -18 4, -15 -17, 0 -17 Z" fill="#e2566f" />
      <path d="M0 -17 C 15 -17, 18 4, 0 19 C -18 4, -15 -17, 0 -17 Z" fill="#fff" opacity="0.12" />
      <circle cx="-5" cy="-4" r="1.4" fill="#ffe2a6" />
      <circle cx="5" cy="-2" r="1.4" fill="#ffe2a6" />
      <circle cx="0" cy="6" r="1.4" fill="#ffe2a6" />
      <circle cx="-3" cy="9" r="1.4" fill="#ffe2a6" />
      <circle cx="4" cy="8" r="1.4" fill="#ffe2a6" />
      <path d="M-7 -16 C -3 -22, 3 -22, 7 -16 C 2 -19, -2 -19, -7 -16 Z" fill="#4faf6b" />
    </g>
  )

  return (
    <svg viewBox="0 0 440 440" className={className} role="img" aria-label="A bowl of açaí topped with fruit and granola" {...props}>
      <defs>
        <radialGradient id="ahAcai" cx="42%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#9a45a8" />
          <stop offset="45%" stopColor="#6f2585" />
          <stop offset="82%" stopColor="#451659" />
          <stop offset="100%" stopColor="#2e0e40" />
        </radialGradient>
        <linearGradient id="ahRim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#f0e2c8" />
        </linearGradient>
      </defs>

      {/* drop shadow */}
      <ellipse cx="222" cy="404" rx="150" ry="24" fill="#2e0e40" opacity="0.16" />

      {/* bowl */}
      <circle cx="220" cy="214" r="196" fill="url(#ahRim)" />
      <circle cx="220" cy="214" r="196" fill="none" stroke="#d9c39a" strokeWidth="1.5" opacity="0.7" />
      <circle cx="220" cy="214" r="178" fill="none" stroke="#cbb184" strokeWidth="2" opacity="0.45" />

      {/* açaí surface */}
      <circle cx="220" cy="214" r="170" fill="url(#ahAcai)" />
      <ellipse cx="172" cy="150" rx="78" ry="44" fill="#ffffff" opacity="0.07" />

      {/* granola */}
      {granola.map(([x, y, r], i) => (
        <rect key={`g${i}`} x={x - 9} y={y - 6} width="18" height="12" rx="4"
          transform={`rotate(${r} ${x} ${y})`} fill={i % 2 ? '#c98a3c' : '#b3762f'} />
      ))}

      {/* drizzle */}
      <path d="M120 296 C 170 270, 200 320, 250 292 C 290 270, 320 308, 344 286"
        fill="none" stroke="#d6a94e" strokeWidth="7" strokeLinecap="round" opacity="0.92" />

      {/* coconut chips */}
      <path d="M132 250 q 22 -14 40 -2 q -20 10 -40 2 Z" fill="#fbf3e3" stroke="#e7d6b8" strokeWidth="1.5" />
      <path d="M286 306 q 20 -16 40 -6 q -18 14 -40 6 Z" fill="#fbf3e3" stroke="#e7d6b8" strokeWidth="1.5" />

      {/* banana slices */}
      {bananas.map(([x, y], i) => (
        <g key={`b${i}`}>
          <circle cx={x} cy={y} r="15" fill="#f7e9bf" stroke="#e6cf90" strokeWidth="1.6" />
          <circle cx={x} cy={y} r="5.5" fill="none" stroke="#e2c179" strokeWidth="1.6" />
        </g>
      ))}

      {/* blueberries */}
      {blueberries.map(([x, y], i) => (
        <g key={`bl${i}`}>
          <circle cx={x} cy={y} r="9" fill={i % 2 ? '#3a3a7c' : '#2f2e63'} />
          <circle cx={x - 2.5} cy={y - 3} r="2" fill="#8f8fce" opacity="0.7" />
        </g>
      ))}

      {/* strawberries */}
      <Straw x={300} y={150} r={18} />
      <Straw x={246} y={262} r={-14} />
      <Straw x={166} y={300} r={36} />

      {/* mint */}
      <path d="M214 150 C 226 138, 244 140, 246 154 C 236 162, 220 162, 214 150 Z" fill="#52b06f" />
      <path d="M214 150 C 222 150, 234 150, 246 154" fill="none" stroke="#3a8f56" strokeWidth="1.4" />

      {/* rim highlight */}
      <path d="M92 150 A 196 196 0 0 1 198 36" fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

/* Big tropical leaf */
export function Leaf({ className, ...props }) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true" {...props}>
      <path d="M60 6 C 96 34, 104 84, 60 124 C 16 84, 24 34, 60 6 Z" fill="#3f9d5e" />
      <path d="M60 6 C 96 34, 104 84, 60 124" fill="#65b97e" opacity="0.55" />
      <path d="M60 16 L60 118" stroke="#2c7c47" strokeWidth="2.4" strokeLinecap="round" />
      <g stroke="#2c7c47" strokeWidth="1.8" strokeLinecap="round" opacity="0.85">
        <path d="M60 40 C 74 44, 82 54, 86 66" fill="none" />
        <path d="M60 40 C 46 44, 38 54, 34 66" fill="none" />
        <path d="M60 66 C 74 70, 80 80, 82 92" fill="none" />
        <path d="M60 66 C 46 70, 40 80, 38 92" fill="none" />
      </g>
    </svg>
  )
}

/* Small two-leaf sprig */
export function LeafSprig({ className, ...props }) {
  return (
    <svg viewBox="0 0 110 90" className={className} aria-hidden="true" {...props}>
      <path d="M54 84 C 50 60, 56 30, 78 12" fill="none" stroke="#2c7c47" strokeWidth="3" strokeLinecap="round" />
      <path d="M62 44 C 60 26, 72 14, 92 12 C 92 32, 80 46, 62 44 Z" fill="#4aa869" />
      <path d="M50 64 C 36 56, 28 40, 30 22 C 50 28, 60 46, 50 64 Z" fill="#3f9d5e" />
    </svg>
  )
}

/* Açaí berry sprig */
export function AcaiSprig({ className, ...props }) {
  const berries = [[26, 60], [40, 54], [52, 64], [34, 74], [48, 80], [22, 78]]
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden="true" {...props}>
      <path d="M40 6 C 36 24, 34 38, 36 54" fill="none" stroke="#3f7a3a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M40 12 C 54 8, 66 12, 70 22 C 56 26, 44 22, 40 12 Z" fill="#4aa869" />
      <path d="M40 18 C 28 12, 16 14, 12 24 C 26 30, 38 28, 40 18 Z" fill="#3f9d5e" />
      {berries.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill={i % 2 ? '#5a1f6b' : '#43155a'} />
          <circle cx={x - 2.6} cy={y - 3} r="2.4" fill="#a974b8" opacity="0.75" />
        </g>
      ))}
    </svg>
  )
}

/* Soft sunburst for backgrounds */
export function Sun({ className, ...props }) {
  const rays = Array.from({ length: 16 }, (_, i) => i * 22.5)
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <g fill="#f2c14e">
        {rays.map((a) => (
          <path key={a} d="M100 6 L108 40 L92 40 Z" transform={`rotate(${a} 100 100)`} />
        ))}
      </g>
      <circle cx="100" cy="100" r="52" fill="#f6cf6a" />
    </svg>
  )
}

/* Four-point sparkle */
export function Sparkle({ className, ...props }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...props}>
      <path d="M20 0 C 22 13, 27 18, 40 20 C 27 22, 22 27, 20 40 C 18 27, 13 22, 0 20 C 13 18, 18 13, 20 0 Z" fill="currentColor" />
    </svg>
  )
}

/* Hand-drawn underline squiggle */
export function Squiggle({ className, ...props }) {
  return (
    <svg viewBox="0 0 240 24" className={className} aria-hidden="true" preserveAspectRatio="none" {...props}>
      <path d="M4 14 C 40 2, 70 22, 110 12 C 150 2, 185 22, 236 8"
        fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

/* Organic blob (decorative background shape) */
export function Blob({ className, ...props }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <path fill="currentColor" d="M44 -64 C 60 -54, 70 -34, 72 -12 C 74 12, 66 36, 48 54 C 30 72, 4 82, -20 76 C -46 70, -70 50, -78 24 C -86 -4, -76 -36, -56 -56 C -36 -76, -8 -82, 16 -78 C 28 -76, 34 -72, 44 -64 Z"
        transform="translate(100 100)" />
    </svg>
  )
}
