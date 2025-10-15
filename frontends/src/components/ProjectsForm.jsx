import React from 'react'
import ProjectImg from '../../src/assets/unsplash.jpg'
import ProjectImg1 from '../assets/ProjectImage1.jpg'
import ProjectImg2 from '../assets/ProjectImage2.jpg'
import ProjectImg3 from '../assets/ProjectImage3.jpg'

const projects = [
    {
      id: 1,
      name: "Bug Tracker System",
      description: "A full-stack platform to manage bugs, assign developers, and track progress in real-time.",
      created_at: "2025-09-25",
      manager: "Abdullah Asim",
      qas: ["Mudassir Sharif", "Ali Khan"],
      developers: ["Umer Sharif", "Hassan Raza"],
      image: ProjectImg1,
    },
    {
      id: 2,
      name: "Pharma Management App",
      description: "An application for managing pharmaceutical sales and stock levels efficiently.",
      created_at: "2025-10-02",
      manager: "Sara Malik",
      qas: ["Ahmed Ali"],
      developers: ["Waqas Ahmed", "Taha Malik"],
      image: ProjectImg2,
    },
    {
      id: 3,
      name: "E-Learning Portal",
      description: "A web platform for online courses, quizzes, and progress tracking.",
      created_at: "2025-10-10",
      manager: "Fahad Khan",
      qas: ["Mudassir Sharif"],
      developers: ["Ali Hamza", "Sana Khan"],
      image: ProjectImg3,
    },
  ];

const ProjectsForm = () => {
  return (
    <div>

    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        Projects List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden"
          >
            <div className="aspect-[3/2]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-slate-900 text-lg font-semibold mb-2">
                {project.name}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-3">
                <p className="text-sm">
                  <strong className="text-slate-700">Manager:</strong>{" "}
                  {project.manager}
                </p>
                <p className="text-sm">
                  <strong className="text-slate-700">QAs:</strong>{" "}
                  {project.qas.join(", ")}
                </p>
                <p className="text-sm">
                  <strong className="text-slate-700">Developers:</strong>{" "}
                  {project.developers.join(", ")}
                </p>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Created At: {project.created_at}
              </p>

              <div className="flex justify-center gap-3">
                <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all">
                  Edit
                </button>
                <button className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div class="px-4 py-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
        <div class="text-left">
          <h2 class="text-slate-900 text-3xl font-bold mb-6">Projects Information & Highlights</h2>
          <p class="mb-4 text-[15px] text-slate-600 leading-relaxed">Get detailed insights into each of our projects — from concept to completion. Explore objectives, technologies used, development timelines, and the challenges overcome along the way. Whether it’s a web application, mobile solution, or research-based system, this section highlights the creativity and technical depth behind every project.</p>
          <p class="mb-4 text-[15px] text-slate-600 leading-relaxed">Discover the stories behind our projects — how ideas turned into impactful digital solutions. Learn about the tools, frameworks, and strategies that powered each build, and see how innovation meets functionality in every project we deliver.</p>
          <p class="text-[15px] text-slate-600 leading-relaxed">Explore comprehensive information about our projects, including architecture details, tech stacks, and implementation approaches. Each project showcases problem-solving skills, efficient design patterns, and optimized workflows aimed at delivering high-quality solutions.</p>
        </div>
        <div>
          <img src="https://readymadeui.com/images/kpis-dashboard-img.webp" alt="hero Image" class="rounded-lg object-contain w-full h-full" />
        </div>
      </div>
    </div>

    <div class="bg-gray-50 max-w-screen-xl mx-auto my-20">
      <div class="grid lg:grid-cols-3 justify-center items-center gap-y-12">
        <div class="lg:col-span-2 p-8 w-full max-w-2xl mx-auto">
          <div>
            <h2 class="text-3xl text-slate-900 font-bold">Add New Project</h2>
            <p class="text-[15px] text-slate-600 leading-relaxed mt-4">Have a new idea or ongoing work to showcase? Add your project here! Share your project details, goals, and progress to keep your team and collaborators updated. Let’s bring your ideas to life and make them part of our growing collection of projects.</p>
          </div>
          <form class="mt-8">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class='text-sm text-slate-900 font-medium mb-2 block'>Project Name</label>
                <input type='text' placeholder='Enter Project Name'
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" />
              </div>
              
              <div>
                <label class='text-sm text-slate-900 font-medium mb-2 block'>Project Manager</label>
                <input type='text' placeholder='Enter Project Manager Name'
                  class="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" />
              </div>
              <div class="col-span-full">
                <label class='text-sm text-slate-900 font-medium mb-2 block'>Project Description</label>
                <textarea placeholder='Describe Your Project' rows="6"
                  class="w-full px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm pt-3 outline-0 rounded-md"></textarea>
              </div>
            </div>
            <button type='button'
              class="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-3 w-full border-0 outline-0 rounded-md cursor-pointer mt-6">Add The Project</button>
          </form>
        </div>

        <div class="relative lg:h-screen">
          <img src={ProjectImg} alt="app-img"
            class="w-full h-full object-cover object-top lg:absolute lg:right-0 lg:top-0 lg:bottom-0" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectsForm