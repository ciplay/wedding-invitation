'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function VideoMessage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="my-6">
      <h2 className="text-2xl font-serif text-gray-800 mb-2">A Message from the Couple</h2>
      {isPlaying ? (
        <video
          className="w-full rounded-lg"
          controls
          autoPlay
          src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="relative">
          <img
            src="/placeholder.svg?height=400&width=600&text=Video+Thumbnail"
            alt="Video Thumbnail"
            className="w-full rounded-lg"
          />
          <Button
            onClick={() => setIsPlaying(true)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white"
          >
            Play Video
          </Button>
        </div>
      )}
    </div>
  )
}

