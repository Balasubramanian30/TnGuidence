"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import CaptionSM from '@/components/text-components/CaptionSM'
import Body from '@/components/text-components/Body'
import SmallText from '@/components/text-components/SmallText'
import Container from '@/components/constants/container'
import Title from '@/components/text-components/Title'
import AnimatedLine from '@/components/icons/animated-line-sectors'
import { useAtom } from 'jotai'
import { selectedLanguageAtom } from '@/jotai/store'
import { getLanguageContent } from '@/i18n'

interface SectorStats {
    left: string;
    leftLabel: string;
    right: string;
    rightLabel: string;
}

interface Sector {
    title: string;
    stats: SectorStats | null;
}

interface SectorsSection {
    title: string;
    sectors: Sector[];
}

const Sectors = () => {
    const [selectedLang] = useAtom(selectedLanguageAtom)
    const langContent = getLanguageContent(selectedLang)
    const content: SectorsSection = langContent.sectors_section || getLanguageContent('EN').sectors_section

    const containerRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [viewportCenter, setViewportCenter] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setViewportCenter({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
            })
        }
    }, [])

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        setMousePosition({ x: clientX, y: clientY })
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    return (
        <Container
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden"
        >
            <div className="-z-50">
                <AnimatedLine scrollProgress={scrollYProgress} />
            </div>
            <Title className="text-center font-bold mb-10">
                <span className='!bg-gradient-to-b !from-[#3A1F75] !to-[#602DFB] !bg-clip-text !text-transparent'>
                    {content.title}
                </span>
            </Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {content.sectors.map((sector, index) => {
                    const delay = index * 0.1
                    const rotateX = -(mousePosition.y - viewportCenter.y) / 30
                    const rotateY = (mousePosition.x - viewportCenter.x) / 40

                    return (
                        <motion.div
                            key={sector.title}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay }}
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                className="relative rounded-xl border-2 border-[#3A1F75]/20 bg-gradient-to-t from-[#5000FF]/20 to-[#5000FF]/10 hover:bg-[#3b1d82] text-black hover:text-white !shadow-xl p-6 text-center overflow-hidden group min-w-52 min-h-52 lg:!min-w-72 lg:min-h-72 w-96 flex flex-col justify-center items-center"
                                animate={{ rotateX, rotateY }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src="/icons/aerospace.svg"
                                        alt="sector icon"
                                        width={500}
                                        height={500}
                                        className="invert group-hover:invert-0 w-32 h-20"
                                    />
                                </div>
                                <CaptionSM className="text-lg font-semibold mb-2">{sector.title}</CaptionSM>

                                {sector.stats && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-[#3b1d82] text-white flex flex-col items-center justify-center text-sm px-4 transition-opacity duration-300"
                                    >
                                        <Body className="text-xl !font-bold mb-1">{sector.stats.left}</Body>
                                        <SmallText className="text-xs mb-2 text-center">{sector.stats.leftLabel}</SmallText>
                                        <Body className="text-xl !font-bold mb-1">{sector.stats.right}</Body>
                                        <SmallText className="text-xs text-center">{sector.stats.rightLabel}</SmallText>
                                        <button className="mt-4 px-4 py-1 bg-white text-[#3b1d82] rounded-full text-xs font-semibold">
                                            <Body>View Details</Body>
                                        </button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Sectors