import React from 'react';

const clients = [
  "Société Générale", "BNP Paribas", "Carrefour", "LVMH", "Sanofi", "TotalEnergies", 
  "Axa", "Orange", "Renault", "L'Oréal", "Danone", "Airbus"
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="relative w-full overflow-hidden">
        {/* Gradients for fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
           {/* Triple list for smooth infinite scroll */}
           {[...Array(3)].map((_, listIndex) => (
             <div key={listIndex} className="flex gap-16 md:gap-24 px-8 items-center">
               {clients.map((client, i) => (
                   <div key={`${listIndex}-${i}`} className="flex items-center justify-center min-w-[150px] group cursor-default">
                       {/* Placeholder text that looks like logos for now, as no logos provided */}
                       <span className="text-2xl md:text-3xl font-black text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-brand transition-all duration-500 font-heading tracking-tight whitespace-nowrap">
                           {client}
                       </span>
                   </div>
               ))}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;