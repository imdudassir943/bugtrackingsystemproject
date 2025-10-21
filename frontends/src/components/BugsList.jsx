import React from "react";

const BugsListPage = () => {

  const deleteBug = async (pk) => {
        try {
            await fetch(`http://127.0.0.1:8000/api-bugs/bugs/${pk}`, { 
                method: "DELETE",
                headers: {

                    "Authorization": `Bearer ${TOKEN}` 
                },
            });

            setBugsInfo((prev) => prev.filter((bug) => bug.id !== pk));
        } catch (error) {
            console.error("error while deleting the bug", error);
        }
    };

  
  const bugs = [
    {
      id: 1,
      title: "Login Button Not Working",
      description: "Clicking the 'Login' button does nothing in Chrome browser.",
      screenshot: "https://readymadeui.com/Imagination.webp",
      type: "Bug",
      status: "New",
      deadline: "2025-10-20",
    },
    {
      id: 2,
      title: "Add Search Filter in Dashboard",
      description: "Add a filter for searching bugs based on their status.",
      screenshot: "https://readymadeui.com/Imagination.webp",
      type: "Feature",
      status: "Started",
      deadline: "2025-10-25",
    },
    {
      id: 3,
      title: "Fix Navbar Overlapping Issue",
      description: "Navbar overlaps content on smaller screens.",
      screenshot: "https://readymadeui.com/Imagination.webp",
      type: "Bug",
      status: "Resolved",
      deadline: "2025-10-22",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        Bugs List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {bugs.map((bug) => (
          <div
            key={bug.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden"
          >
            <div className="aspect-[3/2]">
              <img
                src={bug.screenshot}
                alt={bug.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-slate-900 text-lg font-semibold mb-2">
                {bug.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {bug.description}
              </p>

              <div className="flex flex-wrap items-center justify-between mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                  {bug.type}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-md ${
                    bug.status === "New"
                      ? "bg-yellow-100 text-yellow-700"
                      : bug.status === "Started"
                      ? "bg-blue-100 text-blue-700"
                      : bug.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {bug.status}
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Deadline: {bug.deadline}
              </p>

              <div className="flex justify-center gap-3">
                <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all">
                  Edit
                </button>
                <button onClick={deleteBug} className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BugsListPage;
