/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { motion, useTransform, useSpring } from 'framer-motion'

interface Props {
    scrollProgress: any
}

const AnimatedLine: React.FC<Props> = ({ scrollProgress }) => {
    // Animate stroke offset from full to 0 (draw on scroll)
    const pathLength = useTransform(scrollProgress, [0, 1], [0, 1])
    const springPath = useSpring(pathLength, {
        stiffness: 200,
        damping: 20,
        mass: 1,
    })

    return (
        <svg width="2442" height="2375" viewBox="0 0 1442 2375" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-80 !top-0 w-fit h-full pointer-events-none !-z-50">
            <motion.path d="M14.2653 30.5087C14.2653 30.5087 1073.4 337.051 248.31 974.47C-336.501 1426.26 1147.79 958.331 868.612 1912.16C722.677 2410.74 1729.79 2340.87 1729.79 2340.87" stroke="url(#paint0_linear_546_1141)" strokeWidth="120" strokeLinecap="round"
                style={{
                    pathLength: springPath,
                }}
            />
            <defs>
                <linearGradient id="paint0_linear_546_1141" x1="-997.73" y1="541.961" x2="-186.013" y2="-133.198" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0245897" stopColor="#768AFF" />
                    <stop offset="0.865385" stopColor="#E2E6FF" stopOpacity="0.9" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default AnimatedLine
