import React from 'react'
import { motion } from 'motion/react'


const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Currency Converter",
      description: "A functional currency converter using real-time currency exchange API. This project enables me to understand API integration, state management, and user input handling in React.",
      image: "/projects/currency.png",
      tags: ["HTML", "CSS", "JS", "REACT", "API"],
      demoUrl: "https://drax-currencyconverter.netlify.app/",
      githubUrl: "https://github.com/DraxofLegend/currency-converter.git"

    },
    {
      id: 2,
      title: "Quiz Game",
      description: "A fun and interactive quiz game themed around the Dragon Ball universe. Built using React and powered by an external API, this project tested my skills in state management, conditional rendering, and working with dynamic data.",
      image: "/projects/dbz.png",
      tags: ["HTML", "CSS", "JS", "REACT", "API"],
      demoUrl: "https://drax-dragonball.netlify.app/",
      githubUrl: "https://github.com/DraxofLegend/dragonball-quiz.git"

    },
    {
      id: 3,
      title: "Gym Landing Page",
      description: "A modern, responsive landing page designed for a fictional gym or fitness brand. This project helped me practice layout structuring, component-based UI design, and styling with pure CSS in a React environment.",
      image: "/projects/gym.png",
      tags: ["HTML", "CSS", "REACT"],
      demoUrl: "https://drax-fitnesspage.netlify.app/",
      githubUrl: "https://github.com/DraxofLegend/fitness-page.git"

    }

  ]
  return (
    <section id="projects" className='min-h-screen bg-[#bfdbfe] pt-25 pb-14 px-10'>
      <div className='text-center'>
        <h1 className="text-black font-extralight text-5xl lg:text-6xl pb-5">Featured Projects</h1>
      </div>
      <div className="overflow-y-auto scrollbar-thumb-white max-h-[75vh] px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 h-full py-6">

          {projects.map((project, key) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="bg-white flex flex-col p-8 rounded-3xl shadow-lg shadow-black " key={key}>


              <div className='pb-5 overflow-hidden'>
                <img src={project.image} className="w-full h-full object-cover transition-transform duration-200 ease-in-out hover:scale-110" alt={project.title}></img>
              </div>


              <div className='font-extrabold text-2xl text-center'>
                {project.title}
              </div>


              <div className="px-6 pt-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, key) => (
                    <span className="px-4 py-1 text-s font-medium rounded-full bg-blue-600/50" key={key}>{tag}</span>
                  ))}
                </div>
              </div>


              <div className='font-light text-s mt-4'>
                {project.description}
              </div>

              <div className='flex flex-row justify-start mt-auto'>
                <div className='mr-5'>
                  <a href={project.demoUrl} className='underline text-lg text-blue-600'>Demo Link</a>
                </div>
                <div>
                  <a href={project.githubUrl} className='underline text-lg text-blue-600'>Github Link</a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects
