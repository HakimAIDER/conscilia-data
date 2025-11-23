import React from 'react';
import { Target, ShieldCheck, Zap, Database } from 'lucide-react';

const reasons = [
  {
    title: "Décisionnel",
    icon: Target,
    text: "Des insights clairs pour des choix stratégiques.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Qualité",
    icon: ShieldCheck,
    text: "Une donnée fiable, unique et vérifiée.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Gouvernance",
    icon: Database,
    text: "Maîtrise totale de votre patrimoine data.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Productivité",
    icon: Zap,
    text: "Automatisation des processus chronophages.",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  }
];

const WhyConsilia: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-gradient-brand rounded-full blur-[80px] opacity-20 animate-pulse-slow"></div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-8 leading-tight">
              Pourquoi <br />
              <span className="gradient-text">Consilia ?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed">
              Nous ne nous contentons pas de stocker vos données. Nous révélons leur potentiel pour créer de la <span className="font-bold text-brand-secondary">valeur</span> tangible et immédiate.
            </p>
            
            <div className="flex items-center gap-6">
                <div className="pl-6 border-l-4 border-brand-secondary">
                    <span className="block text-4xl font-extrabold text-brand-dark">100%</span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Engagement</span>
                </div>
                <div className="pl-6 border-l-4 border-brand-primary">
                    <span className="block text-4xl font-extrabold text-brand-dark">+50</span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Projets Data</span>
                </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group bg-slate-50 hover:bg-white p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-slate-100 cursor-pointer relative overflow-hidden"
              >
                {/* Colored glow on hover */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${reason.bg} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10`}></div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-dark shadow-sm bg-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <reason.icon size={28} strokeWidth={1.5} className={reason.color} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{reason.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyConsilia;