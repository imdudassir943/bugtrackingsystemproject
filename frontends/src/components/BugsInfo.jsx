import React from "react";

const BugInfo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 my-6">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-slate-800">
          Add New Bug
        </h2>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-medium mb-2">
            Bug Title
          </label>
          <input
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
