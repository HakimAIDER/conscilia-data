import React, { useState } from 'react';
import { TrainingCourse } from '../types';
import { CheckCircle2, ChevronDown, Clock, List, Award, Calendar } from 'lucide-react';

// Extended interface locally for UI specific details
interface DetailedCourse extends TrainingCourse {
  duration: string;
  level: string;
  modules: string[];
}

const courses: DetailedCourse[] = [
  {
    title: "Talend Open Studio",
    description: "Maîtrisez l'intégration de données et l'ETL. Préparation à la certification officielle.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    duration: "3 Jours",
    level: "Intermédiaire",
    modules: ["Architecture TOS", "Gestion des Jobs & Contextes", "Composants tMap avancés", "Déploiement & Logs"]
  },
  {
    title: "Power BI Expert",
    description: "Modélisation, DAX et Dataviz avancée pour des dashboards décisionnels percutants.",
    image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop",
    duration: "2 Jours",
    level: "Avancé",
    modules: ["Power Query & M", "Langage DAX complexe", "Storytelling de données", "Publication & Sécurité"]
  },
  {
    title: "SQL & Data Engineering",
    description: "Le langage universel de la donnée. Requêtage complexe et optimisation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    duration: "3 Jours",
    level: "Tous niveaux",
    modules: ["Requêtes complexes", "Procédures stockées", "Optimisation d'index", "Modélisation relationnelle"]
  },
  {
    title: "Qlik Sense",
    description: "Analyse associative et découverte de données. Créez des applications analytiques.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    duration: "2 Jours",
    level: "Débutant",
    modules: ["Script de chargement", "Set Analysis", "Design d'interface", "Mashups Web"]
  },
  {
    title: "MongoDB & NoSQL",
    description: "Architecture Big Data orientée documents. Performance et scalabilité.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop",
    duration: "3 Jours",
    level: "Intermédiaire",
    modules: ["Modélisation Document", "Aggregation Pipeline", "Sharding & Replica", "Atlas Cloud"]
  },
  {
    title: "Tableau Software",
    description: "Visual Analytics de référence. Transformez vos données en insights visuels.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    duration: "2 Jours",
    level: "Intermédiaire",
    modules: ["Champs calculés", "Paramètres dynamiques", "Tableaux de bord", "Tableau Server"]
  }
];

const Training: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="training" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">Formations <span className="text-brand-primary">Certifiantes</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Montez en compétence avec nos experts formateurs. Des cursus pratiques adaptés aux réalités du marché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {courses.map((course, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col ${isOpen ? 'ring-2 ring-brand-primary/20 scale-[1.02] z-10' : ''}`}
              >
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => toggleCourse(index)}>
                  <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                       <h3 className="text-xl font-bold text-white font-heading">{course.title}</h3>
                       <div className="flex items-center gap-3 mt-2 text-xs text-brand-light font-medium opacity-90">
                           <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                           <span className="w-1 h-1 bg-white rounded-full"></span>
                           <span className="flex items-center gap-1"><Award size={12} /> {course.level}</span>
                       </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  {/* Expandable Details Section */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                  >
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-3 text-brand-primary font-bold text-sm uppercase tracking-wide">
                            <List size={14} /> Programme
                        </div>
                        <ul className="space-y-2">
                            {course.modules.map((mod, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-brand-secondary rounded-full flex-shrink-0"></span>
                                    {mod}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-medium text-slate-500">
                             <span className="flex items-center gap-1"><Calendar size={14} /> Prochaine session: Octobre</span>
                        </div>
                     </div>
                  </div>

                  {/* Footer / Toggle Button */}
                  <div className="flex items-center justify-between pt-2 mt-auto">
                      <span className="text-xs font-bold text-brand-accent uppercase tracking-wider bg-brand-accent/5 px-2 py-1 rounded">Programme Pro</span>
                      <button 
                        onClick={() => toggleCourse(index)}
                        className={`font-bold text-sm transition-all duration-300 flex items-center gap-1 px-3 py-1.5 rounded-full ${isOpen ? 'bg-brand-primary text-white hover:bg-brand-primary/90' : 'text-brand-primary hover:bg-brand-primary/5'}`}
                      >
                          {isOpen ? 'Fermer' : 'Détails'}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                      </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 flex justify-center">
            <div className="bg-white px-8 py-4 rounded-full shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce cursor-default hover:animate-none hover:shadow-2xl transition-all">
                <div className="bg-brand-highlight/10 p-2 rounded-full text-brand-highlight">
                    <CheckCircle2 size={24} className="text-emerald-500" />
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