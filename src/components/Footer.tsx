import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Brain size={32} className="text-teal-500" />
              <span className="text-2xl font-bold text-white">Freqvens</span>
            </Link>
            <p className="text-sm">
              Vi hjelper mennesker med å utvikle emosjonell intelligens og oppnå bedre livskvalitet 
              gjennom profesjonell terapi og veiledning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Raske lenker</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tjenester" className="hover:text-teal-500 transition-colors">Tjenester</Link>
              </li>
              <li>
                <Link to="/om-oss" className="hover:text-teal-500 transition-colors">Om oss</Link>
              </li>
              <li>
                <Link to="/for-kommuner" className="hover:text-teal-500 transition-colors">For kommuner</Link>
              </li>
              <li>
                <Link to="/bestill" className="hover:text-teal-500 transition-colors">Book en samtale</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt oss</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+47 123 45 678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>kontakt@freqvens.no</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Sentrumsveien 1, 0000 Oslo</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Åpningstider</h3>
            <ul className="space-y-2">
              <li>Mandag - Fredag: 09:00 - 17:00</li>
              <li>Lørdag: Etter avtale</li>
              <li>Søndag: Stengt</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} Freqvens. Alle rettigheter reservert.</p>
            <div className="flex gap-6">
              <Link to="/personvern" className="hover:text-teal-500 transition-colors">
                Personvernerklæring
              </Link>
              <Link to="/cookies" className="hover:text-teal-500 transition-colors">
                Cookies
              </Link>
              <Link to="/vilkar" className="hover:text-teal-500 transition-colors">
                Vilkår
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}