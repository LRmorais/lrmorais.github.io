interface LogoProps {
  size?: number
  showName?: boolean
  showTagline?: boolean
}

export function Logo({ size = 32, showName = true, showTagline = false }: LogoProps) {
  const radius = Math.round(size * 0.26)
  const fontSize = Math.round(size * 0.34)

  return (
    <div className="flex items-center gap-2.5">
      <div
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize,
            letterSpacing: 1.5,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: 1,
          }}
        >
          LM
        </span>
      </div>
      {showName && (
        <div>
          <span className="font-bold text-sm tracking-tight leading-tight block">
            Lucas Morais
          </span>
          {showTagline && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight block">
              Full Stack · Web · Mobile
            </span>
          )}
        </div>
      )}
    </div>
  )
}
