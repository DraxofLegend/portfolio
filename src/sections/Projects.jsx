import React from 'react'
import { motion } from 'motion/react'


const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "E-commerce Landing Page",
      description: "This project is a modern, responsive E-commerce landing page that showcases products and provides essential functionality for both customers and sellers.",
      image: "/projects/shopping.png",
      tags: ["HTML", "CSS", "React", "MongoDB", "Express.js", "Node.js"],
      demoUrl: "https://shopping-mern-v1.vercel.app/",
      githubUrl: "https://github.com/DraxofLegend/shopping-mern"
    },
    {
      id: 2,
      title: "Whatzzapp",
      description: "The app allows users to sign up, log in, and send messages that update instantly across all connected devices. It includes user authentication, profile avatars, and a profanity filter to block banned words.",
      image: "/projects/chatapp.jpg",
      tags: ["React Native", "React", "NativeWind", "Firebase", "Firestore"],
      demoUrl: "https://drax-whatzzapp-qr.netlify.app",
      githubUrl: "https://github.com/DraxofLegend/whatzzapp-qr"
    },
    {
      id: 3,
      title: "GG Maps",
      description: "A practical mapping and logistics tool that allows users to calculate the optimal route, the total fuel consumption and the total cost from a starting location to a destination",
      image: "/projects/ggmaps.jpg",
      tags: ["HTML", "CSS", "JS", "React", "Google Maps API"],
      demoUrl: "https://maps-clone-two.vercel.app",
      githubUrl: "https://github.com/DraxofLegend/maps-clone"

    },
    {
      id: 4,
      title: "Currency Converter",
      description: "A functional currency converter using real-time currency exchange API. This project enables me to understand API integration, state management, and user input handling in React.",
      image: "/projects/currency.png",
      tags: ["HTML", "CSS", "JS", "React", "API"],
      demoUrl: "https://drax-currencyconverter.netlify.app/",
      githubUrl: "https://github.com/DraxofLegend/currency-converter.git"

    },
    {
      id: 5,
      title: "Quiz Game",
      description: "A fun and interactive quiz game themed around the Dragon Ball universe. Built using React and powered by an external API, this project tested my skills in state management, conditional rendering, and working with dynamic data.",
      image: "/projects/dbz.png",
      tags: ["HTML", "CSS", "JS", "React", "API"],
      demoUrl: "https://drax-dragonball.netlify.app/",
      githubUrl: "https://github.com/DraxofLegend/dragonball-quiz.git"

    },
    {
      id: 6,
      title: "Netflix Clone",
      description: "A responsive React app that mimics Netflix’s core functionality, allowing users to browse movies and add them to their favorites list.",
      image: "/projects/netflix.png",
      tags: ["HTML", "CSS", "React", "API"],
      demoUrl: "https://drax-netclone.netlify.app/",
      githubUrl: "https://github.com/DraxofLegend/netflix-clone.git"
    },

    {
      id: 7,
      title: "Gym Landing Page",
      description: "A modern, responsive landing page designed for a fictional gym or fitness brand. This project helped me practice layout structuring, component-based UI design, and styling with pure CSS in a React environment.",
      image: "/projects/gym.png",
      tags: ["HTML", "CSS", "React"],
      demoUrl: "https://drax-fitnesspage.netlify.app/",
      githubUrl: "https://github.com/DraxofLegend/fitness-page.git"
    },



  ]
  return (
    <section id="projects" className='xl:h-[320vh]  bg-[#bfdbfe] pt-25 pb-14 px-10'>
      <div className='text-center'>
        <h1 className="text-black font-extralight text-5xl lg:text-6xl pb-5">Featured Projects</h1>
      </div>
      <div className=" overflow-auto  xl:overflow-visible scrollbar-thumb-white max-h-[75vh] px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 h-full py-6">

          {projects.map((project, key) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="bg-white flex flex-col p-8 rounded-3xl shadow-lg shadow-black " key={key}>


              <div className='pb-5 overflow-hidden'>
                <img src={project.image} className="w-full h-60 object-cover transition-transform duration-200 ease-in-out hover:scale-110" alt={project.title}></img>
              </div>


              <div className='font-extrabold text-2xl text-center'>
                {project.title}
              </div>


              <div className="px-6 pt-6 pb-4 sm:h-30">
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
