// components/Footer.jsx
// Can be a Server Component
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 p-4 mt-8">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} My Next App. All rights reserved.</p>
          {/* You can add more footer links or information here */}
        </div>
      </footer>
    );
  }