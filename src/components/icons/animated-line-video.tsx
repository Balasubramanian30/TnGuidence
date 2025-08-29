/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { motion, useTransform, useSpring } from 'framer-motion'

interface Props {
    scrollProgress: any
}

const AnimatedLineVideo: React.FC<Props> = ({ scrollProgress }) => {
    // Animate stroke offset from full to 0 (draw on scroll)
    const pathLength = useTransform(scrollProgress, [0, 0.8], [0, 1])
    const springPath = useSpring(pathLength, {
        stiffness: 500,
        damping: 20,
        mass: 0.5,
    })

    return (
        <svg width="1480" height="2022" viewBox="0 0 1480 2022" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-0 top-0 w-fit h-full pointer-events-none">
            <motion.path d="M1459.29 20.4914C1459.29 20.4914 453.499 524.492 1049 819.992C1229.54 909.584 1106 1654 538.999 1574.8C191.658 1526.29 19.9983 2001.49 19.9983 2001.49"
                stroke="url(#paint0_linear_524_648)" strokeWidth="60" strokeLinecap="round"
                style={{
                    pathLength: springPath,
                }}
            />
            <defs>
                <linearGradient id="paint0_linear_524_648" x1="1220.24" y1="-534.916" x2="2015.68" y2="326.819" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0245897" stopColor="#768AFF" />
                    <stop offset="0.945451" stopColor="#E2E6FF" stopOpacity="0.9" />
                </linearGradient>
            </defs>
        </svg>


    )
}

export default AnimatedLineVideo
