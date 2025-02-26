import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-4 text-center ">
      <div>
        <p>© 2025 Nothinglasts4ever. All rights reserved.</p>
        <p>
          Developed by{' '}
          <Link
            href="https://www.linkedin.com/in/murillou"
            target="_blank"
            rel="noopener noreferrer"
          >
            Murillo Vinícius
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
