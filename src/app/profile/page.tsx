'use client'

import ProfileInfo from '@/components/ProfileInfo'
import ActivityGrid from '@/components/ActivityGrid'

export default function ProfileContent() {
  return (
    <div className="container mx-auto max-w-[600px] px-4 py-8 space-y-8">
      <ProfileInfo />
      <ActivityGrid />
    </div>
  )
}
