import React from 'react';
import { ShieldCheck, Lightbulb, Users, MapPin, Award } from 'lucide-react';

const values = [
  {
    title: "Expertise Technique",
    icon: Lightbulb,
    description: "Talend, Power BI, Databricks, Snowflake, Azure."
  },
  {
    title: "Certification Qualiopi",
    icon: Award,
    description: "Organisme de formation certifié depuis 2023."
  },
  {
    title: "Proximité Paris",
    icon: MapPin,
    description: "Situé près de l'Arc de Triomphe."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">À Propos de Nous</span>
                <h2 className="text-4xl font-extrabold text-brand-dark mb-6">
                    Consilia-Data : Votre Partenaire <span className="text-brand-primary">Data</span> à Paris
                </h2>
                
                <div className="text-slate-600 leading-relaxed mb-8 space-y-4 text-lg">
                    <p>
                        Située près de l’<strong>Arc de Triomphe</strong> à Paris et fondée fin 2019, Consilia-Data accompagne les entreprises dans leur transformation digitale grâce à des solutions innovantes.
                    </p>
                    <p>
                        Notre équipe d'experts couvre la <strong>modélisation, l'ETL, la restitution et l'architecture des données</strong>, maîtrisant des outils comme <strong>Talend, Power BI, Databricks et Snowflake</strong>. Nous intervenons en environnement On-Premise et Cloud.
                    </p>
                    <p>
                        Certifiés <strong>Qualiopi</strong> depuis début 2023, nous plaçons la formation au cœur de notre modèle, garantissant le succès de vos projets décisionnels grâce à nos consultants en CDI hautement qualifiés.
                    </p>
                </div>
                
                {/* Values List */}
                <div className="space-y-6">
                    {values.map((val, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                            <div className={`p-3 rounded-full ${i === 1 ? 'bg-brand-secondary/10 text-brand-secondary' : 'bg-brand-primary/10 text-brand-primary'}`}>
                                <val.icon size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-dark">{val.title}</h3>
                                <p className="text-sm text-slate-500">{val.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Right Images - Masonry Grid */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="space-y-4 transform lg:translate-y-8">
                    <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                         <img 
                            src="https://i.postimg.cc/Nfxbs2kR/1637160946629.jpg" 
                            alt="Equipe Consilia Data" 
                            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                        <img 
                            src="https://i.postimg.cc/d3Pn18f8/1637160946752.jpg" 
                            alt="Collaboration" 
                            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                        <img 
                            src="https://i.postimg.cc/63wypq0d/1737540976217.jpg" 
                            alt="Bureaux" 
                            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                            alt="Teamwork" 
                            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-brand opacity-5 rounded-full blur-3xl"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;