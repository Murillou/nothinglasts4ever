import Image, { StaticImageData } from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import Head from 'next/head';
import { images } from '@/data/home';
import ImageModal from '@/components/Modal/Modal';

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

      <ImageModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}
