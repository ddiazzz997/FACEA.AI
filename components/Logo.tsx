
import React from 'react';
import { Bot } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  centered?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtext = true, centered = false }) => {
  // Ajuste de escala para un tamaño "término medio" ideal
  const scale = size === 'lg' ? 1.3 : size === 'md' ? 0.85 : 0.55;
  
  // Dimensiones del contenedor del cluster
  const containerWidth = 80 * scale;
  const containerHeight = 100 * scale;

  return (
    <div className={`flex flex-col ${centered ? 'items-center' : 'items-start'} ${className}`}>
      <div className="flex items-center gap-2">
        {/* Cluster de Círculos Rojos: Apareciendo desde el más pequeño hasta el más grande */}
        <div 
          className="relative mr-4" 
          style={{ width: containerWidth, height: containerHeight }}
        >
          {/* Círculo 5: Rosado (Punta de la Espiral) - EL PRIMERO EN APARECER */}
          <div 
            className="absolute rounded-full bg-[#F06292] shadow-sm animate-logo-pop" 
            style={{ 
              width: 12 * scale, 
              height: 12 * scale, 
              top: 86 * scale, 
              left: 56 * scale,
              animationDelay: '0.1s'
            }}
          />
          {/* Círculo 4: Rojo Claro (Base Curva) */}
          <div 
            className="absolute rounded-full bg-[#E53935] shadow-sm animate-logo-pop" 
            style={{ 
              width: 18 * scale, 
              height: 18 * scale, 
              top: 78 * scale, 
              left: 30 * scale,
              animationDelay: '0.25s'
            }}
          />
          {/* Círculo 3: Rojo Vivo (Inferior Izquierda) */}
          <div 
            className="absolute rounded-full bg-[#D32F2F] shadow-sm animate-logo-pop" 
            style={{ 
              width: 24 * scale, 
              height: 24 * scale, 
              top: 58 * scale, 
              left: 4 * scale,
              animationDelay: '0.4s'
            }}
          />
          {/* Círculo 2: Rojo Intenso (Medio Izquierdo) */}
          <div 
            className="absolute rounded-full bg-[#B22222] shadow-sm animate-logo-pop" 
            style={{ 
              width: 32 * scale, 
              height: 32 * scale, 
              top: 26 * scale, 
              left: 0,
              animationDelay: '0.55s'
            }}
          />
          {/* Círculo 1: Granate (Superior Derecho) - EL ÚLTIMO EN APARECER */}
          <div 
            className="absolute rounded-full bg-[#8B1A1A] shadow-sm animate-logo-pop" 
            style={{ 
              width: 42 * scale, 
              height: 42 * scale, 
              top: 0, 
              right: 4 * scale,
              animationDelay: '0.7s'
            }}
          />
        </div>

        {/* Texto "Facea.AI" y Robot */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-1000">
            <h1 
              className="font-heading font-light text-black tracking-tighter"
              style={{ fontSize: (size === 'lg' ? 76 : size === 'md' ? 52 : 34) }}
            >
              Facea<span className="font-bold">.AI</span>
            </h1>
          </div>
          
          <div className="p-2 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm animate-float hidden sm:block delay-700 animate-in fade-in duration-1000">
            <Bot size={size === 'lg' ? 52 : size === 'md' ? 36 : 22} className="text-[#D32F2F]" />
          </div>
        </div>
      </div>
      
      {showSubtext && (
        <p className={`font-semibold text-black uppercase tracking-[0.25em] mt-2 ml-1 animate-in fade-in duration-1000 delay-1000 ${centered ? 'text-center' : ''}`}
           style={{ fontSize: (size === 'lg' ? 14 : size === 'md' ? 11 : 8) }}>
          Academia Ciencia y Desarrollo
        </p>
      )}
    </div>
  );
};

export default Logo;
