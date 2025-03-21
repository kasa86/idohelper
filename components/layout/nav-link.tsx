'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  active?: string
  target?: string
  rel?: string
  targetPath?: string
  onClick?: () => void
  isAccordion?: boolean
  isSubAccordion?: boolean
}

export default function NavLink({
  href,
  children,
  className,
  active,
  target,
  rel,
  targetPath,
  onClick,
  isAccordion = false,
  isSubAccordion = false,
}: NavLinkProps) {
  const pathName = usePathname()
  const isActive =
    active ||
    (!active && pathName === href) ||
    (targetPath && pathName.startsWith(targetPath))

  const baseClasses = cn(
    'relative flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition',
    {
      'font-semibold text-black': isActive && !isAccordion && !isSubAccordion,
      'text-primary': isActive && (isAccordion || isSubAccordion),
    },
    className
  )

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={baseClasses}
      onClick={onClick}
    >
      {/* Left dot indicator for accordion or sub-accordion */}
      {isAccordion && (
        <div className="absolute -left-5 top-3 flex flex-col items-center gap-1">
          <div className={cn('size-[5px] rounded-full bg-gray-700/50', isActive && 'bg-primary')} />
          <div className="h-7 w-px rounded-full bg-gray-300" />
        </div>
      )}

      {isSubAccordion && (
        <div className="absolute -left-4 top-3 flex flex-col items-center gap-1">
          <div className={cn('size-[5px] rounded-full bg-gray-700/50', isActive && 'bg-primary')} />
          <div className="h-6 w-px rounded-full bg-gray-300" />
        </div>
      )}

      {/* Label / children */}
      {children}
    </Link>
  )
}
