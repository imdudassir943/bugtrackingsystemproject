import React from "react";

import attachmentImg1 from '../assets/attachment1.jpg'
import attachmentImg2 from '../assets/attachment2.jpg'
import attachmentImg3 from '../assets/attachment3.jpg'

const Features = () => {

  
  const attachments = [
    {
      id: 1,
      file: attachmentImg1,
      uploaded_by: "Mudassir",
      created_at: "2025-10-10",
    },
    {
      id: 2,
      file: attachmentImg2,
      uploaded_by: "Usman",
      created_at: "2025-10-10",
    },
    {
      id: 3,
      file: attachmentImg3,
      uploaded_by: "Ahsan",
      created_at: "2025-10-12",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        Attachments List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {attachments.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden"
          >
            <div className="aspect-[3/2] bg-slate-50">
              <img
                src={item.file}
                alt="Attachment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-slate-900 text-sm mb-2">
                <strong>Uploaded By:</strong> {item.uploaded_by}
              </p>
              <p className="text-gray-600 text-xs">
                Uploaded On: {item.created_at}
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <button onClick={viewData} className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all">
                  View
                </button>
                <button onClick={deleteData} className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all">
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

export default Features;
