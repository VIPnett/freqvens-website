import React from 'react';
import { Users, Award, Heart, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: 'Mennesket i fokus',
      description: 'Vi ser hele mennesket og tilpasser våre tjenester til individuelle behov og forutsetninger.'
    },
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      title: 'Faglig ekspertise',
      description: 'Våre terapeuter har solid utdanning og lang erfaring innen sine fagfelt.'
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: 'Empati og forståelse',
      description: 'Vi møter alle med respekt, varme og en genuin interesse for deres situasjon.'
    },
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: 'Målrettet arbeid',
      description: 'Vi jobber systematisk mot definerte mål i samarbeid med våre klienter.'
    }
  ];

  const team = [
    {
      name: 'Anna Berg',
      title: 'EQ Terapeut og Grunnlegger',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
      description: 'Anna har over 15 års erfaring med EQ-terapi og parterapi.'
    },
    {
      name: 'Erik Hansen',
      title: 'Spesialpedagog',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80',
      description: 'Erik er spesialist på lærevansker og tilpasset opplæring.'
    },
    {
      name: 'Maria Olsen',
      title: 'Barne- og Ungdomsterapeut',
      image: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&q=80',
      description: 'Maria har spesialkompetanse innen barn og unges psykiske helse.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Om Freqvens</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Freqvens ble grunnlagt med en visjon om å gjøre emosjonell intelligens og personlig 
            utvikling tilgjengelig for alle. Vi tror på at økt selvforståelse og bedre 
            følelseshåndtering er nøkkelen til et mer tilfredsstillende liv.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Våre verdier</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Møt teamet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-teal-600 mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}