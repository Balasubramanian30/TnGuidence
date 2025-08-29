/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { motion, useTransform, useSpring } from 'framer-motion'

interface Props {
    scrollProgress: any
}

const SMAnimatedLine: React.FC<Props> = ({ scrollProgress }) => {
    // Animate stroke offset from full to 0 (draw on scroll)
    const pathLength = useTransform(scrollProgress, [0, 0.8], [0, 1])
    const springPath = useSpring(pathLength, {
        stiffness: 500,
        damping: 20,
        mass: 0.5,
    })

    return (
        <svg width="1373" height="2175" viewBox="0 0 1373 2185" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-0 !top-0 w-fit h-full pointer-events-none !-z-50" >
            <motion.path d="M-25.8933 30.9276C-25.8933 30.9276 153.003 757.501 474.502 757.501C1092.5 795 1057.9 415.987 760.502 388.001C362 350.5 303.488 1104.59 517.001 1584C604.44 1780.33 1342.11 2154.93 1342.11 2154.93" stroke="url(#paint0_linear_464_647)" strokeWidth="120" strokeLinecap="round"
                style={{
                    pathLength: springPath,
                }}
            />
            <defs>
                <linearGradient id="paint0_linear_464_647" x1="-441.626" y1="97.4747" x2="239.456" y2="-390.826" gradientUnits="userSpaceOnUse">
                    <stop offset="0.524038" stopColor="#768AFF" />
                    <stop offset="0.945451" stopColor="#E2E6FF" stopOpacity="0.9" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default SMAnimatedLine
