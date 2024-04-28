import React from 'react'
import { useRouter } from 'next/router';

const projectCard = ({ projectId,title, description, type, createdOn }) => {

  const handleDelete = () => {
    // Add your delete logic here
    console.log("Delete project");
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg border border-purple-500 relative cursor-pointer">
      <button 
        onClick={handleDelete} 
        className="absolute top-1 right-2 text-gray-300 hover:text-gray-100"
        aria-label="Delete project"
      >
        &times; {/* This is a simple "X" symbol used as a delete button */}
      </button>
      <h3 className="text-xl font-bold mb-2 text-pink-400 opacity-90">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-purple-300">{type}</p>
      <p className="text-xs pt-1">{`Created on ${createdOn}`}</p>
    </div>
  );
}


export default projectCard
