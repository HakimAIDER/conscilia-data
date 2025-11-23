import React from 'react';
import { TrainingCourse } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const courses: TrainingCourse[] = [
  {
    title: "Talend Open Studio",
    description: "Maîtrisez l'intégration de données et l'ETL. Préparation à la certification officielle.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Power BI Expert",
    description: "Modélisation, DAX et Dataviz avancée pour des dashboards décisionnels percutants.",
    image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "SQL & Data Engineering",
    description: "Le langage universel de la donnée. Requêtage complexe et optimisation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Qlik Sense",
    description: "Analyse associative et découverte de données. Créez des applications analytiques.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "MongoDB & NoSQL",
    description: "Architecture Big Data orientée documents. Performance et scalabilité.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Tableau Software",
    description: "Visual Analytics de référence. Transformez vos données en insights visuels.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

const Training: React.FC = () => {
  return (
    <section id="training" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">Formations <span className="text-brand-primary">Certifiantes</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Montez en compétence avec nos experts formateurs. Des cursus pratiques adaptés aux réalités du marché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                     <h3 className="text-xl font-bold text-white font-heading">{course.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  {course.description}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-brand-accent/5 px-2 py-1 rounded">Programme Pro</span>
                    <button className="text-brand-primary font-bold text-sm hover:text-brand-accent transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                        Détails <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
            <div className="bg-white px-8 py-4 rounded-full shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce">
                <div className="bg-brand-highlight/10 p-2 rounded-full text-brand-highlight">
                    <CheckCircle2 size={24} />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Certification</span>
                    <h4 className="text-lg font-bold text-brand-dark font-heading">Qualiopi Signature</h4>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Training;