import React from 'react'
import me from "../images/me.png"
import { motion } from 'framer-motion'

const About = () => {

    return (
        <section id="about" className='h-[100vh] pt-30'>
            <div className='bg-[#bfdbfe] h-[90%] w-[80%] mx-auto flex flex-col justify-center md:flex-row md:justify-start items-center px-11 rounded-2xl shadow-2xl'>
                <div className='flex-shrink-0'>
                    <img src={me} className='rounded-full lg:block lg:w-65 hidden'></img>
                </div>
                <hr class="lg:w-px lg:block h-[80%] xl:mx-13 mx-10 bg-gray-700 hidden"></hr>
                <div>
                    <h1 className="text-5xl font-light">About Me</h1>
                    <hr className="w-full h-px md:my-4 xl:my-6 my-4 bg-gray-700"></hr>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className='font-medium text-base lg:text-lg'> Hey, I'm Shaun — a curious mind who loves building things with code. I’m a fast-learning developer and a med student, constantly exploring the world of full-stack development and creating projects that solve real problems.
                    </motion.p>
                    <br></br>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="font-medium mb-4 lg:mb-8 text-base lg:text-lg">Besides coding, I play the piano to unwind, hit the gym to stay sharp, and enjoy a good game of badminton whenever I can. Whether it's tech or life, I believe in staying active, being versatile, and making the most of every moment.</motion.p>
                    <button className="bg-white font-medium text-black cursor-pointer p-5 rounded-2xl w-40 transition hover:scale-110 hover:font-bold hover:text-l" onClick={() => window.open('/assets/Resume.pdf', '_blank')}>Resume</button>
                </div>
            </div>
        </section>
    )
}

export default About
