'use client'

import React from 'react'
import Container from './container'
import Body from '../text-components/Body'
import SmallText from '../text-components/SmallText'
import { selectedLanguageAtom } from '@/jotai/store'
import { useAtom } from 'jotai'
import { getLanguageContent } from '@/i18n'
import SocialIconsFooter from '../blocks/social-icons-footer'
import BackToTop from '../layout/back-to-top'
import BigBody from '../text-components/big-body'
import Link from 'next/link'

// const footerLinks = [
//     {
//         heading: 'About us',
//         links: [
//             'Why Tamil Nadu',
//             'Guidance Tamil Nadu',
//             'Single Window Portal',
//             'Biz Buddy',
//             'Business during COVID-19',
//             'Our Team',
//             'MSME',
//             'Careers'
//         ]
//     },
//     {
//         heading: 'Sectors',
//         links: ['Sectors']
//     },
//     {
//         heading: 'Business in Tamil Nadu',
//         links: [
//             'Setting up Business',
//             'List of Clearances',
//             'Know Your Clearances',
//             'Exports',
//             'Policy & Notifications',
//             'Country Desk'
//         ]
//     },
//     {
//         heading: 'Media & Events',
//         links: ['Media Gallery', 'E-newsletters', 'Blogs', 'Guidance Video']
//     },
//     {
//         heading: 'Initiatives',
//         links: ['Tamil Nadu AMHUB', 'Ease of Doing Business', 'WorkLabs']
//     },
//     {
//         heading: 'Help & Support',
//         links: ['FAQs', 'Raise Your Queries', 'Contact Us']
//     }
// ]
// const bottomLinks = ['Privacy Policy', 'Terms of Use', 'Legal', 'Site Map']

const Footer = () => {

    const [selectedLang] = useAtom(selectedLanguageAtom)
    const langContent = getLanguageContent(selectedLang)
    const content = langContent.footer || getLanguageContent('EN').footer

    const footerLinks = content.sections || []
    const bottomLinks = content.bottomLinks || []

    return (
        <Container className="bg-gradient-to-br to-[#5000FF]/30 from-[#5000FF]/10 text-[#3A1F75]">
            <div className="flex justify-end">
                <BackToTop />
            </div>
            <div className="px-4 py-16 space-y-16 sm:px-6 lg:px-8">

                {/* Top Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    {footerLinks.map((section: { heading: string; links: string[] }, idx: number) => (
                        <div key={idx}>
                            <BigBody className="font-semibold">{section.heading}</BigBody>
                            <ul className="mt-4 space-y-2 text-sm">
                                {section.links.map((link: string, i: number) => (
                                    <li key={i}>
                                        <Link href="#" className="hover:opacity-75 transition">
                                            <Body className="text-[#3A1F75]/70">{link}</Body>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-[#3A1F75]" />

                {/* Subscribe */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="flex flex-wrap items-center gap-4 w-full">
                        {/* <BigBody className="font-medium text-[#3A1F75] whitespace-nowrap">Subscribe</BigBody> */}
                        <input
                            type="email"
                            placeholder="Enter your email Address"
                            className="px-4 py-4 text-sm border border-gray-300 bg-white min-w-64 lg:!min-w-96 rounded-full focus:outline-none"
                            style={{
                                fontSize: "var(--font-smalltext)"
                            }}
                        />
                        <button className="px-7 py-4 text-white bg-[#3A1F75] rounded-full text-sm">
                            <Body>
                                Subscribe
                            </Body>
                        </button>
                    </div>

                    {/* Social Icons */}
                    <SocialIconsFooter />
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#3A1F75]">
                    <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                        {bottomLinks.map((link: string, i: number) => (
                            <Body key={i}>
                                <Link href="#" className="hover:underline">
                                    {link}
                                </Link>
                            </Body>
                        ))}
                        <Body className="!font-bold">Visitor Count: 104281692</Body>
                    </div>
                    <SmallText className="text-[#3A1F75]/70">&copy; 2025 All Rights Reserved</SmallText>
                </div>
            </div>
        </Container>
    )
}

export default Footer