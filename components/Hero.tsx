import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Parallax effect for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Ensure video plays with a modern, slow cinematic feel
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.75;
        videoRef.current.play().catch(e => console.error("Autoplay blocked", e));
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      
      {/* === Background Layers === */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 z-0"></div>

      {/* 2. Abstract Data Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          className="absolute min-w-full min-h-full object-cover w-full h-full opacity-40 mix-blend-multiply filter grayscale contrast-125"
        >
          {/* Abstract Network/Data Connections */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-of-dots-and-lines-on-white-background-27388-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 3. Text Readability Overlays */}
      {/* Fade out the video at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white z-10"></div>
      {/* Radial fade to center attention and blur edges slightly */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] z-10"></div>
      
      {/* 4. Technical Grid Texture (Subtle) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] z-10 pointer-events-none mix-blend-darken"></div>

      {/* 5. Interactive Floating Blobs (Parallax) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <div 
            className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-[80px] mix-blend-multiply opacity-60 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)` }}
        ></div>
        <div 
            className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-brand-secondary/20 to-transparent rounded-full blur-[80px] mix-blend-multiply opacity-60 transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
      </div>

      {/* === Foreground Content === */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm mb-10 animate-fade-in-up hover:shadow-md transition-all cursor-default group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 tracking-widest uppercase font-heading group-hover:text-brand-primary transition-colors">
                ESN & Data Intelligence
            </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-brand-dark mb-8 leading-[0.9] tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          WE BRING<br />
          VALUE TO<br />
          YOUR <span className="gradient-text relative inline-block">
              DATA
              {/* Underline Decoration */}
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-brand-secondary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
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
            className="px-8 py-4 bg-white/70 backdrop-blur-md text-brand-dark hover:text-brand-primary border border-slate-200 text-lg font-bold rounded-full transition-all hover:border-brand-primary/30 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
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