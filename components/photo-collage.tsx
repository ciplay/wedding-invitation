import Image from 'next/image'

export default function PhotoCollage() {
  return (
    <div className="grid grid-cols-3 gap-2 my-6">
      <Image src="/placeholder.svg?height=200&width=200&text=First+Date" alt="First Date" width={200} height={200} className="rounded-lg" />
      <Image src="/placeholder.svg?height=200&width=200&text=Proposal" alt="Proposal" width={200} height={200} className="rounded-lg" />
      <Image src="/placeholder.svg?height=200&width=200&text=Engagement" alt="Engagement" width={200} height={200} className="rounded-lg" />
    </div>
  )
}

