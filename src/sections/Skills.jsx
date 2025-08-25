import React from 'react'
import '../css/Skills.css'
import { useState } from 'react'
import { motion } from 'motion/react'


const Skills = () => {

  const skills = [
    //Frontend
    { name: "HTML", level: 95, category: "FRONTEND", image: "/icons/html.png" },
    { name: "CSS", level: 95, category: "FRONTEND", image: "/icons/css-3.png" },
    { name: "Tailwind", level: 95, category: "FRONTEND", image: "/icons/Tailwind.png" },
    { name: "JS", level: 80, category: "FRONTEND", image: "/icons/js.png" },
    { name: "React", level: 90, category: "FRONTEND", image: "/icons/atom.png" },
    { name: "R.Native", level: 70, category: "FRONTEND", image: "/icons/native.png" },

    //Backend
    { name: "Node.js", level: 75, category: "BACKEND", image: "/icons/node-js.png" },
    { name: "Next.js", level: 70, category: "BACKEND", image: "/icons/next.png" },
    { name: "Mongo", level: 60, category: "BACKEND", image: "/icons/mongo.png" },
    { name: "Firebase", level: 70, category: "BACKEND", image: "/icons/firebase.png" },

    //Tools
    { name: "Github", level: 70, category: "TOOLS", image: "/icons/github.png" },
    { name: "Git", level: 70, category: "TOOLS", image: "/icons/social.png" },
    { name: "Vite", level: 100, category: "TOOLS", image: "/icons/Vite.png" },
    { name: "NPM", level: 100, category: "TOOLS", image: "/icons/programing.png" },
    { name: "VS Code", level: 100, category: "TOOLS", image: "/icons/VS.png" },
    { name: "Clerk", level: 100, category: "TOOLS", image: "/icons/clerk.png" },
  ]

  const categories = ["ALL", "BACKEND", "FRONTEND", "TOOLS"]

  const [activeCategory, setactiveCategory] = useState('ALL')

  const filteredskills = skills.filter((skill) => activeCategory === "ALL" || skill.category === activeCategory)



  return (
    <section id="skills" className='bg-[#5ab1ff] pt-23 pb-14 w-full min-h-screen bg-fixed'>
      <div className='text-center'>
        <h1 className=' text-black font-extralight text-5xl sm:text-6xl'>Skills</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-18 mt-4 font-semibold text-black'>
        {categories.map((category, key) => {
          const isActive = activeCategory === category;
          return (
            <button className={["font-bold text-md transition duration-200 ease-in-out px-[20px] md:px-[20px] lg:px-[40px] py-2 rounded-4xl hover:scale-110 hover:bg-gray-300/40 hover:text-white cursor-pointer", isActive ? "bg-black text-white" : ""].join(" ")} key={key} onClick={() => setactiveCategory(category)}>{category}</button>
          )
        })}

      </div>
      <div className='mt-4 bg-gray-500/90 w-[90%] max-h-[70vh] mx-auto shadow-2xl rounded-2xl pt-5 pb-10 px-16 overflow-y-auto scrollbar scrollbar-thumb-white scrollbar-track-black/70'>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {filteredskills.map((skill, key) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              key={key} className='rounded-lg shadow-m bg-blue-300 p-4'>
              <span className='flex items-center'>
                <img src={skill.image} className="w-6 h-6 mr-3" alt="skills-image"></img>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </span>


              <hr className="mt-2 h-2 bg-white border-none rounded-lg" style={{ width: `${skill.level}%` }} >
              </hr>
              <div>
                <p className="text-end mt-2">{skill.level}%</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
