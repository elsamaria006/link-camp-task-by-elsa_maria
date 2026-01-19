export default function Patrons() {

const patrons = [
{name:"IEEE VTS",logo :"Logos/VTS.webps"},
{name:"IEEE CSS",logo :"Logos/CSS.jpeg"},

{name:"IEEE CASS",logo :"Logos/CAS.jpeg"},
{name:"IEEE Photonics Society",logo :"Logos/Photonics.png"},

{name:"IEEE SSCS",logo :"Logos/SSCS.png"},
{name:"IEEE SPS",logo :"Logos/SPS.png"},

{name:"IEEE Education Society",logo :"Logos/EdSoc.png"},
{name:"IEEE SSIT",logo :"Logos/SSIT.png"},

{name:"IEEE RAS",logo :"Logos/RAS.png"},
{name:"IEEE ComSoc",logo :"Logos/ComSoc.jpeg"},

{name:"IEEE Wie",logo :"Logos/wie.png"},
{name:"IEEE AESS",logo :"Logos/AESS.png"},

{name:"IEEE Computer Society",logo :"Logos/CS.png"},
{name:"IEEE RFID",logo :"Logos/RFID.png"},

{name:"IEEE PIE",logo :"Logos/PIE.png"},
{name:"IEEE SIGHT",logo :"Logos/SIGHT.png"},

{name:"IEEE GRSS",logo :"Logos/GRSS.png"},
{name:"IEEE Sensors Council",logo :"Logos/Sensors.jpeg"},

{name:"IEEE AP-S",logo :"Logos/AP-S.jpeg"},
{name:"IEEE IAS/IES/PELS",logo :"Logos/IES.png"},


];


  
  const displayPatrons = [...patrons, ...patrons];

  return (
    <section className="py-20 bg-gray-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-white uppercase tracking-[0.3em] text-xs font-semibold">
          Technical Program Patrons
        </h3>
      </div>

      <div className="relative flex">
        {/* Box */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {displayPatrons.map((patron, i) => (
            <div key={i} className="flex-shrink-0 group">
              <img 
                src={patron.logo} 
                alt={patron.name} 
                className="h-12 md:h-16 w-auto object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}