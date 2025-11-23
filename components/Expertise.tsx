import React from 'react';
import { Database, Search, BarChart3, Box, GraduationCap, Clock, Cloud } from 'lucide-react';
import { ExpertiseItem } from '../types';

const expertise: ExpertiseItem[] = [
  {
    title: "Data Integration",
    description: "Conception de pipelines ETL/ELT robustes. Architecture de flux de données haute performance.",
    icon: Database
  },
  {
    title: "Data Discovery",
    description: "Collecte, modélisation et structuration pour transformer le chaos en information exploitable.",
    icon: Search
  },
  {
    title: "Data Visualization",
    description: "Design de tableaux de bord impactants et storytelling de la donnée pour les décideurs.",
    icon: BarChart3
  },
  {
    title: "Data Warehousing",
    description: "Architecture Data Lake, Data Mart et modernisation d'entrepôts de données (Snowflake).",
    icon: Box
  },
  {
    title: "Formation & Upskilling",
    description: "Transfert de compétences sur les outils leaders : Talend, PowerBI, Qlik, Tableau.",
    icon: GraduationCap
  },
  {
    title: "Temps réel & TMA",
    description: "Gestion de flux continus et externalisation de la maintenance applicative.",
    icon: Clock
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-28 bg-white text-brand-dark relative">
       {/* Decorative subtle grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Expertises <span className="text-brand-accent">Techniques</span></h2>
            <p className="text-lg text-slate-600">
                Nous maîtrisons les technologies qui façonnent le futur de la donnée.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors">
            Voir notre Stack Technique <Cloud className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="group p-8 bg-white rounded-2xl shadow-[0_5px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.2)] border border-slate-100 hover:border-brand-primary/20 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                 <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:rotate-3">
                    <item.icon className="w-7 h-7 text-brand-primary group-hover:text-white" />
                 </div>
                 <span className="text-6xl font-black text-slate-50 group-hover:text-slate-100 transition-colors -mt-4 -mr-4 select-none">
                    {index + 1}
                 </span>
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors font-heading">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow font-medium">
                {item.description}
              </p>
              
              <div className="mt-6 h-1 w-12 bg-slate-200 group-hover:w-full group-hover:bg-brand-accent transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;