import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <Brain size={32} className="text-teal-600" />
            <span className="text-2xl font-bold">Freqvens</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/tjenester" className="text-gray-700 hover:text-teal-600 transition-colors">Tjenester</Link>
            <Link to="/om-oss" className="text-gray-700 hover:text-teal-600 transition-colors">Om oss</Link>
            <Link to="/for-kommuner" className="text-gray-700 hover:text-teal-600 transition-colors">For kommuner</Link>
            <Link to="/kontakt" className="text-gray-700 hover:text-teal-600 transition-colors">Kontakt</Link>
            <Link to="/bestill" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
              Book en samtale
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <Link to="/tjenester" className="text-gray-700 hover:text-teal-600 transition-colors">Tjenester</Link>
              <Link to="/om-oss" className="text-gray-700 hover:text-teal-600 transition-colors">Om oss</Link>
              <Link to="/for-kommuner" className="text-gray-700 hover:text-teal-600 transition-colors">For kommuner</Link>
              <Link to="/kontakt" className="text-gray-700 hover:text-teal-600 transition-colors">Kontakt</Link>
              <Link to="/bestill" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors text-center">
                Book en samtale
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}