import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const resources = [
  {
    category: "Guide",
    title: "Le Data Mesh expliqué aux DSI",
    excerpt: "Comment décentraliser la gestion de données pour gagner en agilité.",
    color: "from-blue-500 to-blue-600"
  },
  {
    category: "Comparatif",
    title: "PowerBI vs Tableau : Le match 2025",
    excerpt: "Fonctionnalités, pricing, courbe d'apprentissage : notre avis d'expert.",
    color: "from-pink-500 to-pink-600"
  },
  {
    category: "Formation",
    title: "Catalogue Formations 2025",
    excerpt: "Découvrez nos cursus certifiants Talend, SQL et Data Engineering.",
    color: "from-violet-500 to-violet-600"
  }
];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-extrabold text-brand-dark">Nos <span className="text-brand-primary">Ressources</span></h2>
            <a href="#" className="text-slate-500 font-medium hover:text-brand-primary transition-colors">Voir le blog</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {resources.map((res, index) => (
                <div key={index} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <div className={`h-3 bg-gradient-to-r ${res.color}`}></div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText size={16} className="text-slate-400" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{res.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{res.title}</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">{res.excerpt}</p>
                        <span className="inline-flex items-center text-sm font-bold text-brand-primary group-hover:gap-2 transition-all">
                            Lire la suite <ArrowRight size={16} className="ml-1" />
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;