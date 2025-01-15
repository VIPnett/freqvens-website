import React from 'react';
import { Heart, Users, Brain, Sparkles, Building, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Brain className="text-teal-600 w-12 h-12" />,
      title: 'EQ Terapi',
      description: 'Utvikle din emosjonelle intelligens og få bedre selvforståelse gjennom målrettet EQ-terapi. Vi hjelper deg med å identifisere, forstå og håndtere følelser på en konstruktiv måte.',
      benefits: ['Økt selvbevissthet', 'Bedre følelsesregulering', 'Styrket empati', 'Forbedrede relasjoner'],
      link: '/tjenester/eq-terapi'
    },
    {
      icon: <Heart className="text-teal-600 w-12 h-12" />,
      title: 'Parterapi',
      description: 'Få hjelp til å styrke forholdet deres gjennom profesjonell parterapi. Vi fokuserer på kommunikasjon, forståelse og gjensidig respekt for å bygge et sterkere forhold.',
      benefits: ['Bedre kommunikasjon', 'Konfliktløsning', 'Økt intimitet', 'Felles målsetting'],
      link: '/tjenester/parterapi'
    },
    {
      icon: <Sparkles className="text-teal-600 w-12 h-12" />,
      title: 'Barn og Unge',
      description: 'Spesialtilpasset terapi og veiledning for barn og unge. Vi hjelper med å bygge selvtillit, håndtere følelser og utvikle sosiale ferdigheter.',
      benefits: ['Styrket selvbilde', 'Sosial mestring', 'Følelseshåndtering', 'Bedre skolehverdag'],
      link: '/tjenester/barn-og-unge'
    },
    {
      icon: <Building className="text-teal-600 w-12 h-12" />,
      title: 'Kommunale Tjenester',
      description: 'Vi tilbyr skreddersydde løsninger for kommuner som ønsker å styrke sitt psykiske helsetilbud. Våre tjenester kan integreres i eksisterende helsetilbud.',
      benefits: ['Fleksible løsninger', 'Kompetanseheving', 'Forebyggende arbeid', 'Dokumenterte resultater'],
      link: '/for-kommuner'
    },
    {
      icon: <GraduationCap className="text-teal-600 w-12 h-12" />,
      title: 'Spesialpedagogikk',
      description: 'Faglig støtte og tilrettelegging for optimal læring. Vi hjelper med å identifisere utfordringer og utvikle strategier for bedre læring.',
      benefits: ['Individuell tilpasning', 'Læringsstrategier', 'Mestringsfølelse', 'Faglig utvikling'],
      link: '/tjenester/spesialpedagogikk'
    },
    {
      icon: <Users className="text-teal-600 w-12 h-12" />,
      title: 'Rådgivning',
      description: 'Profesjonell veiledning for personlig utvikling og livsmestring. Vi hjelper deg med å sette mål og finne veien til et mer tilfredsstillende liv.',
      benefits: ['Personlig vekst', 'Karriereveiledning', 'Livsstilsendring', 'Stressmestring'],
      link: '/tjenester/radgivning'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Våre Tjenester</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Vi tilbyr et bredt spekter av tjenester innen terapi, rådgivning og personlig utvikling. 
          Alle våre tjenester er basert på dokumenterte metoder og tilpasses dine individuelle behov.
        </p>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div>
                    <h3 className="font-semibold mb-3">Dette får du:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/3 flex justify-center items-center">
                  <Link 
                    to={service.link}
                    className="w-full bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors text-center"
                  >
                    Les mer om {service.title.toLowerCase()}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}