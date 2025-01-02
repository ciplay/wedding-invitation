'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: '/placeholder.svg?height=400&width=600&text=Couple+at+Beach',
    alt: 'Sarah and Michael enjoying a sunny day at the beach'
  },
  {
    src: '/placeholder.svg?height=400&width=600&text=Couple+in+Paris',
    alt: 'Sarah and Michael in front of the Eiffel Tower'
  },
  {
    src: '/placeholder.svg?height=400&width=600&text=Couple+Hiking',
    alt: 'Sarah and Michael on a mountain trail'
  },
  {
    src: '/placeholder.svg?height=400&width=600&text=Couple+at+Concert',
    alt: 'Sarah and Michael at their favorite band\'s concert'
  },
  {
    src: '/placeholder.svg?height=400&width=600&text=Couple+Cooking',
    alt: 'Sarah and Michael preparing a meal together'
  }
]

export default function CoupleGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-64 sm:h-96 mb-6">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 z-10 transition-colors hover:bg-white/75"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 z-10 transition-colors hover:bg-white/75"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/50 px-3 py-1 rounded-full text-sm text-gray-800">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

