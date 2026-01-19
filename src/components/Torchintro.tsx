import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import { cn } from '/lib/utils';

interface TorchIntroProps {
  onComplete: () => void;
}

export function TorchIntro({ onComplete }: TorchIntroProps) {
  const [isLit, setIsLit] = useState(false);
  const [step, setStep] = useState(0); // 0: torch, 1: title, 2: subtitle, 3: finish

  const handleIgnite = () => {
    if (isLit) return;
    setIsLit(true);
    
    
    setTimeout(() => setStep(1), 1000); // Show Title
    setTimeout(() => setStep(2), 2500); // Show Subtitle
    setTimeout(() => {
        setStep(3);
        setTimeout(onComplete, 3000); // Fade out and complete
    }, 6000);
  };

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000",
      step === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
    )}>
      <div 
        className={cn(
          "relative cursor-pointer transition-all duration-700 transform",
          isLit ? "scale-110" : "hover:scale-105",
          step >= 1 ? "-translate-y-16" : ""
        )}
        onClick={handleIgnite}
      >
        <div className={cn(
            "absolute inset-0 blur-2xl rounded-full transition-all duration-1000",
            isLit ? "bg-orange-500/40 opacity-100 scale-150" : "opacity-0"
        )} />
        <Flame 
          size={80} 
          className={cn(
            "relative z-10 transition-all duration-700",
            isLit ? "text-orange-500 fill-orange-500 torch-glow animate-torch-flicker" : "text-zinc-700"
          )} 
        />
        {!isLit && (
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-sm whitespace-nowrap animate-pulse">
            Click to ignite
          </p>
        )}
      </div>

      <div className="text-center mt-8 space-y-6 relative z-10">
        <h1 className={cn(
          "text-4xl md:text-6xl font-bold tracking-widest text-white transition-all duration-1000 transform",
          step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          IEEE LINK'2025
        </h1>
        
        <p className={cn(
          "text-lg md:text-xl text-zinc-400 font-light tracking-wide max-w-lg mx-auto leading-relaxed transition-all duration-3000 delay-700 transform",
          step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          One day. One vision. Who will carry the torch?
        </p>
      </div>
    </div>
  );
}



export default TorchIntro;