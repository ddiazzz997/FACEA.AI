
import React from 'react';
import { Bot } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  centered?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtext = true, centered = false }) => {
  const sizes = {
    sm: { circles: 'w-1 h-1', text: 'text-xl', robot: 24, gap: 'gap-1' },
    md: { circles: 'w-2 h-2', text: 'text-3xl', robot: 40, gap: 'gap-2' },
    lg: { circles: 'w-4 h-4', text: 'text-5xl', robot: 64, gap: 'gap-4' }
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col ${centered ? 'items-center' : 'items-start'} ${className}`}>
      <div className={`flex items-center ${s.gap}`}>
        {/* Red Circles Cluster */}
        <div className="flex flex-col items-end gap-1 relative mr-2">
          <div className={`${size === 'lg' ? 'w-8 h-8' : size === 'md' ? 'w-5 h-5' : 'w-3 h-3'} bg-[#D32F2F] rounded-full`}></div>
          <div className="flex gap-1 items-center">
              <div className={`${size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-4 h-4' : 'w-2 h-2'} bg-[#D32F2F] rounded-full`}></div>
              <div className={`${size === 'lg' ? 'w-12 h-12' : size === 'md' ? 'w-8 h-8' : 'w-5 h-5'} bg-[#D32F2F] rounded-full`}></div>
          </div>
          <div className="flex gap-1 items-end -mt-1">
               <div className={`${size === 'lg' ? 'w-4 h-4' : size === 'md' ? 'w-3 h-3' : 'w-1.5 h-1.5'} bg-[#D32F2F] rounded-full`}></div>
               <div className={`${size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-2.5 h-2.5'} bg-[#D32F2F] rounded-full`}></div>
          </div>
        </div>

        {/* Text Part */}
        <div className="flex items-center gap-2">
          <h1 className={`${s.text} font-heading font-extrabold text-black tracking-tight leading-none`}>
            Facea<span className="text-gray-600">.AI</span>
          </h1>
          <div className="p-1 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner animate-float">
            <Bot size={s.robot} className="text-slate-700" />
          </div>
        </div>
      </div>
      
      {showSubtext && (
        <p className={`text-[10px] md:text-sm font-medium text-slate-500 uppercase tracking-widest mt-2 ${centered ? 'text-center' : ''}`}>
          Academia Ciencia y Desarrollo
        </p>
      )}
    </div>
  );
};

export default Logo;
