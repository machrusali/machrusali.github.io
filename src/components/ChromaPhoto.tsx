import { useEffect, useState } from "react";

interface ChromaPhotoProps {
  src: string;
  alt: string;
}

export function ChromaPhoto({ src, alt }: ChromaPhotoProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    let isCurrent = true;
    const image = new Image();
    setProcessedSrc(null);

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.drawImage(image, 0, 0);
      let imageData: ImageData;
      try {
        imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      } catch {
        return;
      }

      for (let index = 0; index < imageData.data.length; index += 4) {
        const red = imageData.data[index];
        const green = imageData.data[index + 1];
        const blue = imageData.data[index + 2];
        const blueStrength = blue - Math.max(red, green);

        if (blue > 145 && blueStrength > 35) imageData.data[index + 3] = 0;
        else if (blue > 115 && blueStrength > 20) imageData.data[index + 3] = 90;
      }

      context.putImageData(imageData, 0, 0);
      if (isCurrent) setProcessedSrc(canvas.toDataURL("image/png"));
    };

    image.src = src;

    return () => {
      isCurrent = false;
    };
  }, [src]);

  return (
    <img
      className={processedSrc ? "portrait-image is-ready" : "portrait-image"}
      src={processedSrc ?? src}
      alt={alt}
    />
  );
}
