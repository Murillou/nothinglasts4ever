import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
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
    <div
      data-aos="fade-in"
      className="flex flex-col items-center justify-center gap-4 min-h-[calc(100vh-10rem)] bg-transparent text-[#e0e0e0]"
    >
      <h1 className="text-3xl font-medium text-[#e0e0e0]">Contact me</h1>

      <div className="space-y-4 text-center">
        <p>
          Email: <a>johndoe@example.com</a>
        </p>

        <p>Instagram: @nothin.last4ever</p>

        <p>Phone: +xx (xx) xxxxx-xxxx</p>
      </div>
    </div>
  );
}
