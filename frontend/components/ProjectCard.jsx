import React from 'react'

const projectCard = ({ title, description, type, createdOn }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg border border-purple-500">
      <h3 className="text-xl font-bold mb-2 text-pink-400 opacity-90">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-purple-300">{type}</p>
      <p className="text-xs pt-1">{`Created on ${createdOn}`}</p>
    </div>
  )
}

export default projectCard
