import { cn } from '@/lib/utils'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  type = 'button',
  disabled = false,
}: Props) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-brand-500 hover:bg-brand-600 text-white',
    secondary: 'bg-navy hover:bg-navy/90 text-white',
    outline: 'border-2 border-brand-500 text-brand-500 hover:bg-brand-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
}
