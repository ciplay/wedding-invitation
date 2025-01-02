'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ChevronDown } from 'lucide-react'
import CoupleGallery from './couple-gallery'
import VideoBackground from './video-background'
import RSVPForm from './rsvp-form'
import VideoMessage from './video-message'

interface WeddingInvitationProps {
  guestName: string
}

export default function WeddingInvitation({ guestName }: WeddingInvitationProps) {
  const [showRSVP, setShowRSVP] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const decodedGuestName = decodeURIComponent(guestName)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <VideoBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl"
            >
              <div className="text-center text-white mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <Heart className="mx-auto mb-6" size={64} />
                </motion.div>
                <motion.h1 
                  className="text-5xl sm:text-6xl font-serif mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Sarah & Michael
                </motion.h1>
                <motion.p 
                  className="text-2xl sm:text-3xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Request the pleasure of your company
                </motion.p>
                <motion.p
                  className="text-3xl sm:text-4xl font-serif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  Dear {decodedGuestName}
                </motion.p>
              </div>
              <motion.div 
                className="text-center text-white space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <p className="text-3xl sm:text-4xl font-serif">Saturday, the 15th of October, 2023</p>
                <p className="text-xl sm:text-2xl">at four o'clock in the afternoon</p>
                <p className="text-xl sm:text-2xl">
                  The Grand Plaza
                  <br />
                  123 Elegant Avenue, Cityville
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center"
              >
                <Button 
                  onClick={() => setShowRSVP(!showRSVP)}
                  className="bg-stone-700 text-white hover:bg-stone-600 text-lg px-6 py-3"
                >
                  {showRSVP ? 'Hide RSVP Form' : 'RSVP Now'}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white animate-bounce" size={32} />
        </motion.div>
      </div>
      <div className="relative z-20 bg-stone-100">
        <div className="max-w-4xl mx-auto p-8">
          <Card className="mb-8 bg-white shadow-md">
            <CardContent className="p-6">
              <CoupleGallery />
            </CardContent>
          </Card>
          <Card className="mb-8 bg-white shadow-md">
            <CardContent className="p-6">
              <VideoMessage />
            </CardContent>
          </Card>
          <AnimatePresence>
            {showRSVP && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <RSVPForm guestName={decodedGuestName} />
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

