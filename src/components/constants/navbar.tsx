'use client'

import Image from 'next/image'
import React, { useState } from 'react'
// import SmallText from '../text-components/SmallText'
import NavbarMenuModal from './navbar-menu'
import { useAtom } from 'jotai'
import { selectedLanguageAtom } from '@/jotai/store'
import Body from '../text-components/Body'

const languages = [
    { code: 'EN', label: 'English' },
    { code: 'TA', label: 'Tamil' },
    { code: 'FR', label: 'French' },
    { code: 'KO', label: 'Korean' },
    { code: 'NL', label: 'Dutch' },
    { code: 'JA', label: 'Japanese' },
    { code: 'DE', label: 'German' },
    { code: 'ES', label: 'Spanish' },
    { code: 'ZH', label: 'Mandarin' },
]

const Navbar = () => {
    const [selectedLang, setSelectedLang] = useAtom(selectedLanguageAtom)
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className='flex gap-4 justify-between !w-72 h-16 shadow-xl p-2 px-7 items-center !bg-white fixed top-14 rounded-full !z-[99999999]'>
            <a href="/">
                <Image width={500} height={500} alt='Tamil Nadu Guidance' src={"/guidance-logo.png"} className='w-44 h-16 cursor-pointer' />
            </a>

            <div className="fixed top-10 right-10">

                <div className="relative">
                    <div
                        onClick={() => setShowDropdown(prev => !prev)}
                        className="flex gap-1 items-center cursor-pointer bg-white rounded-full shadow-xl p-3 py-5"
                    >
                        <Body>{selectedLang}</Body>
                        <Image width={500} height={500} alt='Language Filter' src={"/icons/arrow-down.svg"} className={`w-3 h-3 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                    </div>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg z-50 overflow-hidden w-32">
                            {languages.map(lang => (
                                <div
                                    key={lang.code}
                                    onClick={() => {
                                        setSelectedLang(lang.code)
                                        setShowDropdown(false)
                                    }}
                                    className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${lang.code === selectedLang ? 'bg-gray-100 font-semibold' : ''
                                        }`}
                                >
                                    {lang.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* <SmallText className='text-[#3A1F75]'>|</SmallText> */}
                <NavbarMenuModal />
            </div>

            {/* Full-screen menu modal */}
        </div>
    )
}

export default Navbar
