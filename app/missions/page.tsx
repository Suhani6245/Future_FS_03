'use client';

import { useState } from 'react';
import Image from 'next/image';

const missions = [
  {
    id: 1,
    title: 'Chandrayaan-3',
    category: 'Ongoing',
    image: '/images/chandrayaan3.jpg',
    summary: 'India’s third lunar mission to the Moon’s south pole.',
    details: 'Chandrayaan-3 aims to demonstrate safe and soft landing on the lunar surface. Launched in 2023, it features a lander and a rover.',
  },
  {
    id: 2,
    title: 'Gaganyaan',
    category: 'Scheduled',
    image: '/images/gaganyaan.png',
    summary: 'India’s first human spaceflight mission.',
    details: 'Gaganyaan will carry a crew of 2–3 astronauts to Low Earth Orbit for up to 7 days. It is expected to launch soon, marking a historic milestone for ISRO.',
  },
  {
    id: 3,
    title: 'Mangalyaan',
    category: 'Completed',
    image: '/images/mangalyaan.jpg',
    summary: 'India’s first interplanetary mission to Mars.',
    details: 'Launched in 2013, Mangalyaan made India the first Asian country to reach Mars orbit and the first nation to succeed on its first attempt.',
  },
  {
    id: 4,
    title: 'RISAT-2BR1',
    category: 'Completed',
    image: '/images/risat.jpg',
    summary: 'Radar imaging satellite for all-weather surveillance.',
    details: 'RISAT-2BR1 provides high-resolution images under all weather conditions for agriculture, forestry, and disaster management.',
  },
  {
    id: 5,
    title: 'Aditya-L1',
    category: 'Ongoing',
    image: '/images/aditya-l1.jpg',
    summary: 'India’s first solar observatory mission.',
    details: 'Aditya-L1 will study the Sun from Lagrangian point 1. It will provide key insights into solar activities and space weather.',
  },
  {
    id: 6,
    title: 'PSLV-C37',
    category: 'Completed',
    image: '/images/pslv.jpg',
    summary: 'Record-setting mission with 104 satellites.',
    details: 'In 2017, PSLV-C37 launched 104 satellites in a single mission, creating a world record. Most satellites were international.',
  },
  {
    id: 7,
    title: 'Chandrayaan-1',
    category: 'Completed',
    image: '/images/chandrayaan1.jpg',
    summary: 'India’s first lunar mission.',
    details: 'Launched in 2008, Chandrayaan-1 confirmed the presence of water molecules on the Moon. It also provided high-resolution lunar images.',
  },
  {
    id: 8,
    title: 'INSAT-3DR',
    category: 'Completed',
    image: '/images/insat.jpeg',
    summary: 'Advanced meteorological satellite.',
    details: 'INSAT-3DR enhances weather forecasting and storm tracking. It provides imagery and atmospheric data to Indian Meteorological Department.',
  },
  {
    id: 9,
    title: 'GSAT-29',
    category: 'Completed',
    image: '/images/gsat29.jpg',
    summary: 'High-throughput communication satellite.',
    details: 'GSAT-29 provides high-speed internet access to remote areas and supports Digital India initiatives. Launched by GSLV Mk III.',
  },
  {
    id: 10,
    title: 'Cartosat-3',
    category: 'Completed',
    image: '/images/cartosat3.jpg',
    summary: 'High-resolution earth observation satellite.',
    details: 'Cartosat-3 offers the highest-ever spatial resolution in ISRO’s satellites and is used for mapping, planning, and monitoring.',
  },
  {
    id: 11,
    title: 'Shukrayaan-1',
    category: 'Scheduled',
    image: '/images/shukrayaan.jpg',
    summary: 'India’s upcoming Venus exploration mission.',
    details: 'Shukrayaan-1 is expected to study Venus’s atmosphere, surface, and interactions with the solar wind, furthering planetary science.',
  },
  {
    id: 12,
    title: 'Astrosat',
    category: 'Completed',
    image: '/images/astrosat.jpg',
    summary: 'India’s first multi-wavelength space telescope.',
    details: 'Launched in 2015, Astrosat observes celestial objects in visible, UV, and X-ray wavelengths, aiding astronomical discoveries.',
  },
];

// Modal Component
function MissionModal({ mission, onClose, onNext, onPrev }) {
  if (!mission) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative bg-black text-white max-h-[90vh] overflow-y-auto w-full max-w-xl rounded-xl p-6 border border-orange-500 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-orange-400 hover:text-orange-500 focus:outline-none"
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold text-orange-300 mb-1">{mission.title}</h3>
        <p className="text-sm text-orange-400 mb-4">[{mission.category}]</p>

        <Image
          src={mission.image}
          alt={mission.title}
          width={600}
          height={300}
          className="rounded-md mb-4 w-full h-auto object-cover"
        />

        <p className="text-gray-300 mb-6">{mission.details}</p>

        <div className="flex justify-between">
          <button
            onClick={onPrev}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white"
          >
            ⬅ Previous
          </button>
          <button
            onClick={onNext}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white"
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Page
export default function MissionsPage() {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(null);

  const openModal = (index) => setSelectedMissionIndex(index);
  const closeModal = () => setSelectedMissionIndex(null);
  const nextModal = () =>
    setSelectedMissionIndex((prev) => (prev + 1) % missions.length);
  const prevModal = () =>
    setSelectedMissionIndex((prev) => (prev - 1 + missions.length) % missions.length);

  const selectedMission =
    selectedMissionIndex !== null ? missions[selectedMissionIndex] : null;

  return (
    <main className="min-h-screen w-full text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-orange-400 mb-10 text-center">
        ISRO Missions 🚀
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <div
            key={mission.id}
            onClick={() => openModal(index)}
            className="relative bg-black/60 p-4 rounded-xl border border-orange-500 shadow-md hover:shadow-orange-500/40 hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer"
          >
            <span className="absolute top-3 right-4 bg-orange-600 text-xs px-2 py-1 rounded-full font-semibold text-white">
              {mission.category}
            </span>

            <Image
              src={mission.image}
              alt={mission.title}
              width={400}
              height={200}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold text-orange-300 mb-2">{mission.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{mission.summary}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md">
              Explore Mission
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMission && (
        <MissionModal
          mission={selectedMission}
          onClose={closeModal}
          onNext={nextModal}
          onPrev={prevModal}
        />
      )}
    </main>
  );
}
