import Body from '@/components/text-components/Body'
import React from 'react'

const options = ['district', 'airports', 'seaports', 'highways', 'industries', 'telecom'] as const
type TypeOption = typeof options[number]

const colorMap: Record<TypeOption, string> = {
    district: "#3A1F75",   // soft purple
    airports: "#4f2c75",   // vibrant purple
    seaports: "#5f3c82",   // deep purple
    highways: "#874c92",   // lavender purple
    industries: "#ac589d", // light violet
    telecom: "#e771ab",    // classic purple
};

export default function ButtonGroup({
    activeType,
    setActiveType,
    labels,
}: {
    activeType: TypeOption
    setActiveType: (type: TypeOption) => void
    labels: Record<TypeOption, string>
}) {
    return (
        <div className="flex flex-wrap justify-between gap-3">
            {options.map((type) => (
                <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorMap[type])}
                    onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                        activeType === type ? colorMap[type] : 'white')
                    }
                    style={{
                        backgroundColor: activeType === type ? colorMap[type] : 'white',
                        color: activeType === type ? 'white' : colorMap[type],
                        borderColor: colorMap[type],
                        transition: 'background-color 0.2s, color 0.2s',
                    }}
                    className="px-7 py-4 rounded-full capitalize font-medium flex-grow border hover:!text-white"
                >
                    <Body>{labels[type] ?? type.replace(/_/g, ' ')}</Body>
                </button>
            ))}
        </div>
    )
}