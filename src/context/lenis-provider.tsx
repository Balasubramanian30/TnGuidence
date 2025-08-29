// components/providers/LenisProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            wrapper: document.documentElement, // or document.body
            content: document.body, // or another wrapper
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })

        setLenisInstance(lenis)

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
            setLenisInstance(null)
        }
    }, [])

    return (
        <LenisContext.Provider value={lenisInstance}>
            {children}
        </LenisContext.Provider>
    )
}
