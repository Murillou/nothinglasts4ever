import { StaticImageData } from 'next/image';
import { createContext, ReactNode, useState } from 'react';

interface ImageExpandType {
  selectedImage: StaticImageData | null;
  setSelectedImage: (src: StaticImageData | null) => void;
  handleClickImage: (src: StaticImageData) => void;
}

export const ImageExpandContext = createContext({} as ImageExpandType);

export function ImageExpandProvider({ children }: { children: ReactNode }) {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  function handleClickImage(src: StaticImageData) {
    setSelectedImage(src);
  }

  return (
    <ImageExpandContext.Provider
      value={{ selectedImage, setSelectedImage, handleClickImage }}
    >
      {children}
    </ImageExpandContext.Provider>
  );
}
