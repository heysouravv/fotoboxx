'use client'

import { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  threshold?: number
}

export function OptimizedImage({ threshold = 0.1, ...props }: OptimizedImageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const element = document.getElementById(props.id || '')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [props.id, threshold])

  if (!isVisible) {
    return <div id={props.id} style={{ height: props.height, width: props.width }} />
  }

  return <Image {...props} />
}

