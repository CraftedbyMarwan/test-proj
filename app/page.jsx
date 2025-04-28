// app/page.jsx
// This is the root page of your application (/)
'use client';
import Hero from "@/components/Hero";
import { motion } from "framer-motion"; // Import motion from framer-motion
import TypeIt from "typeit-react";

export default function Home() { // Corrected export syntax
  return (
      <section className="container mx-auto px-4 py-8">
        {/* Hero component */}
        <Hero />

        <div className="App">
          <TypeIt className='text-4xl'>Marwan Mohammed</TypeIt>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below
          animate={{ opacity: 1, y: 0 }} // Animate to state: visible and in place
          transition={{ duration: 1.5 }} // Transition duration
        >
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to our site!</h2>
          <p className="mt-4 text-gray-600">Explore the different sections using the navigation bar.</p>
        </motion.div>
      </section>

  );
}