import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { images } from '@/data/personalWork';
import { useEffect } from 'react';
import Head from 'next/head';

export default function PersonalWork() {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      duration: 400,
      easing: 'ease',
      once: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Personal Work - Nothinglasts4ever</title>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 mx-auto text-[#e0e0e0] px-2 lg:px-20 py-4">
        {images.map((image, key) => (
          <div className="cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Image
              key={key}
              src={image}
              alt=""
              width={400}
              height={350}
              className="rounded-2xl"
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>
    </>
  );
}
