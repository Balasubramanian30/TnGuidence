import React, { ReactNode } from 'react'
import Navbar from '../constants/navbar'
import Footer from '../constants/footer'
import CustomCursor from './custom-cursor'
import { LenisProvider } from '@/context/lenis-provider'

interface ProtectedComponentProps {
    children: ReactNode
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({ children }) => {
    return (
        <LenisProvider>
            <div className="flex justify-center">
                <Navbar />
            </div>
            {children}
            <Footer />
            <CustomCursor />
        </LenisProvider>
    )
}

export default ProtectedComponent