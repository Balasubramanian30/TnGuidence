import { useEffect, useRef, useState } from "react";

export default function GradientText({ value }: { value: string }) {
    const textRef = useRef<SVGTextElement>(null);
    const [viewBox, setViewBox] = useState("50 0 400 100"); // initial fallback

    useEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            const padding = 20; // optional padding
            setViewBox(`0 0 ${bbox.width + padding} ${bbox.height + padding}`);
        }
    }, [value]);

    return (
        <svg
            viewBox={viewBox}
            className="w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="gradient-stroke"
                    x1="0%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#7472e3" />
                    <stop offset="80%" stopColor="#da75bd" />
                    <stop offset="100%" stopColor="#da75bd" />
                </linearGradient>
            </defs>
            <text
                ref={textRef}
                x="100%"
                y="100"
                textAnchor="end"
                fontSize="80"
                fontFamily="var(--font-poppins)"
                fill="transparent"
                stroke="url(#gradient-stroke)"
                strokeWidth="3"
            >
                {value}
            </text>
        </svg>
    );
}
