import React from 'react';
import { Briefcase, MapPin, ArrowRight, Mail } from 'lucide-react';
import { JobOffer } from '../types';

const jobs: JobOffer[] = [
  {
    title: "Ingénieur Talend Confirmé",
    description: "Expertise DI & Cloud. Participation à des projets majeurs sur Snowflake.",
    location: "Paris / Hybride",
    contract: "CDI",
    technologies: ["Talend", "Java", "SQL", "Snowflake"]
  },
  {
    title: "Consultant BI Senior",
    description: "Conception de modèles de données complexes et dashboards stratégiques.",
    location: "Île-de-France",
    contract: "CDI",
    technologies: ["PowerBI", "DAX", "Talend", "SQL"]
  },
  {
    title: "Lead Développeur Full-Stack",
    description: "Développement d'applications web data-centric performantes.",
    location: "Paris",
    contract: "CDI",
    technologies: ["Spring Boot", "Angular", "Java 17+", "Docker"]
  }
];

const Jobs: React.FC = () => {
  return (
    <section id="jobs" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4">Recrutement</span>
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Rejoignez <span className="gradient-text">l'équipe</span></h2>
            <p className="text-slate-500">Des projets ambitieux et une évolution garantie.</p>
        </div>
            
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            {jobs.map((job, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-primary/30 transition-all hover:shadow-lg cursor-pointer flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            <Briefcase size={20} />
                        </div>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{job.contract}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                        <MapPin size={14} /> {job.location}
                    </div>
                    
                    <p className="text-slate-500 text-sm mb-6 flex-grow">{job.description}</p>
                    
                    <div className="pt-4 border-t border-slate-50 mt-auto">
                        <span className="text-sm font-bold text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                            Postuler <ArrowRight size={16} className="text-brand-secondary" />
                        </span>
                    </div>
                    <a href={`mailto:recrutement@consilia-data.com?subject=Candidature: ${job.title}`} className="absolute inset-0 z-20"></a>
                </div>
            ))}
        </div>

        {/* Spontaneous Application Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-extrabold text-brand-dark mb-4">
                        Votre profil est <span className="text-brand-secondary">Unique</span> ?
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Consilia-Data recrute aussi des profils sur mesure. Si vous partagez nos valeurs d'excellence et de partage, nous voulons vous rencontrer, même si aucune offre ne correspond exactement aujourd'hui.
                    </p>
                    <a 
                        href="mailto:recrutement@consilia-data.com?subject=Candidature Spontanée" 
                        className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-brand-dark/20"
                    >
                        <Mail size={18} />
                        Envoyer mon CV
                    </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-secondary rounded-full blur-3xl opacity-20 transform translate-x-4 translate-y-4"></div>
                        <img 
                            src="https://i.postimg.cc/4N3HcKTn/1741435433047-e-1765411200-v-beta-t-Ew-RJv-Fyq-XBmzrb-Luh-Ey0t-Zac5uxd-WJS37im-Ytkdpzk-U.jpg" 
                            alt="Talent Acquisition" 
                            className="relative w-64 h-64 object-cover rounded-full border-4 border-white shadow-2xl z-10"
                        />
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce">
                            <span className="text-2xl">👋</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;