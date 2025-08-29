'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import Container from '@/components/constants/container'
// import { selectedLanguageAtom } from '@/jotai/store'
// import { getLanguageContent } from '@/i18n'
// import { useAtom } from 'jotai'
import SmallText from '@/components/text-components/SmallText'

// const iconClass = "w-6 h-6 stroke-[#602DFB]"

const TopBar: React.FC = () => {
    // const [selectedLang] = useAtom(selectedLanguageAtom)
    // const content = getLanguageContent(selectedLang).statistics_section

    const stats = [
        { text: "A Tamil Nadu Government Portal" },
        {
            text: "Thursday, 7 August 2025, 3:24 pm (IST)"
        },
        { text: "Toll Free Number: 18002583878" },
        { text: "Tenders" },
    ]

    return (
        <Container className="bg-white !py-1">
            <Marquee pauseOnHover gradient={false} speed={40} direction='right' className=''>
                <div className="flex gap-10 items-center py-1">
                    {stats.map(({ text }, index) => (
                        <div key={index} className="flex items-center gap-2 min-w-max">
                            <SmallText className={`text-[#3A1F75] ${text === "Tenders" ? "underline" : ""}`}>{text}</SmallText>
                        </div>
                    ))}
                </div>
            </Marquee>
        </Container>
    )
}

export default TopBar


// 'use client'

// import React from 'react'
// import Marquee from 'react-fast-marquee'
// import Container from '@/components/constants/container'
// import CaptionSM from '@/components/text-components/CaptionSM'
// import { selectedLanguageAtom } from '@/jotai/store'
// import { getLanguageContent } from '@/i18n'
// import { useAtom } from 'jotai'
// import SmallText from '@/components/text-components/SmallText'

// // const iconClass = "w-6 h-6 stroke-[#602DFB]"

// const TopBar: React.FC = () => {
//     const [selectedLang] = useAtom(selectedLanguageAtom)
//     const content = getLanguageContent(selectedLang).statistics_section

//     const stats = [
//         { text: "A Tamil Nadu Government Portal" },
//         {
//             text: "A Tamil Nadu Government Portal"
//         },
//         { text: "Toll Free Number: 18002583878" },
//         { text: " Tenders" },
//     ]

//     return (
//         <Container className="bg-white flex gap-10 justify-between items-center !py-4 !h-2">
//             {/* <Marquee pauseOnHover gradient={false} speed={40} direction='right' className=''> */}

//             <div className="flex items-center gap-4">
//                 <SmallText className="text-[#3A1F75]">A Tamil Nadu Government Portal</SmallText>
//                 <SmallText className="text-[#3A1F75]">|</SmallText>
//                 <SmallText className="text-[#3A1F75]">Thursday, 7 August 2025, 10:28 am (IST)</SmallText>
//             </div>

//             <div className="flex items-center gap-4">
//                 <SmallText className="text-[#3A1F75]">Open 24/7</SmallText>
//                 <SmallText className="text-[#3A1F75]">|</SmallText>
//                 <SmallText className="text-[#3A1F75] font-bold underline">Tenders</SmallText>
//             </div>
//             {/* </Marquee> */}
//         </Container>
//     )
// }

// export default TopBar