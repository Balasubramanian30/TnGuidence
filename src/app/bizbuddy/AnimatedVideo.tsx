'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/constants/container'
import AnimatedLineVideo from '@/components/icons/animated-line-video'

const VideoSection = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'], // Start when container hits top
  })

  // Animate scale from small card to full screen
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 1], [24, 0])
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0px 10px 40px rgba(0,0,0,0.3)', '0px 20px 60px rgba(0,0,0,0.2)', 'none']
  )

  return (
    <Container
      ref={containerRef}
      className="relative h-[350vh] bg-white !pb-32"
    >
      <AnimatedLineVideo scrollProgress={scrollYProgress} />
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ scale, borderRadius, boxShadow }}
          className="aspect-video w-screen overflow-hidden bg-black"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/-HxhzAbhhn8"
            title="Business Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>
      </div>
    </Container>
  )
}

export default VideoSection
