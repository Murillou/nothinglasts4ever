import ImageModal from '@/components/Modal/Modal';
import { images } from '@/data/albumArtwork';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

export default function AlbumArtworkPage() {
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

  function handleClickImage(src: StaticImageData) {
    setSelectedImage(src);
  }

  return (
    <>
      <Head>
        <title>Album Artwork - Nothinglasts4ever</title>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 mx-auto text-[#e0e0e0] px-2 lg:px-20 py-4">
        {images.map((image, key) => (
          <div
            key={key}
            className="cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            onClick={() => handleClickImage(image)}
          >
            <Image
              src={image}
              alt=""
              width={400}
              height={350}
              className="rounded-2xl "
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>

      <ImageModal
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
    </>
  );
}
