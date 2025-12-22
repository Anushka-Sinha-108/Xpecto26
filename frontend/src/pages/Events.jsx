import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-4 py-20">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000814] to-black opacity-90" />
      
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1.2 }}
        className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none z-0"
      >
          <img src="event.png" className="w-full h-full object-contain animate-spin-slow" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          className="w-full bg-[#0e3b5e]/30 backdrop-blur-xl border border-blue-400/30 rounded-[30px] p-8 shadow-[0_0_50px_rgba(0,119,182,0.2)]"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-5/12 bg-white/5 rounded-2xl h-[300px] md:h-[450px] border border-white/5"></div>
            <div className="w-full md:w-7/12 flex flex-col gap-6">
                <div className="border border-cyan-500/30 bg-[#001219]/60 rounded-xl p-8 relative shadow-lg">
                    <p className="text-gray-300 leading-relaxed font-light text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed posuere tortor. Aenean at tempor nisl.
                    </p>
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-800/40 to-blue-900/40 rounded-xl border border-white/10 min-h-[150px]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;