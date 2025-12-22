import React from 'react';
import { motion } from 'framer-motion';

const Exhibition = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-4 py-20">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#2a0e05] to-black opacity-90" />

      {/* Planet Parallax */}
      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
      >
          <div className="absolute inset-0 bg-orange-600/20 blur-[60px] rounded-full"></div>
          <img src="exhibition.png" className="w-full h-full object-contain animate-spin-slow" />
      </motion.div>

      {/* Glass Container */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        className="relative z-10 w-full max-w-6xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-6 md:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 165, 0, 0.1)" }}
              className="relative w-full h-40 md:h-56 bg-[#3d2b25]/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer"
            >
               <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/5" />
               </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Exhibition;