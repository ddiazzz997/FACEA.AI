
import React from 'react';
import { ShieldCheck, GraduationCap, Cpu, Sparkles, ChevronRight } from 'lucide-react';
import Logo from './Logo';

interface LandingPageProps {
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-4xl text-center space-y-12 z-10 animate-in fade-in zoom-in duration-700">
        
        <Logo size="lg" className="mx-auto mb-12" centered />
        
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Llevando el Conocimiento Intelectual <br/> 
            <span className="text-[#D32F2F]">a Otra Dimensión</span>
          </h2>
          
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-normal">
            La plataforma exclusiva para FACEA <span className="font-bold text-slate-800">potenciada con IA de vanguardia</span>, diseñada para expandir los límites de tu capacidad intelectual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="tech-card p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
              <GraduationCap className="w-6 h-6 text-[#D32F2F] group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 font-heading">Ecosistema FACEA</h3>
            <p className="text-slate-500 text-sm">Contenido calibrado para las ciencias económicas.</p>
          </div>
          
          <div className="tech-card p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors duration-300">
              <Cpu className="w-6 h-6 text-slate-600 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 font-heading">IA de Vanguardia</h3>
            <p className="text-slate-500 text-sm">Respuestas fluidas, naturales y con contexto profundo.</p>
          </div>

          <div className="tech-card p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-[#D32F2F] transition-colors duration-300">
              <ShieldCheck className="w-6 h-6 text-[#D32F2F] group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 font-heading">Seguridad Nodo</h3>
            <p className="text-slate-500 text-sm">Privacidad garantizada bajo estándares institucionales.</p>
          </div>
        </div>

        <button 
          onClick={onLogin}
          className="pulse-button group relative px-14 py-6 bg-[#D32F2F] text-white font-black rounded-3xl overflow-hidden transition-all hover:scale-110 hover:shadow-[0_20px_60px_-10px_rgba(211,47,47,0.5)] active:scale-95 flex items-center gap-4 mx-auto shadow-2xl"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer -skew-x-12 pointer-events-none"></div>
          
          <span className="relative z-10 flex items-center gap-3 text-2xl tracking-tight">
            Entrar a Facea.AI
            <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
          </span>

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>

        <p className="text-slate-400 text-xs font-bold pt-12 uppercase tracking-[0.3em]">
          UNIVERSIDAD DE NARIÑO • FACEA • 2026
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
