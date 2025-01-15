import React from 'react';
import { Users, Target, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Counseling() {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: 'Personlig vekst',
      description: 'Få støtte til å nå dine personlige mål og utvikle ditt potensial.'
    },
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: 'Karriereveiledning',
      description: 'Veiledning for karrierevalg og profesjonell utvikling.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-600" />,
      title: 'Livsstilsendring',
      description: 'Støtte til å gjennomføre positive endringer i livet ditt.'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Stressmestring',
      description: 'Lær effektive teknikker for å håndtere stress og press.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Rådgivning</h1>
          <p className="text-xl text-gray-600 mb-12">
            Våre erfarne rådgivere hjelper deg med å navigere livets utfordringer og 
            finne veien til personlig vekst og utvikling. Vi tilbyr profesjonell 
            veiledning skreddersydd dine behov.
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
                Vår tilnærming til rådgivning er helhetlig og fokuserer på:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Kartlegging av dine behov og mål
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Utvikling av konkrete handlingsplaner
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Støtte gjennom endringsprosesser
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Oppfølging og evaluering av fremgang
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