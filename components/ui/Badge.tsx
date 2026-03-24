import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'light'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: Props) {
  const variants = {
    default: 'bg-brand-100 text-brand-700',
    blue: 'bg-brand-500 text-white',
    light: 'bg-white/10 text-white',
  }

  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  )
}
