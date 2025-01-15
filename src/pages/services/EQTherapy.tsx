import React from 'react';
import { Brain, Heart, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EQTherapy() {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: 'Økt selvbevissthet',
      description: 'Lær å forstå dine egne følelser og reaksjonsmønstre bedre.'
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: 'Bedre relasjoner',
      description: 'Utvikle sterkere og mer meningsfulle forhold til andre.'
    },
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: 'Målrettet utvikling',
      description: 'Konkrete verktøy for personlig vekst og emosjonell mestring.'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Sosial kompetanse',
      description: 'Forbedre din evne til å navigere sosiale situasjoner.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">EQ Terapi</h1>
          <p className="text-xl text-gray-600 mb-12">
            Emosjonell intelligens er nøkkelen til bedre relasjoner, økt selvforståelse og 
            personlig vekst. Gjennom EQ terapi hjelper vi deg med å utvikle disse viktige ferdighetene.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Hvordan foregår EQ terapi?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                EQ terapi er en målrettet prosess der vi jobber systematisk med å utvikle 
                din emosjonelle intelligens. Gjennom samtaler, øvelser og praktiske verktøy 
                vil du lære å:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Gjenkjenne og forstå dine egne følelser
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Regulere og håndtere sterke følelser
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Utvikle større empati og forståelse for andre
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Forbedre kommunikasjon og konfliktløsning
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