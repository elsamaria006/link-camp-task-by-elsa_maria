import React, { useEffect, useRef, useState } from 'react';

interface TimelineEvent {
  time: string;
  title: string;
  position: 'top' | 'bottom';
}

const scheduleData: TimelineEvent[] = [

  { time: '09:00 AM - 09:30 AM', title: 'Registration', position: 'top' },
  { time: '09:30 AM - 10:00 AM', title: 'Inaugural Ceremony', position: 'bottom' },
  {time: '10:00 AM - 10:45 AM', title: 'Ice Breaking', position: 'top' },
  { time: '10:45 AM - 12:30 PM', title: 'Workshop ', position: 'bottom' },
  { time: '12:30 PM - 01:30 PM', title: 'Lunch', position: 'top' },
  { time: '01:30 PM - 02:30 PM', title: 'Workshop Phase 2', position: 'bottom' },
  { time: '02:30 PM - 03:00 PM', title: 'Talk Session', position: 'top' },
  { time: '03:00 PM - 03:30 PM', title: 'Break', position: 'bottom' },
  { time: '03:30 PM - 04:30 PM', title: 'Panel Discussion', position: 'top' },
  { time: '04:30 PM - 05:00 PM', title: 'Closing Ceremony', position: 'bottom' },
  
];

export default function Schedule() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        //  To delay the start of animation
        setTimeout(() => {
          setScrollWidth(100);
          scheduleData.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i]);
            }, i * 450);
          });
        }, 400); 
        observer.disconnect();
      }
    }, { 
      threshold: 0.3 
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="schedule" className="py-32 bg-gray-950 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00629B] to-[#00B5E2] mx-auto rounded-full"></div>
        </div>
        
        <div className="relative pt-20 pb-20">
          {/*Link flow*/}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 rounded-full hidden md:block">
            <div 
              className="h-full bg-gradient-to-r from-[#00629B] via-[#00B5E2] to-cyan-300 transition-all duration-[5000ms] ease-in-out shadow-[0_0_20px_#00B5E2]"
              style={{ width: `${scrollWidth}%` }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center relative min-h-[400px] gap-12 md:gap-0">
            {scheduleData.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center flex-1">
                
                {/* Vertical Connector Line */}
                <div 
                  className={`absolute w-px h-16 bg-gradient-to-b transition-all duration-1000 delay-300 hidden md:block
                    ${item.position === 'top' ? 'bottom-1/2 from-transparent to-[#00B5E2]' : 'top-1/2 from-[#00B5E2] to-transparent'}
                    ${visibleItems.includes(index) ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                />

                {/* Event Dot */}
                <div className={`hidden md:block w-4 h-4 rounded-full bg-[#00B5E2] z-10 transition-transform duration-700 shadow-[0_0_15px_#00B5E2]
                  ${visibleItems.includes(index) ? 'scale-100' : 'scale-0'}`} 
                />

                {/* Event Card */}
               {/* Mobile: relative (stacks cards) | Desktop: absolute (along the line) */}
                <div className={`relative md:absolute w-full md:w-44 transition-all duration-1000 mb-8 md:mb-0
                 ${item.position === 'top' ? 'md:bottom-28' : 'md:top-28'}
                  ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
>
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-[#00B5E2] hover:bg-white/10 transition-all duration-300 group shadow-2xl">
                    <div className="text-[11px] font-mono text-[#00B5E2] font-bold mb-2 tracking-widest">{item.time}</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#00B5E2] transition-colors leading-snug">
                      {item.title}
                    </div>
                    {/*Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-[#00B5E2]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}