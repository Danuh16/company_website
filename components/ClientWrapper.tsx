'use client'

import { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingSpinner message="Loading content..." />
  }

  return <>{children}</>
}