import React from 'react';
import { ShieldCheck, GraduationCap, Cpu, ChevronRight, Mail } from 'lucide-react';
import Logo from './Logo';

interface LandingPageProps {
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-white">
      {/* Elementos decorativos animados de fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-red-600/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-slate-900/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl text-center space-y-10 z-10 animate-in fade-in zoom-in duration-1000">
        
        <Logo size="lg" className="mx-auto mb-8 animate-float" centered />
        
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none">
            EL FUTURO DE <br/> 
            <span className="text-[#D32F2F]">LA INTELIGENCIA</span>
          </h2>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Plataforma cognitiva de ÉLITE para la <span className="text-slate-900 font-bold">Facultad de Ciencias Económicas y Administrativas</span>. Potencia tu pensamiento, domina tu carrera.
          </p>
        </div>

        {/* Tarjetas de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          <div className="tech-card p-8 rounded-[2.5rem] bg-slate-50/50 backdrop-blur-sm border border-slate-100 group">
            <GraduationCap className="w-10 h-10 text-[#D32F2F] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Exclusivo FACEA</h3>
            <p className="text-slate-500 text-sm">Entrenado con el currículo de la Udenar.</p>
          </div>
          
          <div className="tech-card p-8 rounded-[2.5rem] bg-slate-50/50 backdrop-blur-sm border border-slate-100 group">
            <Cpu className="w-10 h-10 text-slate-800 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Poder Gemini</h3>
            <p className="text-slate-500 text-sm">Razonamiento avanzado en tiempo real.</p>
          </div>

          <div className="tech-card p-8 rounded-[2.5rem] bg-slate-50/50 backdrop-blur-sm border border-slate-100 group">
            <ShieldCheck className="w-10 h-10 text-[#D32F2F] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Entorno Seguro</h3>
            <p className="text-slate-500 text-sm">Privacidad absoluta para estudiantes FACEA.</p>
          </div>
        </div>

        {/* Botones de Acceso */}
        <div className="flex flex-col items-center gap-6 pt-6">
          <button 
            onClick={onLogin}
            className="pulse-button group relative px-16 py-6 bg-[#D32F2F] text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_60px_-10px_rgba(211,47,47,0.4)] active:scale-95 flex items-center gap-4 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer -skew-x-12" />
            <span className="relative z-10 flex items-center gap-3 text-2xl">
              ACCESO ESTUDIANTIL
              <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onLogin}
              className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 hover:border-[#D32F2F] hover:text-[#D32F2F] transition-all shadow-md group"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ingresar con Google
            </button>
            <button 
              onClick={onLogin}
              className="flex items-center gap-3 px-8 py-4 bg-slate-900 rounded-2xl text-white font-bold hover:bg-black transition-all shadow-md group border-2 border-transparent"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              Institucional
            </button>
          </div>
        </div>

        <div className="pt-12">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
              Universidad de Nariño • Facea • Colombia
            </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;