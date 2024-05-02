import React from 'react'
import { useRouter } from 'next/router';

const projectCard = ({ projectId,title, description, type, createdOn }) => {
  const router = useRouter();
  const handleDelete = async (event) => {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await fetch(`http://localhost:8000/project/delete_project/${projectId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          alert('Failed to delete the project.');
        }

        router.reload(); // This reloads the current page
      } catch (error) {
        console.error('Error deleting the project:', error);
        alert('Error deleting the project.');
      }
    }
  };

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg border border-purple-500 relative cursor-pointer h-52 overflow-auto">
      <button 
        onClick={handleDelete} 
        className="absolute top-1 right-2 text-gray-300 hover:text-gray-100"
        aria-label="Delete project"
      >
        &times; {/* This is a simple "X" symbol used as a delete button */}
      </button>
      <div className="flex flex-col justify-between h-full">
      <h3 className="text-xl font-bold mb-2 text-pink-400 opacity-90">{title}</h3>
      <p className="mb-2">{truncateText(description,100)}</p>
      <p className="text-purple-300">{type} Style</p>
      <p className="text-xs pt-1">{`Created on ${createdOn.split('T')[0]}`}</p>
    </div>
    </div>
  );
}


export default projectCard
