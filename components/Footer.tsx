import React from 'react';
import { Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-8">
             <div className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="https://i.postimg.cc/ZRv5wZn2/logo-consilia-data-removebg-preview.png" alt="Consilia-Data" className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
             </div>
             <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                ESN spécialisée en Business Intelligence et Data Management. 
                Fondée en 2019, nous transformons la complexité en clarté pour les entreprises leaders.
             </p>
             <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/consilia-data/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary/5 transition-all"><Twitter size={18} /></a>
             </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-bold text-brand-dark mb-8 text-sm uppercase tracking-widest">Plan du site</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#about" className="hover:text-brand-primary transition-colors">À propos</a></li>
                <li><a href="#services" className="hover:text-brand-primary transition-colors">Nos Services</a></li>
                <li><a href="#values" className="hover:text-brand-primary transition-colors">Nos Valeurs</a></li>
                <li><a href="#expertise" className="hover:text-brand-primary transition-colors">Expertises</a></li>
                <li><a href="#jobs" className="hover:text-brand-primary transition-colors">Carrières</a></li>
                <li><a href="#training" className="hover:text-brand-primary transition-colors">Formations</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-bold text-brand-dark mb-8 text-sm uppercase tracking-widest">Paris</h4>
            <ul className="space-y-6 text-sm text-slate-500">
                <li className="flex items-start gap-4">
                    <MapPin size={18} className="mt-0.5 text-brand-primary" />
                    <span>30 Rue d'Armaillé<br/>75017 Paris, France</span>
                </li>
                <li className="flex items-center gap-4">
                    <Mail size={18} className="text-brand-primary" />
                    <a href="mailto:contact@consilia-data.com" className="hover:text-brand-dark transition-colors">contact@consilia-data.com</a>
                </li>
                <li className="flex items-center gap-4">
                    <Phone size={18} className="text-brand-primary" />
                    <a href="tel:+33651994618" className="hover:text-brand-dark transition-colors">06 51 99 46 18</a>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Consilia-Data. Tous droits réservés.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-brand-dark transition-colors">Mentions Légales</a>
             <a href="#" className="hover:text-brand-dark transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
      {/* Subtle Gradient Line at bottom */}
      <div className="h-1 w-full bg-gradient-brand opacity-20"></div>
    </footer>
  );
};

export default Footer;