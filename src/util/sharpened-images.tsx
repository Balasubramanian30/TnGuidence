"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SharpenedImage = ({ imageUrl, className = "", width = 500, height = 500 }) => {
  const canvasRef = useRef(null);
  const [sharpenedImageUrl, setSharpenedImageUrl] = useState(null);

  useEffect(() => {
    if (!imageUrl) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const image = new window.Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const copy = new Uint8ClampedArray(data);

      // 3x3 sharpen kernel
      const kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];
      const side = Math.sqrt(kernel.length);
      const half = Math.floor(side / 2);

      for (let y = half; y < canvas.height - half; y++) {
        for (let x = half; x < canvas.width - half; x++) {
          for (let c = 0; c < 3; c++) {
            let sum = 0;
            for (let ky = 0; ky < side; ky++) {
              for (let kx = 0; kx < side; kx++) {
                const px = x + kx - half;
                const py = y + ky - half;
                const idx = (py * canvas.width + px) * 4 + c;
                const weight = kernel[ky * side + kx];
                sum += copy[idx] * weight;
              }
            }
            const i = (y * canvas.width + x) * 4 + c;
            data[i] = Math.min(255, Math.max(0, sum));
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setSharpenedImageUrl(canvas.toDataURL("image/png"));
    };
  }, [imageUrl]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {sharpenedImageUrl ? (
        <Image
          src={sharpenedImageUrl}
          alt="Sharpened"
          width={width}
          height={height}
          draggable={false}
          className={className}
          style={{ height: `calc(100vh - [offset])` }}
        />
      ) : (
        <div style={{ width, height }} className="bg-gray-200 w-full animate-pulse rounded" />
      )}
    </>
  );
};

export default SharpenedImage;
