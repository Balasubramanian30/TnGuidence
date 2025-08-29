'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('li')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('li')) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);


    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[2147483647]"
            initial={false}
            animate={{
                x: position.x - (isHovering ? 24 : 8),
                y: position.y - (isHovering ? 24 : 8),
            }}
            transition={{ type: 'spring', stiffness: 600, damping: 35 }}
        >
            <motion.div
                className="rounded-full"
                animate={{
                    width: isHovering ? 48 : 24, // 2x bigger
                    height: isHovering ? 48 : 24,
                }}
                transition={{ type: 'spring', stiffness: 600, damping: 35 }}
                style={{
                    backdropFilter: 'invert(1)',
                    WebkitBackdropFilter: 'invert(1)',
                    backgroundColor: 'transparent',
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;