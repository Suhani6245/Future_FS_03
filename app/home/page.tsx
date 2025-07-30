'use client';


import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// 🚀 Timeline Data
const timelineData = [
  {
    year: '1969',
    title: 'ISRO is Founded',
    desc: 'The Indian Space Research Organisation was established, marking India’s official entry into the space era.',
    emoji: '🚀',
  },
  {
    year: '1980',
    title: 'First Satellite in Orbit',
    desc: 'Rohini-1 becomes the first Indian satellite placed in orbit by an Indian launch vehicle (SLV-3).',
    emoji: '🛰️',
  },
  {
    year: '2008',
    title: 'Chandrayaan-1',
    desc: 'India’s first mission to the Moon discovered water molecules on the lunar surface.',
    emoji: '🌕',
  },
  {
    year: '2013',
    title: 'Mangalyaan (Mars Orbiter)',
    desc: 'India becomes the first country to reach Mars orbit on its first attempt — at a fraction of global costs.',
    emoji: '🔴',
  },
  {
    year: '2023',
    title: 'Chandrayaan-3',
    desc: 'India becomes the first country to land near the Moon’s south pole, marking a significant step in lunar exploration.',
    emoji: '🚩',
  },
  {
    year: '2024',
    title: 'Aditya-L1 Launch',
    desc: 'India launches its first solar observatory to study the Sun’s corona and solar emissions.',
    emoji: '☀️',
  },
];

// 🛰️ Missions Data
const missions = [
  {
    title: 'Chandrayaan-3',
    image: '/images/chandrayaan3.jpg',
    extraImage: '/images/ch3-launch.png',
    description: 'India’s third lunar mission landed near the Moon’s south pole.',
    details:
      'Chandrayaan-3 made a historic soft landing near the Moon’s south pole in 2023, making India the first country to do so. The mission aimed to demonstrate safe landing, rover mobility, and conduct scientific experiments using its instruments.',
  },
  {
    title: 'Aditya-L1',
    image: '/images/aditya-l1.jpg',
    extraImage: '/images/sun-probe.jpg',
    description: 'India’s first solar observatory launched in 2024.',
    details:
      'Aditya-L1 studies the solar corona and solar flares. Placed in a halo orbit around the Lagrange point L1, it continuously observes the sun to help understand space weather.',
  },
  {
    title: 'Mangalyaan',
    image: '/images/mangalyaan.jpg',
    extraImage: '/images/mgl.jpg',
    description: 'India’s Mars mission successful on first attempt.',
    details:
      'Launched in 2013, Mangalyaan (Mars Orbiter Mission) made India the first country to reach Mars orbit in its maiden attempt. It cost just $74 million and provided valuable data about the Martian surface and atmosphere.',
  },
];

// 📍 Timeline Item
function TimelineItem({ year, title, desc, emoji }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-12 flex gap-4 items-start"
    >
      <div className="text-2xl min-w-[2rem]">{emoji}</div>
      <div>
        <h3 className="text-xl font-semibold text-orange-300">
          {year} – {title}
        </h3>
        <p className="text-gray-300 mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}

// 📦 Modal
function MissionModal({ mission, onClose }: { mission: any; onClose: () => void }) {
  if (!mission) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative bg-black text-white max-h-[90vh] overflow-y-auto w-full max-w-xl rounded-xl p-6 border border-orange-500 shadow-xl">

        {/* ✖ Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-orange-400 hover:text-orange-500 focus:outline-none"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h3 className="text-2xl font-bold text-orange-300 mb-4">{mission.title}</h3>

        <Image
          src={mission.image}
          alt={mission.title}
          width={600}
          height={300}
          className="rounded-md mb-4 w-full h-auto object-cover"
        />

        <p className="text-gray-300">{mission.details}</p>

        {mission.extraImage && (
          <Image
            src={mission.extraImage}
            alt={`${mission.title} extra`}
            width={600}
            height={300}
            className="rounded-md mt-4 w-full h-auto object-cover"
          />
        )}
      </div>
    </div>
  );
}

// 🌐 Home Page
export default function HomePage() {
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    document.title = 'ISRO ReImagined - Home';
  }, []);

  return (
    <main
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('/space-bg.jpg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      {/* 🚀 Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-400">
          Welcome to ISRO ReImagined🚀
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Dive into India’s space journey through a modern lens. Explore missions, launches, and much more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/missions"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 w-full sm:w-auto text-center"
          >
            Explore Missions
          </Link>
          <Link
            href="/launches"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 w-full sm:w-auto text-center"
          >
            View Launches
          </Link>
        </div>
      </section>

      {/* 🛰️ About ISRO */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center bg-black/60 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">About ISRO</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The Indian Space Research Organisation (ISRO) is India’s national space agency, known for its cost-effective innovations and groundbreaking missions like Chandrayaan, Mangalyaan, and Aditya-L1. This concept site is built to present ISRO’s achievements in a modern, engaging, and educational format.
        </p>
      </section>

      {/* 📅 Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-12 text-center">
          History & Major Achievements
        </h2>
        <div className="relative border-l border-orange-500 pl-6">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* 🧠 Missions Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-12 text-center">Key Missions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, idx) => (
            <div
              key={idx}
              className="bg-black/60 border border-orange-500 rounded-xl p-4 backdrop-blur-sm"
            >
              <Image
                src={mission.image}
                alt={mission.title}
                width={500}
                height={300}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-orange-300">{mission.title}</h3>
              <p className="text-gray-300 mt-2">{mission.description}</p>
              <button
                onClick={() => setSelectedMission(mission)}
                className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedMission && (
        <MissionModal mission={selectedMission} onClose={() => setSelectedMission(null)} />
      )}
    </main>
  );
}
