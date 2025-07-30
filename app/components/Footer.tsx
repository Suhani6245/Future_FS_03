'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <footer className="bg-black/60 backdrop-blur-sm text-gray-300 text-xs p-4 text-center mt-10">
      <p>
        This is an unofficial redesign concept created by <strong>Suhani</strong> for educational purposes as part of the <strong>Future Interns Fellowship Program</strong>.
      </p>
      <p className="mt-1">
        ISRO® is a registered trademark of the Indian Space Research Organisation.
        This project is not affiliated with, endorsed by, or connected to ISRO or the Government of India.
      </p>
    </footer>
  );
}
