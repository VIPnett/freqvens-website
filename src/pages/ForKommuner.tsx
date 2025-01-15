import React from 'react';
import { Building, Users, BarChart, FileCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForKommuner() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Kompetent fagpersonell',
      description: 'Tilgang til kvalifiserte terapeuter og spesialpedagoger med bred erfaring.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-teal-600" />,
      title: 'Dokumenterte resultater',
      description: 'Systematisk evaluering og rapportering av behandlingseffekt.'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-teal-600" />,
      title: 'Fleksible løsninger',
      description: 'Skreddersydde tjenester tilpasset kommunens behov og ressurser.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Building className="w-16 h-16 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">For kommuner</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi tilbyr skreddersydde løsninger for kommuner som ønsker å styrke sitt 
            psykiske helsetilbud. Våre tjenester kan integreres i eksisterende 
            helsetilbud eller etableres som selvstendige tiltak.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Kompetanseheving</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                Kurs og workshops for ansatte
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                Veiledning av fagpersonell
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                Implementering av EQ-baserte metoder
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Behandlingstilbud</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                Individuell terapi
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                Gruppeterapi
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                Spesialpedagogisk oppfølging
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Fordeler for kommunen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interessert i å vite mer?</h2>
          <p className="mb-6">
            Ta kontakt for en uforpliktende samtale om hvordan vi kan bistå din kommune.
          </p>
          <Link to="/kontakt" className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto inline-flex">
            <Phone size={20} />
            Kontakt oss
          </Link>
        </div>
      </div>
    </div>
  );
}