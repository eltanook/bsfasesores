"use client"

import { useState, useEffect, useRef } from "react"

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  decimals?: number
  suffix?: string
  prefix?: string
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const startValue = start

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = startValue + (end - startValue) * easeOutQuart
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, start, end, duration])

  const formattedCount = `${prefix}${count.toFixed(decimals)}${suffix}`

  return { count, formattedCount, ref }
}
