import React from 'react';
import { Heart, MessageCircle, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CouplesTherapy() {
  const areas = [
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-600" />,
      title: 'Kommunikasjon',
      description: 'Lær effektive kommunikasjonsteknikker for bedre forståelse og mindre konflikter.'
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: 'Intimitet',
      description: 'Styrk den emosjonelle og fysiske nærheten i forholdet.'
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: 'Tillit',
      description: 'Bygg eller gjenoppbygg tillit gjennom åpenhet og forståelse.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-600" />,
      title: 'Fremtidsplaner',
      description: 'Utvikle felles mål og visjoner for fremtiden sammen.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Parterapi</h1>
          <p className="text-xl text-gray-600 mb-12">
            Alle forhold møter utfordringer. Gjennom parterapi får dere verktøyene og 
            støtten dere trenger for å styrke forholdet og bygge en sterkere fremtid sammen.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  {area.icon}
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Hvordan kan parterapi hjelpe?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                I parterapi jobber vi sammen for å identifisere utfordringer og finne 
                konstruktive løsninger. Noen av områdene vi kan fokusere på:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Forbedre kommunikasjon og forståelse
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Håndtere konflikter på en konstruktiv måte
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Styrke intimitet og nærhet
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Bygge tillit og trygghet
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link to="/bestill" className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors inline-block">
              Book en samtale
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}