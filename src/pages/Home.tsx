import React from 'react';
import { Heart, Users, Brain, Sparkles, Building, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80"
            alt="Peaceful setting"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Freqvens</h1>
            <p className="text-xl mb-8">Din partner for personlig vekst og emosjonell intelligens</p>
            <Link to="/bestill" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors inline-flex">
              Book en samtale <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Våre tjenester</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Heart className="text-teal-600" />}
              title="Parterapi"
              description="Styrk deres forhold og kommunikasjon gjennom profesjonell veiledning"
              link="/tjenester/parterapi"
            />
            <ServiceCard 
              icon={<Brain className="text-teal-600" />}
              title="EQ Terapi"
              description="Utvikle emosjonell intelligens og selvforståelse"
              link="/tjenester/eq-terapi"
            />
            <ServiceCard 
              icon={<Sparkles className="text-teal-600" />}
              title="Barn og Unge"
              description="Spesialtilpasset støtte for unge sinn i utvikling"
              link="/tjenester/barn-og-unge"
            />
            <ServiceCard 
              icon={<Building className="text-teal-600" />}
              title="Kommunale Tjenester"
              description="Samarbeid med kommuner for bedre psykisk helse"
              link="/for-kommuner"
            />
            <ServiceCard 
              icon={<GraduationCap className="text-teal-600" />}
              title="Spesialpedagogikk"
              description="Faglig støtte og tilrettelegging for læring"
              link="/tjenester/spesialpedagogikk"
            />
            <ServiceCard 
              icon={<Users className="text-teal-600" />}
              title="Rådgivning"
              description="Profesjonell veiledning for personlig utvikling"
              link="/tjenester/radgivning"
            />
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* ... */}
    </div>
  );
}