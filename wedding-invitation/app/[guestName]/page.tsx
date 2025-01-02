import WeddingInvitation from '@/components/wedding-invitation'

export default function GuestInvitationPage({ params }: { params: { guestName: string } }) {
  return <WeddingInvitation guestName={params.guestName} />
}

