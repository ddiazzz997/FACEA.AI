
import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Red pulses for brand identity */}
      <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] rounded-full bg-red-600/5 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-slate-900/5 blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-[30%] left-[20%] w-[20%] h-[20%] rounded-full bg-red-500/3 blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#fff_60%,transparent_100%)] opacity-40"></div>
    </div>
  );
};

export default BackgroundAnimation;
