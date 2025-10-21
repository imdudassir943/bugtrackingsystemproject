import React from 'react'
import ProjectImg from '../../src/assets/unsplash.jpg'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

const ProjectsPage = () => {

    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [manager, setManager] = useState("");
    const [qas, setQas] = useState("");
    const [developer, setDeveloper] = useState(""); 

    const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYwNzI4MTgwLCJpYXQiOjE3NjA3MTAxODAsImp0aSI6ImY2ZGQyZjU1NTdkZDQ1MWE4N2QwN2QxYmQ5NGVjYTM3IiwidXNlcl9pZCI6IjEifQ.u5xuHWQKH2s7sJ1PtM2j0V7whYp3lKHR2kreU6lnkZM"
    useEffect(() => {
        fetchProject();
    }, [])

    const fetchProject = async() => {
        try{
            
            const response = await fetch("http://127.0.0.1:8000/api-projects/projects/", {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${TOKEN}`
                },
            })
            
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json()
            
            setProjects(data) 
            
        }catch(error){
            console.error("Error fetching projects:", error) 
        }
    }

    const addProject = async() => {

        const projectData = {
            name: projectName,
            description: description,
            
            manager,
            qas: qas.split(',').map(item => item.trim()), 
            developers: developer.split(',').map(item => item.trim()), 
        }

        try{
            const response = await fetch("http://127.0.0.1:8000/api-projects/projects/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                    "Authorization": `Bearer ${TOKEN}` 
                },
                body: JSON.stringify(projectData)
            })

            if (!response.ok) {
                
                const errorData = await response.json().catch(() => ({ detail: 'Failed to parse error message' }));
                console.error("API Error Response:", errorData);
                throw new Error(`HTTP error! status: ${response.status}. Details: ${errorData.detail || 'No further details.'}`);
            }

            const data = await response.json()
            
            setProjects((prev) => [...prev, data])

            setProjectName("");
            setDescription("");
            setManager("");
            setQas("");
            setDeveloper("");

            alert("Project added successfully!");

        } catch(error){
            console.error("Error while adding the project:", error)
            alert("Error adding the project. Check console for details.");
        }
    }

    
    const deleteProject = async (pk) => {
        try {
            await fetch(`http://127.0.0.1:8000/api-projects/projects/${pk}`, { 
                method: "DELETE",
                headers: {

                    "Authorization": `Bearer ${TOKEN}` 
                },
            });

            setProjects((prev) => prev.filter((project) => project.id !== pk));
        } catch (error) {
            console.error("error while deleting the project", error);
        }
    };


    const handleManagerChange = (e) => {
        setManager(e.target.value);
    };


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
                                        {typeof project.manager === 'object' && project.manager !== null
                                            ? project.manager.username || project.manager.id
                                            : project.manager || 'N/A'
                                        }
                                    </p>
                                    <p className="text-sm">
                                        <strong className="text-slate-700">QAs:</strong>{" "}
                                        {Array.isArray(project.qas) 
                                            ? project.qas.map(qa => 
                                                    typeof qa === 'object' && qa !== null ? qa.username : qa
                                                ).join(", ") 
                                            : 'N/A'
                                        } 
                                    </p>
                                    <p className="text-sm">
                                        <strong className="text-slate-700">Developers:</strong>{" "}
                                        {Array.isArray(project.developers) 
                                            ? project.developers.map(dev => 
                                                    typeof dev === 'object' && dev !== null ? dev.username : dev
                                                ).join(", ") 
                                            : 'N/A'
                                        }
                                    </p>
                                </div>

                                <div className="flex justify-center gap-3">
                                    <Link to="/edit" className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all">Edit</Link>
                                    <button onClick={() => deleteProject(project.id)} className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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


        <div className="bg-gray-50 max-w-screen-xl mx-auto my-20">
            <div className="grid lg:grid-cols-3 justify-center items-center gap-y-12">
                <div className="lg:col-span-2 p-8 w-full max-w-2xl mx-auto">
                    <div>
                        <h2 className="text-3xl text-slate-900 font-bold">Add New Project</h2>
                        <p className="text-[15px] text-slate-600 leading-relaxed mt-4">Have a new idea or ongoing work to showcase? Add your project here! Share your project details, goals, and progress to keep your team and collaborators updated. Let’s bring your ideas to life and make them part of our growing collection of projects.</p>
                    </div>

                    <form className="mt-8" onSubmit={(e) => { e.preventDefault(); addProject(); }}>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Project Name</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Project Name'
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" 
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Project Manager</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Project Manager Name'
                                    value={manager}
                                    onChange={(e) => setManager(e.target.value)}
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" 
                                    required
                                />
                                
                            </div>
                            <div className="col-span-full">
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Project Description</label>
                                <textarea 
                                    placeholder='Describe Your Project' 
                                    rows="6"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm pt-3 outline-0 rounded-md"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Project Developer's</label>
                                <input 
                                    type='text' 
                                    placeholder='e.g., dev1, dev2, dev3'
                                    value={developer}
                                    onChange={(e) => setDeveloper(e.target.value)}
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" 
                                />
                            </div>
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Project QA's</label>
                                <input 
                                    type='text' 
                                    placeholder="e.g., qa1, qa2"
                                    value={qas}
                                    onChange={(e) => setQas(e.target.value)}
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" 
                                />
                            </div>
                        </div>
                        <button type='submit'
                            className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-3 w-full border-0 outline-0 rounded-md cursor-pointer mt-6">
                            Add The Project
                        </button>
                    </form>
                </div>

                <div className="relative lg:h-screen">
                    <img src={ProjectImg} alt="app-img"
                        className="w-full h-full object-cover object-top lg:absolute lg:right-0 lg:top-0 lg:bottom-0" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectsPage;