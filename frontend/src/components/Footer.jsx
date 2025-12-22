import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;

  // Dynamic styles based on the current route
  const getFooterStyle = () => {
    switch (path) {
      case '/exhibition': 
        return {
          background: 'bg-gradient-to-t from-[#2a1205] via-[#1a0b05] to-black', // Deep Orange/Brown
          border: 'border-orange-500/20',
          textHover: 'hover:text-orange-400',
          iconColor: 'text-orange-500'
        };
      case '/events': 
        return {
          background: 'bg-gradient-to-t from-[#051025] via-[#020810] to-black', // Deep Blue
          border: 'border-blue-500/20',
          textHover: 'hover:text-blue-400',
          iconColor: 'text-blue-500'
        };
      case '/sessions': 
        return {
          background: 'bg-gradient-to-t from-[#051a10] via-[#020f08] to-black', // Deep Green
          border: 'border-green-500/20',
          textHover: 'hover:text-green-400',
          iconColor: 'text-green-500'
        };
      default: 
        return {
          background: 'bg-black', // Default Home
          border: 'border-white/10',
          textHover: 'hover:text-cyan-400',
          iconColor: 'text-cyan-500'
        };
    }
  };

  const styles = getFooterStyle();

  return (
    <footer className={`relative w-full py-12 border-t ${styles.border} ${styles.background} transition-colors duration-700`}>
      
      {/* Glow Effect at the bottom */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[100px] blur-[100px] opacity-30 pointer-events-none ${styles.iconColor.replace('text', 'bg')}`}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Column 1: Brand */}
        <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center ${styles.iconColor} bg-white/5`}>
                    <span className="font-bold text-lg">X</span>
                </div>
                <h2 className="text-3xl font-bold font-['Orbitron'] tracking-widest text-white">XPECTO</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                The biggest Techfest of the Himalayas. Join us for a journey through innovation, competition, and learning.
            </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
            <h3 className="text-white font-bold tracking-widest mb-6">EXPLORE</h3>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/" className={`transition-colors ${styles.textHover}`}>Home</Link></li>
                <li><Link to="/exhibition" className={`transition-colors ${styles.textHover}`}>Workshops</Link></li>
                <li><Link to="/events" className={`transition-colors ${styles.textHover}`}>Competitions</Link></li>
                <li><Link to="/sessions" className={`transition-colors ${styles.textHover}`}>Lectures</Link></li>
            </ul>
        </div>

        {/* Column 3: Contact/Socials */}
        <div>
            <h3 className="text-white font-bold tracking-widest mb-6">CONNECT</h3>
            <div className="flex gap-4 mb-6">
                {/* Social Icons (Simple Circles for placeholders) */}
                <a href="#" className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110 ${styles.textHover}`}>
                   IG
                </a>
                <a href="#" className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110 ${styles.textHover}`}>
                   YT
                </a>
                <a href="#" className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110 ${styles.textHover}`}>
                   LI
                </a>
            </div>
            <p className="text-gray-500 text-xs">
                contact@xpecto.org<br/>
                +91 98765 43210
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; 2025 XPECTO. All Rights Reserved.</p>
        <p>Designed with <span className={styles.iconColor}>❤</span> in Himalayas</p>
      </div>
    </footer>
  );
};

export default Footer;