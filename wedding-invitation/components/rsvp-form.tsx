'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"

interface RSVPFormProps {
  guestName: string
}

export default function RSVPForm({ guestName }: RSVPFormProps) {
  const [name, setName] = useState(guestName)
  const [email, setEmail] = useState('')
  const [attendance, setAttendance] = useState('yes')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your server
    console.log({ name, email, attendance })
    toast({
      title: "RSVP Submitted",
      description: `Thank you, ${name}! Your RSVP has been received.`,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-serif text-center mb-4 text-stone-800">RSVP</h2>
      <div>
        <Label htmlFor="name" className="text-lg text-stone-700">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email" className="text-lg text-stone-700">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1" />
      </div>
      <div>
        <Label className="text-lg text-stone-700">Will you attend?</Label>
        <RadioGroup value={attendance} onValueChange={setAttendance} className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes" className="text-stone-600">Yes, I will attend</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no" className="text-stone-600">No, I cannot attend</Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit" className="w-full bg-stone-700 hover:bg-stone-600 text-white text-lg py-2">
        Submit RSVP
      </Button>
    </form>
  )
}

