import React from 'react'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <section id="home" className="min-h-[100dvh] flex flex-col justify-between items-center px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
            
            {/* Top section */}
            <div className="flex flex-col justify-center text-center mt-16 flex-grow">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className='font-extralight md:text-8xl text-6xl'>
                    HI, I'M SHAUN
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className='font-semibold mt-10 md:text-2xl text-lg'>
                    Learning fast. Building faster.
                </motion.p>
            </div>

            {/* Bottom scroll indicator */}
            <div className='flex flex-col items-center mb-6'>
                <p className="text-xl mb-3">Scroll Down</p>
                <a href='#about'>
                    <img src="/icons/down-arrow.png" className='h-10 animate-bounce' alt="Down arrow" />
                </a>
            </div>
        </section>
    )
}

export default Hero