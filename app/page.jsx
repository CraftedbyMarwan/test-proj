// app/page.jsx
// This is the root page of your application (/)
import Hero from "@/components/Hero"; // Import Hero component

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Hero component */}
      <Hero />
      {/* You can add more content specific to the home page here */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to our site!</h2>
        <p className="mt-4 text-gray-600">Explore the different sections using the navigation bar.</p>
      </div>
    </section>
  );
}