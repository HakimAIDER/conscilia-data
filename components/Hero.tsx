import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Gestion de la souris pour l'effet Canvas (sans re-render) et Parallax (avec re-render)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Ajustement des coordonnées pour le canvas (relatif au viewport)
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation Canvas : Réseau de particules
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    // Configuration
    const particleConfig = {
      count: 0, // Sera calculé
      connectionDistance: 120,
      mouseDistance: 200,
      baseSpeed: 0.5,
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      originalX: number;
      originalY: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.originalX = this.x;
        this.originalY = this.y;
        this.vx = (Math.random() - 0.5) * particleConfig.baseSpeed;
        this.vy = (Math.random() - 0.5) * particleConfig.baseSpeed;
        this.size = Math.random() * 2 + 1;
        
        // Couleurs de la marque : Bleu Primary et Rose Secondary
        const colors = ['rgba(37, 99, 235,', 'rgba(236, 72, 153,']; // Blue, Pink
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Mouvement de base
        this.x += this.vx;
        this.y += this.vy;

        // Rebond sur les bords
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction souris
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < particleConfig.mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (particleConfig.mouseDistance - distance) / particleConfig.mouseDistance;
          
          // Légère répulsion douce
          const repulsionStrength = 0.8;
          this.vx -= forceDirectionX * force * repulsionStrength * 0.1;
          this.vy -= forceDirectionY * force * repulsionStrength * 0.1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + '0.6)';
        ctx.fill();
      }
    }

    const init = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      // Adapter le nombre de particules à la taille de l'écran
      // Environ 1 particule pour 9000 pixels carrés
      const density = 9000; 
      const count = Math.floor((width * height) / density);
      
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Dessiner les connexions
        for (let j = i; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < particleConfig.connectionDistance) {
            ctx.beginPath();
            // Opacité basée sur la distance
            const opacity = 1 - (distance / particleConfig.connectionDistance);
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.3})`; // Slate-400
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        // Connexion à la souris (optionnel, pour plus d'interactivité)
        const dxMouse = mouseRef.current.x - particle.x;
        const dyMouse = mouseRef.current.y - particle.y;
        const distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
        if (distMouse < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.2 * (1 - distMouse/150)})`; // Blue connect
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      
      {/* === Background Layers === */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 z-0"></div>

      {/* 2. Dynamic Canvas Animation (Remplace la vidéo) */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-70"
      />

      {/* 3. Text Readability Overlays */}
      {/* Fade out bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/90 z-10"></div>
      {/* Radial focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.6)_80%)] z-10"></div>
      
      {/* 4. Technical Grid Texture (Subtle) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-10 pointer-events-none mix-blend-darken"></div>

      {/* 5. Interactive Floating Blobs (Parallax) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <div 
            className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-[90px] mix-blend-multiply opacity-50 transition-transform duration-100 ease-out"
            style={{ transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)` }}
        ></div>
        <div 
            className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-brand-secondary/10 to-transparent rounded-full blur-[100px] mix-blend-multiply opacity-50 transition-transform duration-100 ease-out"
            style={{ transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)` }}
        ></div>
      </div>

      {/* === Foreground Content === */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-10 animate-fade-in-up hover:shadow-md transition-all cursor-default group">
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