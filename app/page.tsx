'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LaunchPage() {
  const [launched, setLaunched] = useState(false);
  const router = useRouter();

  const handleLaunch = () => {
    setLaunched(true);
    setTimeout(() => {
      router.push('/home');
    }, 2000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative overflow-hidden px-6"
      style={{
        backgroundImage: `url('/space-bg.jpg')`, // Make sure the image is in /public
      }}
    >
      {/* 🔝 Top Disclaimer */}
      <div className="absolute top-3 w-full text-xs text-center text-gray-300 z-10">
        <p className="bg-black/60 px-4 py-2 rounded-md inline-block">
          Unofficial Concept Redesign • For educational use only
        </p>
      </div>

      {/* 🔤 Main Heading with Motion */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-10 text-center bg-black/50 px-4 py-2 rounded-xl z-0"
      >
        इसरो (अनौपचारिक अवधारणा स्थल)
        <br />
        <span className="text-orange-400">ISRO (Unofficial Concept Site)</span>
      </motion.h1>

      {/* 🚀 Launch Button with Motion */}
      <motion.button
  onClick={handleLaunch}
  disabled={launched}
  initial={{ x: 0, opacity: 1 }}
  animate={launched ? { x: '150vw', opacity: 0 } : { x: 0, opacity: 1 }}
  transition={{ duration: 2, ease: 'easeInOut' }}
  className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
>
  <span className="rocket-nose w-3 h-3 bg-white rounded-full"></span>
  <span>Explore Concept</span>

  {launched && (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, rotate: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute -right-4 w-4 h-4 bg-yellow-400 rounded-full shadow-xl"
    />
  )}
</motion.button>





      {/* 🔻 Bottom Disclaimer */}
      <div className="absolute bottom-5 w-full text-xs text-center text-gray-300 px-6">
        <p className="bg-black/60 px-4 py-2 rounded-md inline-block">
          This is an unofficial redesign concept created by <strong>Suhani</strong> for educational purposes as part of the <strong>Future Interns Fellowship Program</strong>.
          <span className="block mt-1">
            ISRO® is a registered trademark of the Indian Space Research Organisation. This project is not affiliated with, endorsed by, or connected to ISRO or the Government of India.
          </span>
        </p>
      </div>

      <style jsx>{`
        .rocket-nose {
          box-shadow: 0 0 5px white, 0 0 10px #00bfff;
        }
      `}</style>
    </div>
  );
}
