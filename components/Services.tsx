import React from 'react';
import { Network, Database, LineChart, GraduationCap, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Data Strategy",
    description: "Audit de maturité et feuille de route pour valoriser votre patrimoine de données.",
    icon: Network
  },
  {
    title: "BI & Analytics",
    description: "Dashboards interactifs et storytelling décisionnel pour un pilotage temps réel.",
    icon: LineChart
  },
  {
    title: "Data Engineering",
    description: "Pipelines ETL/ELT modernes et architectures Cloud scalables (Snowflake, Azure).",
    icon: Database
  },
  {
    title: "Formation",
    description: "Montée en compétences de vos équipes sur Talend, PowerBI et Qlik.",
    icon: GraduationCap
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Expertise <span className="gradient-text">360°</span></h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Nous intervenons sur l'ensemble de la chaîne de valeur de la donnée, de la collecte à la restitution, avec une exigence technique irréprochable.
                </p>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 font-bold text-brand-primary hover:text-brand-secondary transition-colors group">
                Parler à un expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-[340px] relative overflow-hidden"
            >
              {/* Subtle background decoration on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full -mr-6 -mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${index % 2 === 0 ? 'bg-brand-primary/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-white' : 'bg-brand-secondary/5 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white'}`}>
                    <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                    {service.description}
                </p>
              </div>
              
              <div className="flex justify-end relative z-10">
                <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;