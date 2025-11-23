import React, { useState, useEffect } from 'react';
import { UseCaseItem } from '../types';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const cases: UseCaseItem[] = [
  {
    title: "Optimisation Supply Chain",
    sector: "Retail",
    problem: "Sur-stockage coûteux et ruptures fréquentes.",
    solution: "Algorithme prédictif Azure/PowerBI.",
    result: "de réduction des coûts",
    resultValue: "-15%"
  },
  {
    title: "Reporting Réglementaire",
    sector: "Banque",
    problem: "Traitement manuel lent et erreurs humaines.",
    solution: "Automatisation ETL via Talend & Snowflake.",
    result: "de temps de traitement",
    resultValue: "-80%"
  },
  {
    title: "Maintenance Prédictive",
    sector: "Industrie",
    problem: "Arrêts non planifiés des lignes de production.",
    solution: "Architecture IoT temps réel & Alerting.",
    result: "de disponibilité",
    resultValue: "+20%"
  },
  {
    title: "Customer 360",
    sector: "Luxe",
    problem: "Données clients silotées par canal.",
    solution: "Réconciliation DataHub & segmentation IA.",
    result: "d'upsell",
    resultValue: "+12%"
  }
];

const UseCases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <section id="use-cases" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-20 left-0 text-[20vw] font-black text-slate-200/40 leading-none select-none pointer-events-none whitespace-nowrap opacity-30">
        IMPACT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Impact <span className="text-brand-primary">Mesurable</span></h2>
                <p className="text-slate-500 text-lg">Découvrez comment nous transformons les défis business en succès chiffrés.</p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 md:mt-0">
                <button 
                    onClick={() => { setIsAutoPlaying(false); handlePrev(); }}
                    className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={() => { setIsAutoPlaying(false); handleNext(); }}
                    className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
            <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {cases.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-1">
                        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                            
                            {/* Gradient Accent Line */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-4 py-2 rounded-full bg-slate-100 text-sm font-bold text-slate-500 uppercase tracking-wider group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                            {item.sector}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark font-heading leading-tight mb-8">
                                        {item.title}
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0"></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-400 uppercase mb-1">Le Problème</h4>
                                                <p className="text-lg text-slate-700 font-medium">{item.problem}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0"></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-brand-primary uppercase mb-1">Notre Solution</h4>
                                                <p className="text-lg text-slate-700 font-medium">{item.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex justify-center lg:justify-end">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-brand rounded-full flex flex-col items-center justify-center text-white shadow-xl shadow-brand-primary/30 animate-pulse-slow">
                                        <span className="text-7xl md:text-8xl font-black tracking-tighter">{item.resultValue}</span>
                                        <span className="text-sm md:text-base font-bold uppercase tracking-wide opacity-90 mt-2 text-center max-w-[80%]">{item.result}</span>
                                        
                                        {/* Floating decorative ring */}
                                        <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-110 animate-[spin_10s_linear_infinite]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-brand-primary/10 transition-colors"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-10 gap-3">
            {cases.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-12 bg-brand-primary' : 'w-3 bg-slate-300 hover:bg-slate-400'
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;