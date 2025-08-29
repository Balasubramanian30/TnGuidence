'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import Container from '@/components/constants/container'
import CaptionSM from '@/components/text-components/CaptionSM'
import { IconTrendingUp, IconBuildingFactory, IconPlane, IconAnchor } from '@tabler/icons-react'
import { selectedLanguageAtom } from '@/jotai/store'
import { getLanguageContent } from '@/i18n'
import { useAtom } from 'jotai'
import { GradientDefs, GradientIcon } from '@/components/icons/gradient-icons'

const Statistics: React.FC = () => {
    const [selectedLang] = useAtom(selectedLanguageAtom)
    const content = getLanguageContent(selectedLang).statistics_section

    const stats = [
        { icon: IconTrendingUp, text: content.gdp },
        { icon: IconBuildingFactory, text: content.export },
        { icon: IconPlane, text: content.airports },
        { icon: IconAnchor, text: content.ports },
    ]

    return (
        <Container className="bg-gradient-to-br from-[#602DFB]/5 to-[#602DFB]/15 !py-4">
            <GradientDefs />
            <Marquee pauseOnHover gradient={false} speed={40}>
                <div className="flex items-center h-fit py-1">
                    {stats.map(({ icon: Icon, text }, index) => (
                        <div key={index} className="flex items-center gap-2 min-w-max px-7">
                            <GradientIcon Icon={Icon} />
                            <CaptionSM className="text-[#3A1F75]">{text}</CaptionSM>
                        </div>
                    ))}
                </div>
            </Marquee>
        </Container>
    )
}

export default Statistics