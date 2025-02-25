import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ImageEyes from '@/assets/AlbumArtwork/414676506_1127682261725159_7084449980680345099_n.jpeg';
import PostDesifng from '@/assets/AlbumArtwork/postdesign.jpeg';
import SeeWall from '@/assets/AlbumArtwork/seewall.jpeg';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      duration: 400,
      easing: 'ease',
      once: false,
    });
  }, []);

  const images = [
    { src: ImageEyes, alt: '' },
    { src: SeeWall, alt: '' },
    { src: PostDesifng, alt: '' },
    { src: SeeWall, alt: '' },
    { src: PostDesifng, alt: '' },
    { src: ImageEyes, alt: '' },
    { src: PostDesifng, alt: '' },
    { src: SeeWall, alt: '' },
    { src: PostDesifng, alt: '' },
    { src: PostDesifng, alt: '' },
    { src: SeeWall, alt: '' },
    { src: PostDesifng, alt: '' },
    { src: PostDesifng, alt: '' },
  ];

  return (
    <>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 bg-transparent mx-auto text-[#e0e0e0] px-2 lg:px-20 py-4">
        {images.map((image, key) => (
          <div className="cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
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
    </>
  );
}
