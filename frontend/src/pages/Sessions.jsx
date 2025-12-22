import React from 'react';
import { motion } from 'framer-motion';

const Sessions = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20">

            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#081c15] to-black opacity-90" />

            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                className="relative z-10 flex flex-col items-center justify-center"
            >
                <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative flex items-center justify-center">
                    <div className="absolute w-[80%] h-[80%] bg-green-500/30 blur-[100px] rounded-full animate-pulse"></div>
                    <img
                        src="sessions.png"
                        alt="Green Planet"
                        // Changed class here:
                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(46,196,182,0.4)] animate-planet-x " 
            />
                </div>
            </motion.div>
        </div>
    );
};

export default Sessions;