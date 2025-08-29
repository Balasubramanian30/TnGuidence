'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!show) return null

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="z-50 p-4 rounded-full bg-[#3A1F75] text-white shadow hover:opacity-90"
            aria-label="Back to top"
        >
            <ArrowUp color='#fff' size={28} />
        </button>
    )
}
