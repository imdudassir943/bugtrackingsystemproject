import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className="px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="text-left">
          <h2 className="text-slate-900 text-3xl font-bold mb-6">Projects Information & Highlights</h2>
          <p className="mb-4 text-[15px] text-slate-600 leading-relaxed">Get detailed insights into each of our projects — from concept to completion. Explore objectives, technologies used, development timelines, and the challenges overcome along the way. Whether it’s a web application, mobile solution, or research-based system, this section highlights the creativity and technical depth behind every project.</p>
          <p className="mb-4 text-[15px] text-slate-600 leading-relaxed">Discover the stories behind our projects — how ideas turned into impactful digital solutions. Learn about the tools, frameworks, and strategies that powered each build, and see how innovation meets functionality in every project we deliver.</p>
          <p className="text-[15px] text-slate-600 leading-relaxed">Explore comprehensive information about our projects, including architecture details, tech stacks, and implementation approaches. Each project showcases problem-solving skills, efficient design patterns, and optimized workflows aimed at delivering high-quality solutions.</p>
        </div>
        <div>
          <img src="https://readymadeui.com/images/kpis-dashboard-img.webp" alt="hero Image" className="rounded-lg object-contain w-full h-full" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects