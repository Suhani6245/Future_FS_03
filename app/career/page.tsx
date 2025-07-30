'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const introLines = [
  "At ISRO, innovation is limitless.",
  "Every role contributes to India's space journey.",
  "We believe in empowering the curious.",
  "We dream big, and work hard.",
  "Join the movement. Join the mission.",
];

const roles = [
  {
    title: "Aerospace Engineer",
    description:
      "Designs and tests aircraft, satellites, and launch vehicles. Ensures structures can handle extreme space conditions.",
  },
  {
    title: "Satellite Communication Engineer",
    description:
      "Manages development and operation of satellite systems ensuring smooth communication and data transmission.",
  },
  {
    title: "Mission Director",
    description:
      "Oversees planning and execution of space missions. Coordinates teams and ensures success of critical launches.",
  },
  {
    title: "Propulsion Engineer",
    description:
      "Works on the rocket engines that power launch vehicles. Develops efficient and reliable propulsion systems.",
  },
  {
    title: "Ground Systems Operator",
    description:
      "Monitors and controls satellite operations from Earth. Handles data acquisition and ground station interfaces.",
  },
  {
    title: "Astrophysicist",
    description:
      "Researches celestial phenomena. Helps design instruments and interpret cosmic data for scientific missions.",
  },
];

export default function CareerPage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showFinalHeading, setShowFinalHeading] = useState(false);
  const [showExploreButton, setShowExploreButton] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (currentLine < introLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 1400);
      return () => clearTimeout(timer);
    } else {
      const finalDelay = setTimeout(() => {
        setShowFinalHeading(true);
        setShowExploreButton(true);
      }, 1000);
      return () => clearTimeout(finalDelay);
    }
  }, [currentLine]);

  const skipIntro = () => {
    setCurrentLine(introLines.length);
    setShowFinalHeading(true);
    setShowExploreButton(true);
  };

  return (
    <main className="min-h-screen text-white px-6 py-12 flex flex-col items-center justify-start overflow-x-hidden relative">
      {/* Skip Button */}
      {!showFinalHeading && (
        <button
          onClick={skipIntro}
          className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 transition z-10"
        >
          Skip
        </button>
      )}

      {/* Animated Intro Lines */}
      {introLines.slice(0, currentLine).map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl font-semibold mb-4 text-center"
        >
          {line}
        </motion.div>
      ))}

      {/* Final Intro Heading */}
      {showFinalHeading && (
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-orange-400 my-10 text-center"
        >
          Explore. Dream. Discover.
        </motion.h1>
      )}

      {/* Explore Jobs Button */}
      {showExploreButton && !showRoles && (
        <button
          onClick={() => setShowRoles(true)}
          className="mt-6 bg-orange-500 text-white px-6 py-3 text-lg rounded hover:bg-orange-600 transition"
        >
          Explore Jobs
        </button>
      )}

      {/* Roles Section */}
      {showRoles && (
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 w-full max-w-5xl"
        >
          <h2 className="text-3xl font-bold text-orange-300 mb-6 text-center">
            Jobs at ISRO
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="bg-zinc-800 border border-orange-500 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-orange-400 mb-2">{role.title}</h3>
                <p className="text-gray-300 text-sm">{role.description}</p>
              </div>
            ))}
          </div>

          {/* Apply Button */}
          {!showForm && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-500 text-white px-6 py-3 text-lg rounded hover:bg-orange-600 transition"
              >
                Apply
              </button>
            </div>
          )}
        </motion.section>
      )}

      {/* Feedback Form */}
      {showForm && (
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 w-full max-w-xl bg-zinc-800 border border-orange-500 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-orange-400 mb-4">
            Want to apply? Fill the form.
          </h3>
          <form className="flex flex-col space-y-4 text-sm">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-md bg-black border border-gray-600 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md bg-black border border-gray-600 text-white"
            />
            <select className="px-4 py-2 rounded-md bg-black border border-gray-600 text-white">
              <option>Select Job Role</option>
              {roles.map((role, idx) => (
                <option key={idx}>{role.title}</option>
              ))}
            </select>
            <textarea
              rows={4}
              placeholder="Why are you interested in this role?"
              className="px-4 py-2 rounded-md bg-black border border-gray-600 text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Submit Application
            </button>
          </form>
        </motion.section>
      )}
    </main>
  );
}
