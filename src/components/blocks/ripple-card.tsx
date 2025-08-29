"use client";
import { useState } from "react";

export default function RippleCard({
    children,
    className,
    color = "#5E72EB",
    baseBackground, // you can pass your gradient here
}: {
    children: React.ReactNode;
    className?: string;
    color?: string;
    baseBackground?: string;
}) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    function handleMouseMove(e: React.MouseEvent) {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }

    return (
        <div
            className={`relative overflow-hidden rounded-3xl ${className}`}
            style={{
                background: baseBackground || "",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Ripple overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: hovered
                        ? `radial-gradient(circle at ${pos.x}px ${pos.y}px, ${color}22, transparent 20%)`
                        : "transparent",
                    transition: "background 0.15s ease",
                }}
            />
            {children}
        </div>
    );
}
