"use client";
import { useState } from "react";
import Image from "next/image";
import { SpinningText } from "@/components/magicui/spinning-text";
import Modal from "./VideoModal";

export default function AnimatedVideo() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden py-9">
      <Image
        src="/VideoBg.jpg"
        alt="Video Background"
        width={1920}
        height={1080}
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute right-[45vw] bottom-[10vw] inset-0 flex items-center justify-center">
        <span className="text-white text-9xl drop-shadow-lg text-underline">PLAY</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center">
          <SpinningText className="text-white">
            learn more • earn more • grow more •
          </SpinningText>
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg pointer-events-auto cursor-pointer"
            aria-label="Play Video"
            onClick={openModal}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <polygon points="18,15 36,24 18,33" fill="#5E72EB" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute right-[8vw] bottom-[12vw] flex items-center justify-end">
        <span className="bg-gradient-to-t from-[#5E72EB] to-[#da75bd] bg-clip-text text-transparent text-9xl drop-shadow-lg">
          Video
        </span>
      </div>

      <Modal show={modalOpen} handleClose={closeModal} videoId="-HxhzAbhhn8" />
    </div>
  );
}
