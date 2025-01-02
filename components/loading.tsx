import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100">
      <Loader2 className="w-16 h-16 text-pink-500 animate-spin" />
    </div>
  )
}

