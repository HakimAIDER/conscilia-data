import React from 'react';
import { ShieldCheck, Trophy, HeartHandshake } from 'lucide-react';
import { ValueItem } from '../types';

const values: ValueItem[] = [
  {
    title: "Intégrité",
    description: "La confiance est notre monnaie. Nous cultivons une éthique irréprochable avec nos équipes et partenaires.",
    icon: ShieldCheck
  },
  {
    title: "Excellence Tech",
    description: "Nous visons la perfection. Collaboration avec les meilleurs talents pour des livrables de haute précision.",
    icon: Trophy
  },
  {
    title: "Esprit de Partage",
    description: "Le savoir se multiplie quand il est partagé. L'entraide est au cœur de notre ADN collectif.",
    icon: HeartHandshake
  }
];

const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-brand-card relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-highlight/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-highlight font-bold tracking-[0.2em] uppercase text-xs mb-4 block">ADN Consilia-Data</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Nos Piliers de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight to-yellow-200">Réussite</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-full p-8 md:p-10 border border-white/5 hover:border-brand-highlight/30 rounded-3xl transition-all duration-300 flex flex-col items-center text-center bg-brand-dark/30 backdrop-blur-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-dark to-brand-card rounded-full flex items-center justify-center mb-8 shadow-xl border border-white/5 group-hover:scale-110 group-hover:shadow-brand-highlight/20 transition-all duration-300">
                  <value.icon className="w-9 h-9 text-gray-400 group-hover:text-brand-highlight transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;