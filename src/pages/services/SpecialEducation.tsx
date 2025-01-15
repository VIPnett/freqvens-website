import React from 'react';
import { GraduationCap, Book, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialEducation() {
  const services = [
    {
      icon: <Book className="w-8 h-8 text-teal-600" />,
      title: 'Læringsstøtte',
      description: 'Individuelt tilpasset hjelp for optimal læring og utvikling.'
    },
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: 'Målrettet arbeid',
      description: 'Systematisk tilnærming for å nå definerte læringsmål.'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Foreldresamarbeid',
      description: 'Tett dialog og veiledning for foresatte.'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-teal-600" />,
      title: 'Faglig utvikling',
      description: 'Fokus på mestring og fremgang i alle fag.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Spesialpedagogikk</h1>
          <p className="text-xl text-gray-600 mb-12">
            Vår spesialpedagogiske tjeneste tilbyr faglig støtte og tilrettelegging 
            for barn og unge med ulike læringsbehov. Vi fokuserer på å skape mestring 
            og motivasjon for læring.
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
            <h2 className="text-2xl font-bold mb-6">Våre spesialpedagogiske tjenester</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Vi tilbyr omfattende støtte for ulike læringsbehov, inkludert:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Kartlegging av lærevansker
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Individuell opplæringsplan
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Lese- og skriveopplæring
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Matematikkveiledning
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