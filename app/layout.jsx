// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css"; // Import global styles (like Tailwind CSS)
import Navbar from "@/components/Navbar"; // Import Navbar component
import Footer from "@/components/Footer"; // Import Footer component
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProviderWrapper from "@/components/ProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

// Metadata is still recommended for SEO, even in JSX
export const metadata = {
  title: "Simple Next.js Project",
  description: "A basic Next.js project with common sections",
};

// This is the root layout for your application.
// It wraps all pages and is ideal for components that persist across routes,
// like a Navbar or Footer.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the font and antialiased class */}
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        {/* Navbar component */}
        <Navbar />
        <ProviderWrapper>{children}</ProviderWrapper>
        {/* Main content area - children represent the current page */}
        <main className="flex-grow">
        </main>
        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
