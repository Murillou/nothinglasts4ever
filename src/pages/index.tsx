import Image, { StaticImageData } from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import Head from 'next/head';
import { images } from '@/data/home';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      duration: 400,
      easing: 'ease',
      once: false,
    });
  }, []);

  function handleImageClick(src: StaticImageData) {
    setSelectedImage(src);
  }

  return (
    <>
      <Head>
        <title>Nothinglasts4ever</title>
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 bg-transparent mx-auto text-[#e0e0e0] px-2 lg:px-20 py-4">
        {images.map((image, key) => (
          <div
            className="cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            onClick={() => handleImageClick(image.src)}
          >
            <Image
              key={key}
              src={image.src}
              className="rounded-2xl "
              alt=""
              width={400}
              height={350}
              data-aos="fade-up"
            />
          </div>
        ))}
      </main>

      <Dialog.Root
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <Dialog.Overlay
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={() => {
              setSelectedImage(null);
            }}
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
    </>
  );
}
