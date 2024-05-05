import React from 'react'
import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';

const dashboard = () => {
  //get project data from api
  const userId=Cookies.get('user');
  // const userId = user.id;
  // const userId = user.id;

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`http://3.93.167.118:8000/project/show_all_projects/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data.projects);
        console.log(data.projects);
      } catch (error) {
        // For demo purposes, we'll use a hard-coded project list if the API fails
        console.error('Failed to fetch projects:', error);
        // setError(error.message || 'Failed to load');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [userId]); // Dependency array includes userId to refetch if it changes

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading projects: {error}</p>;
  }

  return (
    <>
    <Head>
      <title>Projects | Texim.ai</title>
    </Head>
    <div className="min-h-screen bg-gray-950 text-white">
    <div className="container mx-auto p-8">
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-bold">Project</h1>
    <Link href='project/new' passHref>
    <button className="bg-gradient-to-r from-purple-500 to-pink-500   text-white font-bold py-2 px-4 rounded">
      Add new project
    </button>
    </Link>
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link href={`/project/${project.project_id}`} passHref>
            <ProjectCard key={project.project_id} projectId={project.project_id} title={project.title} description={project.content} type={project.type} createdOn={project.created_time}/>
            </Link>
          ))} 
        </div>
      </div>
    </div>
  </>
  )
}

export default dashboard
