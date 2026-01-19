import { useState, useEffect } from 'react';
import { MapPin, Send } from 'lucide-react';

export default function Hero() {
  
  const targetDate = new Date('2026-01-24T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleVenueClick = () => {
    window.open('https://www.google.com/maps/search/MEC+Thrikkakara+Kochi', '_blank');
  };

  const handleDateClick = () => {
    const event = {
      title: "IEEE LINK'2025",
      details: "The torch is ready for those who are ready to lead!",
      location: "Kochi, Kerala",
      start: "20260124T090000Z",
      end: "20260124T170000Z"
    };
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-950"></div>
        <img
          src="/mec_thrikkakkara.jpeg"
          alt="Venue"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight font-serif">
            IEEE LINK'2025
          </h1>

          <p className="text-lg md:text-2xl text-[#00B5E2] mb-6 font-light italic">
            The torch is ready for those who are ready to lead
          </p>

          {/* Countdown */}
          <div className="flex gap-3 md:gap-6 justify-center mb-10">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center">
                <div className="text-2xl md:text-4xl font-bold font-mono bg-white/5 border border-white/10 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl text-white">
                  {String(value).padStart(2, '0')}
                </div>
                <span className="text-[10px] uppercase tracking-tighter mt-2 text-[#00B5E2]">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-gray-300">
            <button 
              onClick={handleDateClick}
              className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#00B5E2] transition-all cursor-pointer"
            >
              <div className="w-2 h-2 bg-[#00B5E2] rounded-full animate-pulse"></div>
              <span className="text-base font-light">January 24, 2026</span>
            </button>

            <button
              onClick={handleVenueClick}
              className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#00B5E2] transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#00B5E2]" />
              <span className="text-base font-light">MEC Thrikkakara, Kochi</span>
            </button>
          </div>

          <button className="group relative px-10 py-3.5 text-lg font-semibold text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00629B] to-[#00B5E2] rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B5E2] to-[#00629B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-full animate-pulse shadow-[0_0_30px_rgba(0,181,226,0.5)]"></div>
            <span className="relative">Belong where the Leaders Thrive!!</span>
          </button>
        </div>
      </div>
    </section>
  );
}