import logoLight from './images/brand/logo-horizontal.png'
import logoDark from './images/brand/logo-horizontal-dark.png'
import mark from './images/brand/mark.png'

interface LogoProps {
  height?: number
  compact?: boolean
  showTagline?: boolean
}

export function Logo({ height = 28, compact = false, showTagline = false }: LogoProps) {
  if (compact) {
    return (
      <img
        src={mark}
        alt="Morais Soluções Digitais"
        style={{ height, width: 'auto' }}
        className="flex-shrink-0"
      />
    )
  }

  return (
    <div className="flex flex-col">
      <img
        src={logoLight}
        alt="Morais Soluções Digitais"
        style={{ height }}
        className="w-auto block dark:hidden"
      />
      <img
        src={logoDark}
        alt="Morais Soluções Digitais"
        style={{ height }}
        className="w-auto hidden dark:block"
      />
      {showTagline && (
        <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight mt-1">
          Sites · Apps · APIs · Manutenção de sistemas
        </span>
      )}
    </div>
  )
}
