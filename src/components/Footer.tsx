import React from 'react';
import { Mail, Phone, MapPin,  Linkedin, Instagram,  Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10 w-full relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Logos */}
              <img 
                src="/Logos/Link.png" 
                alt="IEEE Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-logo');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              
              {/* Fallback Box */}
              <div className="fallback-logo hidden w-10 h-10 bg-[#00B5E2] rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_#00B5E2]">
                L
              </div>

              <span className="font-bold text-lg text-white">IEEE LINK 2025</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Networking student branches in an effective way thereby increasing the value in IEEE student membership.
            </p>
            
            <div className="flex gap-4">
              <a href="http://linkedin.com/company/ieeelink" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00B5E2] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/ieeelink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00B5E2] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/ieeelink" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00B5E2] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-[#00B5E2] text-sm transition-colors block">About Event</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-[#00B5E2] text-sm transition-colors block">Event Schedule</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[#00B5E2] text-sm transition-colors block">Our Team</a></li>
              <li><a href="#" className="text-[#00B5E2] font-semibold text-sm block">Register Now</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#00B5E2]" />
                <a href="mailto:link@ieee.org" className="hover:text-white transition-colors">link@ieee.org</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#00B5E2]" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#00B5E2] mt-1" />
                <span>MEC Thrikkakara, Kochi</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              For technical support regarding registration or the event portal, please reach out via our official mail.
            </p>
          </div>
        </div>

        {/* Copyright*/}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2025 IEEE LINK Kerala Section. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
             <div className="flex items-center gap-2">
               
              
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}