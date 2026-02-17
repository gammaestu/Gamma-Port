type Props = {
  size?: number
  showText?: boolean
}

export function LogoMark({ size = 32, showText = false }: Props) {
  return (
    <div className="inline-flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="drop-shadow-[0_12px_30px_rgba(34,211,238,0.45)]"
      >
        <defs>
          <radialGradient id="gamma-logo-orbit" cx="0.2" cy="0.2" r="1">
            <stop offset="0%" stopColor="#ECFEFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="gamma-logo-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A5F3FC" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {/* soft outer glow */}
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="url(#gamma-logo-orbit)"
        />
        {/* inner ring */}
        <circle
          cx="24"
          cy="24"
          r="14"
          fill="rgba(15,23,42,0.08)"
          stroke="url(#gamma-logo-ring)"
          strokeWidth="2"
        />
        {/* orbit line */}
        <path
          d="M12 26C13.5 30 17.4 33 22 33.8C26.2 34.6 30.2 33.8 33 31.9"
          fill="none"
          stroke="rgba(15,23,42,0.25)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* stylized G */}
        <path
          d="M29 21.5C28.4 18.2 26 16 22.8 16C19.5 16 17 18.4 17 22C17 25.6 19.5 28 22.8 28C25.1 28 26.9 27.1 28 25.4V23.5H23.5"
          fill="none"
          stroke="#ECFEFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* small accent dot */}
        <circle cx="30.5" cy="17.5" r="2" fill="#E0F2FE" />
      </svg>
      {showText ? (
        <span className="font-semibold tracking-tight">
          Gamma <span className="text-muted">Portfolio</span>
        </span>
      ) : null}
    </div>
  )
}

