"use client";
import React, { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6">
      <h1 className="text-[1.7rem] font-bold mb-8 flex items-center space-x-2">
        <span role="img" aria-label="scientist">
          🧑‍🔬
        </span>
        <span>RAVIAN: Your AI Data Scientist</span>
      </h1>
      <div className="border-2 border-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-sm font-medium mb-2">Choose a file</label>
        <div className="flex items-center space-x-4">
          <div className="flex-1 border-2 border-dashed border-gray-600 p-4 rounded-lg text-center cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              Drag and drop file here
              <p className="text-sm text-gray-400 mt-1">Limit 200MB per file</p>
            </label>
          </div>
          <button className="bg-blue-500 border-2 border-slate-800 px-4 py-2 rounded-lg hover:bg-blue-800">
            Browse files
          </button>
        </div>
        <p className=" text-gray-400 mt-4">
          {file ? file.name : "No data has been uploaded"}
        </p>
        <label className="block text-sm font-medium mt-6 mb-2">
          Enter your question
        </label>
        <input
          type="text"
          className="w-full border-2 border-slate-800 p-2 rounded-lg mb-4"
        />
        <button className="bg-blue-500 border-2 border-slate-800 w-full py-2 rounded-lg  hover:bg-blue-800">
          Run
        </button>
      </div>
    </div>
  );
}
