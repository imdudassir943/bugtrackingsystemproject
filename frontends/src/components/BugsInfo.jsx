import React, { useEffect, useState } from "react";

const BugInfo = () => {

  const [bugsInfo, setBugsInfo] = useState("");
  const [bugTitle, setBugTitle] = useState("");
  const [bugDescripton, setBugDescription] = useState("");
  const [completionDeadline, setCompletionDeadline] = useState("");
  const [bugImage, setBugImage] = useState("");
  const [bugType, setBugType] = useState("");
  const [bugStatus, setBugStatus] = useState("");

  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYwNzI4MTgwLCJpYXQiOjE3NjA3MTAxODAsImp0aSI6ImY2ZGQyZjU1NTdkZDQ1MWE4N2QwN2QxYmQ5NGVjYTM3IiwidXNlcl9pZCI6IjEifQ.u5xuHWQKH2s7sJ1PtM2j0V7whYp3lKHR2kreU6lnkZM"

  useEffect(() => {
    fetchBug();
  }, [])

  const fetchBug = async() => {
    try{
      const response = await fetch("http://127.0.0.1:8000/api-bugs/bugs/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${TOKEN}`
        },
      });
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setBugsInfo(data)
    }catch(error){
      console.log("Error while fetching bugs", error)
    }
  }

  const addBug = async() => {
    const bugData = {
      title: bugTitle,
      description: bugDescripton,
      deadline: completionDeadline,
      screenshot: bugImage,
    }

    try{
      const response = await fetch("http://127.0.0.1:8000/api-bugs/bugs/",{
        method: "POST",
        headers: {
          "Conent-Type": "application/json",
          "authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify(bugData)
      });

      const data = await response.json()
      setBugsInfo((prev) => [...prev, data])

            setBugTitle("");
            setBugDescription("");
            setCompletionDeadline("");
            setBugType("");
            setBugStatus("");
            setBugImage("");

            alert("Bugs added successfully!");

    } catch(error){
      console.log("Error while adding the bugs", error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 my-6">
      <form onSubmit={(e) => {e.preventDefault(); addBug()}} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-slate-800">
          Add New Bug
        </h2>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-medium mb-2">
            Bug Title
          </label>
          <input
            onChange={(e) => setBugTitle(e.target.value)}
            value={bugTitle}
            type="text"
            name="title"
            placeholder="Enter bug title"
            className="w-full p-3 border rounded-md bg-slate-100 text-sm text-slate-900 focus:bg-transparent outline-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            onChange={(e) => setBugDescription(e.target.value)}
            value={bugDescripton}
            name="description"
            placeholder="Describe the issue..."
            rows="4"
            className="w-full p-3 border rounded-md bg-slate-100 text-sm text-slate-900 focus:bg-transparent outline-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-medium mb-2">
            Deadline
          </label>
          <input
            onChange={(e) => setCompletionDeadline(e.target.value)}
            value={completionDeadline}
            type="date"
            name="deadline"
            className="w-full p-3 border rounded-md bg-slate-100 text-sm text-slate-900 focus:bg-transparent outline-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-medium mb-2">
            Screenshot (.png or .gif)
          </label>
          <input
            onChange={(e) => setBugImage(e.target.value)}
            value={bugImage}
            type="file"
            name="screenshot"
            accept=".png, .gif"
            className="w-full p-2 border rounded-md bg-slate-100 text-sm text-slate-900"
          />
        </div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-medium mb-2">
            Type
          </label>
          <select
            name="type"
            className="w-full p-3 border rounded-md bg-slate-100 text-sm text-slate-900 focus:bg-transparent outline-blue-500"
          >
            <option value="">Select type</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-slate-900 text-sm font-medium mb-2">
            Status
          </label>
          <select
            name="status"
            className="w-full p-3 border rounded-md bg-slate-100 text-sm text-slate-900 focus:bg-transparent outline-blue-500"
          >
            <option value="">Select status</option>
            <option value="new">New</option>
            <option value="started">Started</option>
            <option value="resolved">Resolved</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          onClick={addBug}
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all"
        >
          Add Bug
        </button>
      </form>
    </div>
  );
};

export default BugInfo;
