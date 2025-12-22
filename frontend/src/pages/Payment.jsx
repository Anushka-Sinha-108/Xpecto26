import React from 'react';
import { motion } from 'framer-motion';

const Payments = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-6 py-20">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1f1a14] to-black opacity-90" />
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a373] rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-start pl-0 md:pl-20">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[300px] md:w-[400px] h-[500px] md:h-[650px] bg-[#8d8d8d]/40 backdrop-blur-2xl border border-white/20 rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
        >
             <div className="w-full h-full rounded-[50px] bg-gradient-to-br from-white/10 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payments;