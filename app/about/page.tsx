'use client';

import Image from 'next/image';
import { withRouter } from 'next/router';

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white px-6 py-12">
        {/* Vision Slogan */}
<section className="mb-6 max-w-7xl mx-auto bg-gradient-to-r from-orange-900/40 to-zinc-800 rounded-xl p-6 text-center border border-orange-500 shadow-md">
  <h2 className="text-3xl md:text-4xl font-semibold text-orange-300 tracking-wide">
    ⭐Crafted with Code, Inspired by Stars⭐
  </h2>
</section>

      <section className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {/* Logo & Disclaimer */}
        <div className="md:col-span-2 bg-zinc-900 rounded-xl p-6 border border-orange-500 shadow-md flex flex-col items-center justify-center text-center">
          <Image
            src="/logo.jpg"
            alt="ISRO Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <p className="text-xs text-gray-400 italic">
            This is an unofficial redesign of the ISRO website for educational/demo purposes only.
          </p>
        </div>

        {/* About ISRO - spans 4 columns */}
        <div className="md:col-span-4 bg-zinc-900 rounded-xl p-6 border border-orange-500 shadow-md">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">About ISRO</h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            The <mark className="bg-orange-500/20 text-orange-300 px-1 rounded">Indian Space Research Organisation (ISRO)</mark> is India’s national space agency. Founded in 1969, ISRO has grown into one of the world’s most respected space institutions. Known for cost-effective innovation, ISRO has led missions like Chandrayaan (Moon), Mangalyaan (Mars), and commercial satellite launches for many countries.
          </p>
        </div>

        

        {/* Fun Facts */}
        <div className="md:col-span-3 bg-gradient-to-br from-orange-900 to-zinc-800 rounded-xl p-6 border border-orange-500 shadow-md">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Fun Facts About ISRO 🚀</h2>
          <ul className="space-y-2 text-base text-gray-200">
            <li>🎥 <b>Mangalyaan</b> was cheaper than <b>Interstellar</b>.</li>
            <li>📦 Launched <u className="text-base font-bold text-orange-400 mb-4" >104 satellites</u> in one go (a world record!)</li>
            <li>🌕 First Moon mission was <i>Chandrayaan-1</i> in 2008.</li>
            <li>💰 One of the most cost-efficient space agencies in the world.</li>
            <li>📡 Owns a large fleet of remote sensing and communication satellites.</li>
          </ul>
        </div>

        {/* Feedback Form */}
        <div className="md:col-span-3 bg-zinc-900 rounded-xl p-6 border border-orange-500 shadow-md">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Feedback Form</h2>
          <form className="flex flex-col space-y-3 text-sm">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-md bg-black border border-gray-600 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md bg-black border border-gray-600 text-white focus:outline-none"
            />
            <textarea
              rows={3}
              placeholder="Your Message"
              className="px-4 py-2 rounded-md bg-black border border-gray-600 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Slogan */}
      <section className="mt-10 mb-4 bg-zinc-800 rounded-xl p-6 text-center border border-orange-500 shadow-md max-w-7xl mx-auto">
        <h3 className="text-4xl font-semibold text-orange-300 tracking-wide">
          Designing Tomorrow's Space Experience.
        </h3>
      </section>

      {/* Why Redesign + Slideshow Row */}
<section className="mt-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
  {/* Image Slideshow - Wider (3/5 columns) */}
<div className="md:col-span-3 bg-zinc-900 rounded-xl p-6 border border-orange-500 shadow-md flex flex-col justify-between">
  <h2 className="text-xl font-bold text-orange-400 mb-4">ISRO Highlights</h2>
  
  <div className="flex overflow-x-auto space-x-4 mb-3 scrollbar-hide">
    <Image src="/launch1.jpg" alt="launch" width={230} height={160} className="rounded-md flex-shrink-0" />
    <Image src="/launch2.jpg" alt="satellite" width={230} height={160} className="rounded-md flex-shrink-0" />
    <Image src="/images/chandrayaan1.jpg" alt="satellite" width={230} height={160} className="rounded-md flex-shrink-0" />
  </div>

  <p className="text-xs text-gray-400 italic text-center">
    Images shown are AI-generated using Adobe Firefly and are for illustrative purposes only.
  </p>
</div>


  {/* Why Redesign - Narrower (2/5 columns) */}
  <div className="md:col-span-2 bg-zinc-900 rounded-xl p-6 border border-orange-500 shadow-md">
    <h2 className="text-3xl font-bold text-orange-400 mb-3">Why Redesign??</h2>
    <p className="text-gray-300 text-base leading-relaxed">
      The current ISRO website serves a functional purpose, but there's room to enhance the visual experience, interactivity, and accessibility — especially for students and space enthusiasts. This redesign focuses on modern UI/UX, mobile responsiveness, and storytelling that inspires curiosity and pride. <br />
      🔧 This project is part of the <strong>Future Interns Fellowship Program</strong>, aimed at encouraging real-world learning through impactful redesigns.
    </p>
  </div>
</section>

    </main>
  );
}
