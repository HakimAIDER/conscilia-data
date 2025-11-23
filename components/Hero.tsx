import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Slow down video for a more subtle, premium feel
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.6;
        videoRef.current.play().catch(e => console.error("Autoplay blocked", e));
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute min-w-full min-h-full object-cover w-full h-full opacity-30 mix-blend-multiply filter saturate-0 contrast-125"
        >
          {/* Abstract Data/Network Lines on White Background */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-of-dots-and-lines-on-white-background-27388-large.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay to fade bottom and ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] mask-gradient z-0 pointer-events-none"></div>

      {/* Interactive Parallax Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden transition-transform duration-700 ease-out z-0">
        <div 
            className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl mix-blend-multiply"
            style={{ transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)` }}
        ></div>
        <div 
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-3xl mix-blend-multiply"
            style={{ transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` }}
        ></div>
        
        {/* SVG Decorative Circles - Rotating */}
        <svg 
            className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30 animate-[spin_60s_linear_infinite]" 
            viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#grad1)" strokeWidth="0.1" strokeDasharray="10 5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="url(#grad1)" strokeWidth="0.1" strokeDasharray="5 5" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm mb-10 animate-fade-in-up hover:shadow-md transition-shadow cursor-default backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 tracking-widest uppercase font-heading">
                ESN & Data Intelligence
            </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-brand-dark mb-8 leading-[0.9] tracking-tight animate-fade-in-up mix-blend-multiply" style={{animationDelay: '0.1s'}}>
          WE BRING<br />
          VALUE TO<br />
          YOUR <span className="gradient-text relative inline-block">
              DATA
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up font-medium" style={{animationDelay: '0.2s'}}>
          Transformez vos données en levier de croissance. <br className="hidden md:block"/>
          Architecture, IA & Pilotage Stratégique pour l'entreprise de demain.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <a
            href="#services"
            className="group relative px-8 py-4 bg-brand-dark text-white text-lg font-bold rounded-full transition-all hover:bg-slate-800 hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Découvrir nos services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/60 backdrop-blur-md text-brand-dark hover:text-brand-primary border border-slate-200 text-lg font-bold rounded-full transition-all hover:border-brand-primary/30 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            Nous contacter
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;