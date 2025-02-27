import '@/styles/globals.css';

import { ImageExpandProvider } from '@/context/ImageExpandContext';
import type { AppProps } from 'next/app';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ImageExpandProvider>
        <Component {...pageProps} />
      </ImageExpandProvider>
      <Footer />
    </>
  );
}
