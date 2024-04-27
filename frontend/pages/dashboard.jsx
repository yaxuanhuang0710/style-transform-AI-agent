import React from 'react'
import ProjectCard from '../components/ProjectCard';
import Head from 'next/head';

const projects = [
  { id: 1, title: 'Title', description: 'Lorem ipsum...',type: 'Linkedin Style', createdOn: 'May 20th' },
  { id: 1, title: 'Title', description: 'Lorem ipsum...', type: 'Linkedin Style', createdOn: 'May 20th' },
  { id: 1, title: 'Title', description: 'Lorem ipsum...', type: 'Linkedin Style', createdOn: 'May 20th' },
   { id: 1, title: 'Title', description: 'Lorem ipsum...', type: 'Linkedin Style', createdOn: 'May 20th' },
];

const dashboard = () => {
  return (
    <>
    <Head>
      <title>Projects | Texim.ai</title>
    </Head>
    <div className="min-h-screen bg-black text-white">
    <div className="container mx-auto p-8">
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-bold">Project</h1>
    <button className="bg-gradient-to-r from-purple-500 to-pink-500   text-white font-bold py-2 px-4 rounded">
      Add new project
    </button>
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} type={project.type} createdOn={project.createdOn}/>
          ))} 
        </div>
      </div>
    </div>
  </>
  )
}

export default dashboard
