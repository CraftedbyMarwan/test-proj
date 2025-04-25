// components/Hero.jsx
// Can be a Server Component as it's likely static content
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 text-center rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-xl mb-8">Your journey starts here. Discover more about us.</p>
      {/* Example Call to Action Button */}
      <Link href="/about" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
        Learn More
      </Link>
    </section>
  );
}
