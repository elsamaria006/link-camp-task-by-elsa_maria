import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const team = [
  {
    role: 'SAC Advisor',
    name: 'Varghese Cherian',
    image: '/Avatars/Man.jpeg',
    linkedin: 'http://linkedin.com/company/ieeelink',
     instagram:'https://www.instagram.com/ieeelink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    role: 'Chair,SAC',
    name: 'Dr.John George',
    image: '/Avatars/Man.jpeg',
    linkedin: 'http://linkedin.com/company/ieeelink',
     instagram:'https://www.instagram.com/ieeelink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    role: 'Section Student Representative',
    name: 'Amina Nagmi',
    image: '/Avatars/Woman.jpeg',
    linkedin: 'http://linkedin.com/company/ieeelink',
     instagram:'https://www.instagram.com/ieeelink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    role: 'Co-Section Student Representative',
    name: 'Rayyan Safar',
    image: '/Avatars/Man.jpeg',
    linkedin: 'http://linkedin.com/company/ieeelink',
     instagram:'https://www.instagram.com/ieeelink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    role: 'Programme Coordinator',
    name: 'Nandana S',
    image: '/Avatars/Woman.jpeg',
    linkedin: 'http://linkedin.com/company/ieeelink',
    instagram:'https://www.instagram.com/ieeelink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-white uppercase tracking-[0.3em] text-xs font-semibold">
         Meet The Team
        </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-[#00B5E2]/50 transition-all">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mb-6 border-4 border-white/10 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="text-[#00B5E2] font-bold text-xs uppercase tracking-widest mb-1">{member.role}</div>
              <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
              
              
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#00B5E2] transition-colors p-2 bg-white/5 rounded-full hover:bg-[#00B5E2]/10"
              >
                <Linkedin size={20} className="ml-2" />
              </a>
                <Instagram size={20} />
                 <a 
                href={member.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#00B5E2] transition-colors p-2 bg-white/5 rounded-full hover:bg-[#00B5E2]/10"
              >
                <Instagram size={20}  />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;