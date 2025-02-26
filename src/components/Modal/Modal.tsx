import { StaticImageData } from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import Image from 'next/image';

interface ImageModalProps {
  selectedImage: StaticImageData | null;
  setSelectedImage: (image: StaticImageData | null) => void;
}

export default function ImageModal({
  selectedImage,
  setSelectedImage,
}: ImageModalProps) {
  return (
    <Dialog.Root
      open={!!selectedImage}
      onOpenChange={() => setSelectedImage(null)}
    >
      <Dialog.Content className="fixed inset-0 flex items-center justify-center">
        <Dialog.Overlay
          className="fixed inset-0 bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        />
        <div className="relative p-2">
          {selectedImage && (
            <Image
              className="max-w-full max-h-full"
              src={selectedImage}
              alt="Expanded view"
              width={700}
              height={600}
            />
          )}
          <Dialog.Close asChild>
            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
