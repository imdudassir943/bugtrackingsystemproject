import React, { useState, useEffect } from "react";


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYwNzI5MTk4LCJpYXQiOjE3NjA3MTExOTgsImp0aSI6IjY2MjRmYTUxZTYyMDRlYzM4ZWZlODNiNDcwMzRjOWVlIiwidXNlcl9pZCI6IjEifQ.Nyi4Rft5G3T01MtfJFRKQOnVkarHJzPhIsAmIGdOPL4"; 
const PROJECT_PK = 7; 

const UpdateProjectForm = ({ projectId = PROJECT_PK, onUpdateSuccess }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        manager: "",
        qas: [],
        developer: [], 
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateProject = async (pk) => {
        setLoading(true);
        setError(null);
        try {
            
            const response = await fetch(`http://127.0.0.1:8000/api-projects/projects/${pk}/`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN}`, 
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch {
                    errorData = { detail: `HTTP error! status: ${response.status}` };
                }
                throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
            }

            const updatedProjectData = await response.json();
            console.log("Project updated successfully:", updatedProjectData);

            if (onUpdateSuccess) {
                onUpdateSuccess(updatedProjectData);
            }

            alert(`Project "${updatedProjectData.name}" updated successfully!`);

        } catch (error) {
            console.error("Error while updating the project:", error.message);
            setError(error.message || "An unknown error occurred while updating the project.");
            alert(`Update failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMultiSelectChange = (e, field) => {
        const selectedValues = Array.from(e.target.selectedOptions, (opt) => opt.value);
        setFormData((prev) => ({ ...prev, [field]: selectedValues }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Attempting to update project data:", formData);
        
        updateProject(projectId); 
    };

    if (loading) {
        return <div className="text-center py-10">Loading project data...</div>;
    }

    if (error && !loading) {
    
    }


    return (
        <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-start">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Update Project (AT ID: {projectId})</h2>

                {error && <p className="text-red-500 text-center mb-4">Error: {error}</p>}

                <form onSubmit={handleSubmit} className="space-y-5">
            
                    <div>
                        <label className="block text-slate-700 font-medium mb-1">Project Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter project name"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-slate-700 font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter project description"
                            rows="4"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-slate-700 font-medium mb-1">Manager</label>
                        <select
                            name="manager"
                            value={formData.manager}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                            required
                        >
                            <option value="">Select Manager</option>
                            {/* In a real app, these options would be fetched */}
                            <option value="manager1">Manager 1</option>
                            <option value="manager2">Manager 2</option>
                            <option value="manager3">Manager 3</option>
                        </select>
                    </div>


                    <div>
                        <label className="block text-slate-700 font-medium mb-1">QAs</label>
                        <select
                            multiple
                            value={formData.qas}
                            onChange={(e) => handleMultiSelectChange(e, "qas")}
                            className="w-full border rounded-lg px-4 py-2 h-24" // Added height for multi-select
                        >
                            {/* In a real app, these options would be fetched */}
                            <option value="qa1">QA 1</option>
                            <option value="qa2">QA 2</option>
                            <option value="qa3">QA 3</option>
                        </select>
                    </div>


                    <div>
                        <label className="block text-slate-700 font-medium mb-1">Developers</label>
                        <select
                            multiple
                            value={formData.developers}
                            onChange={(e) => handleMultiSelectChange(e, "developers")}
                            className="w-full border rounded-lg px-4 py-2 h-24" // Added height for multi-select
                        >
                            {/* In a real app, these options would be fetched */}
                            <option value="dev1">Developer 1</option>
                            <option value="dev2">Developer 2</option>
                            <option value="dev3">Developer 3</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
                    >
                        {loading ? "Updating..." : "Update Project"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProjectForm;