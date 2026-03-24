import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  rating?: number
  max?: number
  className?: string
}

export default function StarRating({ rating = 5, max = 5, className }: Props) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={cn(
            'fill-current',
            i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-200'
          )}
        />
      ))}
    </div>
  )
}
