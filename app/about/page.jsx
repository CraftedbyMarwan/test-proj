// app/about/page.jsx
'use client';
import { TypeAnimation } from "react-type-animation";

// This file creates the /about route
export default function AboutPage() {
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <div className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          <p className="mb-4">
            Welcome to our simple Next.js project! This application serves as a basic example
            demonstrating key Next.js features like file-based routing, layouts, and components.
          </p>
          <p className="mb-4">
            We built this project to help developers familiar with React understand the structure
            and workflow of a Next.js application. It includes common sections you'd find
            in many websites.
          </p>
          <p>
            Our goal is to provide a clear and easy-to-follow starting point for your Next.js journey.
            Feel free to explore the code and adapt it for your own projects.
          </p>
        </div>
      </section>
    );
  }