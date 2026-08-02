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
    <div className="flex flex-col items-start">
      <img
        src={logoLight}
        alt="Morais Soluções Digitais"
        style={{ height, width: 'auto' }}
        className="block dark:hidden max-w-none"
      />
      <img
        src={logoDark}
        alt="Morais Soluções Digitais"
        style={{ height, width: 'auto' }}
        className="hidden dark:block max-w-none"
      />
      {showTagline && (
        <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight mt-1">
          Sites · Apps · APIs · Manutenção de sistemas
        </span>
      )}
    </div>
  )
}
