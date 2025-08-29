'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Body from '../text-components/Body'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'
import { useLenis } from '@/context/lenis-provider'
import BigBody from '../text-components/big-body'

const menuItems = [
    {
        label: 'About Us',
        submenu: [
            { name: 'Why Tamil Nadu' },
            { name: 'Guidance Tamil Nadu' },
            { name: 'Single Window Portal' },
            { name: 'Biz Buddy', path: '/bizbuddy' },
            { name: 'Business during COVID-19' },
            { name: 'Our Team' },
            { name: 'MSME' },
            { name: 'Careers' }
        ],
    },
    {
        label: 'Sectors',
        submenu: [
            { name: 'Automobile, Auto Components & EV' },
            { name: 'Electronics & Semiconductors' },
            { name: 'Textile, Apparel & Technical Textiles' },
            { name: 'IT & ITeS' },
            { name: 'Renewable Energy' },
            { name: 'GCC and R&D' },
            { name: 'Aerospace & Defence' },
            { name: 'FMCG, Agro & Food Processing' },
            { name: 'Leather & Footwear' },
            { name: 'Engineering & Capital Goods' },
            { name: 'Industrial Parks' },
            { name: 'Lifesciences' },
            { name: 'Banking & Financial Services' },
            { name: 'Chemicals & Petrochemicals' },
            { name: 'Tourism & Hospitality' }
        ],
    },
    {
        label: 'Business in Tamil Nadu',
        submenu: [
            { name: 'Setting up Business' },
            { name: 'List of Clearances' },
            { name: 'Know Your Clearances' },
            { name: 'Exports' },
            { name: 'Policy & Notifications' },
            { name: 'Country Desk' }
        ],
    },
    {
        label: 'Media & Events',
        submenu: [
            { name: 'Newsletters' },
            { name: 'Press Releases' },
            { name: 'Events' },
            { name: 'Gallery' }
        ],
    },
    {
        label: 'Initiatives',
        submenu: [
            { name: 'Investment Trackers' },
            { name: 'Startup TN' },
            { name: 'Key Projects' }
        ],
    },
    {
        label: 'Help & Support',
        submenu: [
            { name: 'FAQs' },
            { name: 'Contact Us' },
            { name: 'Grievance Redressal' }
        ],
    },
    {
        label: 'TNSWP',
        directLink: "/"
    },
    {
        label: 'Appointment with MD & CEO',
        directLink: "/"
    },
    {
        label: 'Industrial Site Options',
        directLink: "/"
    },
]


// interface Props {
//     isOpen: boolean
//     onClose: () => void
// }

const NavbarMenuModal: React.FC = () => {
    const [open, setOpen] = useState(false)
    const lenis = useLenis()
    const router = useRouter()

    // Scroll + Lenis lock
    useEffect(() => {
        // const body = document.body

        if (open) {
            lenis?.stop()
        } else {
            lenis?.start()
        }

        return () => {
            lenis?.start()
        }
    }, [open, lenis])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Image
                    width={24}
                    height={24}
                    alt='Hamburger Menu'
                    src="/icons/navbar-menu.svg"
                    className='w-6 h-6 cursor-pointer'
                />
            </DialogTrigger>

            <DialogContent
                data-lenis-prevent
                className="min-w-full h-screen flex flex-col gap-4 pl-10 pr-4 rounded-xl !pb-0"
            >
                <DialogTitle className=''>
                    <span className='bg-gradient-to-r from-[#AB5799] via-[#E870AB] to-[#5E72EB] bg-clip-text text-transparent'>
                        Menu
                    </span>
                </DialogTitle>

                <div className="overscroll-contain touch-auto scroll-smooth flex flex-col !pb-0">
                    {menuItems.map((item) => (
                        <div key={item.label} className="group relative">
                            <div className="text-[#3A1F75] px-7 py-4 transition-all ease-linear duration-300 group-hover:bg-[#E870AB] group-hover:text-white cursor-pointer hover:rounded-xl hover:shadow-2xl w-full border-b border-[#3A1F75]">
                                <BigBody>{item.label}</BigBody>
                            </div>
                            {item.submenu && (
                                <ul className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 p-4 z-10 !w-fit flex-grow border border-[#3A1F75] grid grid-cols-3 gap-2">
                                    {item.submenu.map((sub) => (
                                        <li
                                            key={sub.name}
                                            className="text-[#3A1F75] hover:bg-[#3A1F75] hover:text-white px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer !w-fit"
                                            onClick={() => {
                                                if (sub.path) {
                                                    router.push(sub.path)
                                                    setOpen(false)
                                                }
                                            }}
                                        >
                                            <Body>{sub.name}</Body>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default NavbarMenuModal
