'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Hide navbar (and disclaimer) on landing page
  if (pathname === '/') return null;

  return (
    <>
      {/* 🔸 Disclaimer Banner */}
      <div className="w-full bg-orange-500 text-white text-sm py-2 px-4 text-center animate-pulse">
        This is a reimagined concept website for ISRO — not the official site.
      </div>

      {/* 🔹 Navbar */}
      <nav className="w-full px-6 py-4 bg-black/50 backdrop-blur-sm text-white flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="text-xl font-bold tracking-wide">
          ISRO ReImagined
        </h1>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/home" className="hover:text-orange-400">Home</Link></li>
          <li><Link href="/missions" className="hover:text-orange-400">Missions</Link></li>
          <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
          <li><Link href="/career" className="hover:text-orange-400">Career</Link></li>
        </ul>
      </nav>
    </>
  );
}
