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
        stiffness: 100,
        damping: 20,
        mass: 1,
    })

    return (
        <svg viewBox="0 0 1442 918" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-0 top-0 w-fit h-full pointer-events-none -z-50">
            <motion.path d="M1437.54 19.9993C1437.54 19.9993 1250.53 433.999 1022.04 318.499C793.544 203 667.816 460.909 866.041 522.999C997.87 564.291 1000.83 727.157 913.5 814C814.265 912.681 332.999 932.5 5.49973 824" stroke="url(#paint0_linear_447_890)" strokeWidth="60" strokeLinecap="round"
                style={{
                    pathLength: springPath,
                }}
            />
            <defs>
                <linearGradient id="paint0_linear_447_890" x1="1427" y1="27" x2="13.5" y2="821.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E870AB" stopOpacity="0.7" />
                    <stop offset="0.288866" stopColor="#E870AB" stopOpacity="0.5" />
                    <stop offset="0.464859" stopColor="#5E72EB" stopOpacity="0.5" />
                    <stop offset="0.657173" stopColor="#5E72EB" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#5E72EB" stopOpacity="0.9" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default AnimatedLine
