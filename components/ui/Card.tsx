import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: Props) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-100 bg-white shadow-sm',
        hover && 'hover:shadow-md transition-shadow cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
