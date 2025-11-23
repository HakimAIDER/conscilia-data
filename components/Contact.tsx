import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
        {/* Watermark Logo Effect */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/3 translate-y-1/3">
            <div className="w-[800px] h-[800px] rounded-full border-[100px] border-brand-dark"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-8">
            Prêt à valoriser vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-purple-600">données</span> ?
        </h2>
        <p className="text-xl text-slate-500 mb-12 font-light">
            Discutons de vos enjeux. Nos experts vous répondent sous 24h.
        </p>
        
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl mx-auto">
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Nom" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition" />
                    <input type="email" placeholder="Email pro" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition" />
                </div>
                <textarea rows={4} placeholder="Comment pouvons-nous vous aider ?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition resize-none"></textarea>
                <button className="w-full py-4 bg-brand-secondary hover:bg-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                    Démarrer la conversation <ArrowRight size={20} />
                </button>
            </form>
            <p className="mt-4 text-xs text-slate-400">En soumettant ce formulaire, vous acceptez notre politique de confidentialité.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;