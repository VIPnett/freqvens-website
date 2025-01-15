import React from 'react';
import { Sparkles, Shield, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function YouthTherapy() {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: 'Emosjonell støtte',
      description: 'Hjelp til å forstå og håndtere følelser på en sunn måte.'
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: 'Trygt miljø',
      description: 'Et støttende og forståelsesfullt rom for å uttrykke seg.'
    },
    {
      icon: <Star className="w-8 h-8 text-teal-600" />,
      title: 'Mestringsstrategier',
      description: 'Praktiske verktøy for å takle hverdagens utfordringer.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-600" />,
      title: 'Personlig vekst',
      description: 'Støtte til å utvikle selvtillit og sosiale ferdigheter.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terapi for barn og unge</h1>
          <p className="text-xl text-gray-600 mb-12">
            Vi tilbyr spesialtilpasset støtte og veiledning for barn og unge som møter 
            utfordringer i hverdagen. Vår tilnærming er alltid tilpasset den enkeltes 
            alder og behov.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Hvordan vi kan hjelpe</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Vårt team har bred erfaring med å hjelpe barn og unge med ulike 
                utfordringer, inkludert:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Angst og bekymringer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Sosiale utfordringer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Skolerelaterte problemer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Selvtillit og selvbilde
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