'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideOnRoutes = ['/']; // Landing page

  const shouldHideNavFooter = hideOnRoutes.includes(pathname);

  return (
    <>
      {!shouldHideNavFooter && <Navbar />}
      {children}
      {!shouldHideNavFooter && <Footer />}
    </>
  );
}
