import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-stone-100 px-6 md:px-24 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold antialiased">
          <a href="#">Dibyajyoti Pramanick</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex gap-8 text-gray-600 font-medium antialiased">
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Projects
          </a>
          <a href="#" className="hover:text-black">
            Skills
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-4 gap-4 text-stone-500 font-medium md:hidden antialiased">
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Projects
          </a>
          <a href="#" className="hover:text-black">
            Skills
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
