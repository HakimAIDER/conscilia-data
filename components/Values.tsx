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
    <section id="values" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-slate-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-sans">
            ADN Consilia-Data
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Nos Piliers de <span className="text-brand-primary">Réussite</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="h-full p-10 bg-gradient-to-b from-slate-50 to-slate-100 rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 border border-slate-200/60 flex flex-col items-center text-center">
                
                {/* Icon Circle */}
                <div className="w-24 h-24 bg-brand-dark rounded-full flex items-center justify-center mb-8 shadow-xl shadow-brand-dark/20 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                   {/* Gradient sheen on icon bg */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <value.icon className="w-10 h-10 text-white relative z-10" strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading group-hover:text-brand-primary transition-colors">
                    {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {value.description}
                </p>

                {/* Decorative bottom line */}
                <div className="mt-8 w-12 h-1 bg-slate-200 rounded-full group-hover:w-24 group-hover:bg-brand-secondary transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;