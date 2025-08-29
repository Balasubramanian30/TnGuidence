/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import CaptionLG from "@/components/text-components/CaptionLG";
import Body from "@/components/text-components/Body";

const FloatingCard = ({ item, idx, scrollYProgress }: any) => {
    // Safe usage of hook inside a component
    const y = useTransform(scrollYProgress, [0, 1], [0, idx % 2 === 0 ? -30 : 30]);

    return (
        <motion.div
            style={{ y }}
            className="w-full h-64 flex flex-col justify-center items-center relative gap-2 rounded-xl overflow-hidden shadow-xl group"
        >
            <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full absolute inset-0 object-cover object-center group-hover:scale-125 transition-all duration-500 ease-in-out"
            />
            <div className="w-full h-full absolute inset-0 bg-black/50" />
            <CaptionLG className="z-10 text-white text-center">{item.title}</CaptionLG>
            <Body className="z-10 text-white text-center max-w-md">{item.description}</Body>
        </motion.div>
    );
};

export default FloatingCard;
